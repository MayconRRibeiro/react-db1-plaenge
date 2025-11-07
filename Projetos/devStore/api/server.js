import fastify from "fastify";
import fastifyStatic from "@fastify/static";
import path from "path";
import { fileURLToPath } from "url";
import { AsyncDatabase } from "promised-sqlite3";

const server = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

const PORT = process.env.PORT || 3001;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize database connection
const db = await AsyncDatabase.open("./store.sqlite");

// Register static file serving for product images
server.register(fastifyStatic, {
  root: path.join(__dirname, "public"),
  prefix: "/public/",
});

// GET /api/produtos - Get all produtos with optional category filter
server.get("/api/produtos", async function getProdutos(req, res) {
  try {
    const { categoria } = req.query;

    let produtos;
    if (categoria) {
      produtos = await db.all(
        "SELECT id, nome, categoria, preco, estoque, descricao, caracteristicas, imagem FROM produtos WHERE categoria = ?",
        [categoria]
      );
    } else {
      produtos = await db.all(
        "SELECT id, nome, categoria, preco, estoque, descricao, caracteristicas, imagem FROM produtos"
      );
    }

    // Parse caracteristicas from JSON string to array
    const parsedProdutos = produtos.map((produto) => ({
      ...produto,
      id: String(produto.id),
      caracteristicas: produto.caracteristicas
        ? JSON.parse(produto.caracteristicas)
        : [],
    }));

    res.send(parsedProdutos);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: "Erro ao buscar produtos" });
  }
});

// GET /api/produto/:id - Get produto by ID
server.get("/api/produto/:id", async function getProdutoById(req, res) {
  try {
    const { id } = req.params;

    const produto = await db.get(
      "SELECT id, nome, categoria, preco, estoque, descricao, caracteristicas, imagem FROM produtos WHERE id = ?",
      [id]
    );

    if (!produto) {
      res.status(404).send({ error: "Produto não encontrado" });
      return;
    }

    // Parse caracteristicas from JSON string to array
    const parsedProduto = {
      ...produto,
      id: String(produto.id),
      caracteristicas: produto.caracteristicas
        ? JSON.parse(produto.caracteristicas)
        : [],
    };

    res.send(parsedProduto);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: "Erro ao buscar produto" });
  }
});

// POST /api/produto - Create new produto
server.post("/api/produto", async function postProduto(req, res) {
  try {
    const { nome, categoria, preco, estoque, descricao, caracteristicas, imagem } = req.body;

    // Validation
    if (!nome || !categoria || preco === undefined || estoque === undefined || !descricao) {
      res.status(400).send({
        error: "Campos obrigatórios: nome, categoria, preco, estoque, descricao"
      });
      return;
    }

    // Validate categoria
    const categoriasValidas = ["Eletronicos", "Calcados", "Acessorios", "Roupas"];
    if (!categoriasValidas.includes(categoria)) {
      res.status(400).send({
        error: `Categoria inválida. Use: ${categoriasValidas.join(", ")}`
      });
      return;
    }

    // Validate preco and estoque are numbers
    if (typeof preco !== "number" || preco <= 0) {
      res.status(400).send({ error: "Preço deve ser um número maior que zero" });
      return;
    }

    if (typeof estoque !== "number" || estoque < 0) {
      res.status(400).send({ error: "Estoque deve ser um número não negativo" });
      return;
    }

    // Validate caracteristicas is array if provided
    if (caracteristicas && !Array.isArray(caracteristicas)) {
      res.status(400).send({ error: "Características devem ser um array de strings" });
      return;
    }

    // Prepare data for database
    const caracteristicasJson = caracteristicas ? JSON.stringify(caracteristicas) : null;
    const imagemUrl = imagem || "/public/produtos/default.jpg";

    // Insert into database
    const result = await db.run(
      `INSERT INTO produtos (nome, categoria, preco, estoque, descricao, caracteristicas, imagem)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
      [nome, categoria, preco, estoque, descricao, caracteristicasJson, imagemUrl]
    );

    // Get the inserted produto
    const novoProduto = await db.get(
      "SELECT id, nome, categoria, preco, estoque, descricao, caracteristicas, imagem FROM produtos WHERE id = ?",
      [result.lastID]
    );

    // Parse caracteristicas back to array
    const parsedProduto = {
      ...novoProduto,
      id: String(novoProduto.id),
      caracteristicas: novoProduto.caracteristicas
        ? JSON.parse(novoProduto.caracteristicas)
        : [],
    };

    req.log.info(`Novo produto criado: ${parsedProduto.nome} (ID: ${parsedProduto.id})`);

    res.status(201).send(parsedProduto);
  } catch (error) {
    req.log.error(error);
    res.status(500).send({ error: "Erro ao criar produto" });
  }
});

const start = async () => {
  try {
    await server.listen({ port: PORT });
    console.log(`DevStore API Server listening on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT}/api/produtos to see all products`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

start();
