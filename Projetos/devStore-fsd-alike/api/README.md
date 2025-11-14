# DevStore API

Servidor API para o projeto DevStore construído com Fastify e SQLite.

## Começando

### Instalação

```bash
cd api
npm install
```

### Banco de Dados

O repositório já inclui o arquivo `store.sqlite` com dados de exemplo prontos para uso. Você não precisa criar ou inicializar o banco de dados!

O banco contém 8 produtos de exemplo em 4 categorias diferentes.

### Executando o Servidor

```bash
npm run dev
```

O servidor iniciará na porta 3001. Para verificar se está funcionando, acesse:
- http://localhost:3001/api/produtos

## Endpoints da API

### GET /api/produtos

Retorna todos os produtos com filtro opcional por categoria.

**Parâmetros de Query:**
- `categoria` (opcional): Filtra por categoria. Valores válidos: `Eletronicos`, `Calcados`, `Acessorios`, `Roupas`

**Exemplos:**
```bash
# Buscar todos os produtos
curl http://localhost:3001/api/produtos

# Buscar apenas Eletrônicos
curl http://localhost:3001/api/produtos?categoria=Eletronicos

# Buscar apenas Calçados
curl http://localhost:3001/api/produtos?categoria=Calcados
```

**Resposta:**
```json
[
  {
    "id": "1",
    "nome": "Notebook Dell Inspiron",
    "categoria": "Eletronicos",
    "preco": 3500.00,
    "estoque": 15,
    "descricao": "Notebook Dell Inspiron 15 com processador Intel Core i5",
    "caracteristicas": [
      "Processador Intel Core i5",
      "8GB RAM",
      "256GB SSD"
    ],
    "imagem": "/public/produtos/notebook-dell.jpg"
  }
]
```

### GET /api/produto/:id

Retorna um produto específico pelo ID.

**Exemplo:**
```bash
curl http://localhost:3001/api/produto/1
```

**Resposta:**
```json
{
  "id": "1",
  "nome": "Notebook Dell Inspiron",
  "categoria": "Eletronicos",
  "preco": 3500.00,
  "estoque": 15,
  "descricao": "Notebook Dell Inspiron 15 com processador Intel Core i5",
  "caracteristicas": [
    "Processador Intel Core i5",
    "8GB RAM",
    "256GB SSD"
  ],
  "imagem": "/public/produtos/notebook-dell.jpg"
}
```

### POST /api/produto

Cria um novo produto.

**Campos Obrigatórios:**
- `nome` (string): Nome do produto
- `categoria` (string): Categoria - deve ser uma das opções: `Eletronicos`, `Calcados`, `Acessorios`, `Roupas`
- `preco` (number): Preço (deve ser > 0)
- `estoque` (number): Quantidade em estoque (deve ser >= 0)
- `descricao` (string): Descrição do produto

**Campos Opcionais:**
- `caracteristicas` (string[]): Array de características do produto
- `imagem` (string): URL da imagem

**Exemplo:**
```bash
curl -X POST http://localhost:3001/api/produto \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "Fone de Ouvido Bluetooth",
    "categoria": "Eletronicos",
    "preco": 299.90,
    "estoque": 50,
    "descricao": "Fone de ouvido com cancelamento de ruído",
    "caracteristicas": [
      "Bluetooth 5.0",
      "Cancelamento de ruído ativo",
      "30h de bateria",
      "Microfone embutido"
    ],
    "imagem": "/public/produtos/fone-bluetooth.jpg"
  }'
```

**Resposta:**
```json
{
  "id": "9",
  "nome": "Fone de Ouvido Bluetooth",
  "categoria": "Eletronicos",
  "preco": 299.90,
  "estoque": 50,
  "descricao": "Fone de ouvido com cancelamento de ruído",
  "caracteristicas": [
    "Bluetooth 5.0",
    "Cancelamento de ruído ativo",
    "30h de bateria",
    "Microfone embutido"
  ],
  "imagem": "/public/produtos/fone-bluetooth.jpg"
}
```

## Categorias

A API suporta as seguintes categorias de produtos:
- `Eletronicos` - Eletrônicos
- `Calcados` - Calçados
- `Acessorios` - Acessórios
- `Roupas` - Roupas

## Usando com Vite Dev Server

A configuração do Vite está preparada para fazer proxy das requisições para o servidor Fastify:

1. Inicie o servidor API em um terminal:
   ```bash
   cd api
   npm run dev
   ```

2. Inicie o servidor Vite em outro terminal:
   ```bash
   cd ..
   npm run dev
   ```

Agora sua aplicação React pode fazer requisições para `/api/*` e `/public/*` e elas serão redirecionadas para o servidor API rodando na porta 3001.

## Schema do Banco de Dados

A tabela `produtos` possui a seguinte estrutura:

| Coluna | Tipo | Restrições | Descrição |
|--------|------|------------|-----------|
| id | INTEGER | PRIMARY KEY AUTOINCREMENT | Identificador único do produto |
| nome | TEXT | NOT NULL | Nome do produto |
| categoria | TEXT | NOT NULL, CHECK | Categoria (Eletronicos, Calcados, Acessorios, Roupas) |
| preco | REAL | NOT NULL, CHECK (> 0) | Preço do produto |
| estoque | INTEGER | NOT NULL, CHECK (>= 0) | Quantidade em estoque |
| descricao | TEXT | NOT NULL | Descrição do produto |
| caracteristicas | TEXT | - | Array JSON de características (armazenado como string) |
| imagem | TEXT | - | URL da imagem do produto |
| created_at | DATETIME | DEFAULT CURRENT_TIMESTAMP | Data de criação |

## Produtos de Exemplo

O banco de dados vem com 8 produtos de exemplo:

1. **Notebook Dell Inspiron** (Eletrônicos) - R$ 3.500,00
2. **Tenis Nike Air Max** (Calçados) - R$ 450,00
3. **Relógio Smartwatch** (Acessórios) - R$ 890,00
4. **Camiseta Polo Ralph Lauren** (Roupas) - R$ 250,00
5. **Mouse Gamer RGB** (Eletrônicos) - R$ 180,50
6. **Tenis Adidas Ultraboost** (Calçados) - R$ 650,00
7. **Óculos de Sol Ray-Ban** (Acessórios) - R$ 420,00
8. **Jaqueta Jeans Levi's** (Roupas) - R$ 380,00

## Observações

- A API usa banco de dados SQLite (`store.sqlite`), então os dados persistem entre reinicializações do servidor
- Imagens dos produtos devem ser colocadas no diretório `api/public/produtos/`
- O servidor usa `pino-pretty` para logs formatados
- O campo `caracteristicas` é armazenado como string JSON no banco e automaticamente convertido para/de array nas respostas da API
- O servidor usa `--watch` e reinicia automaticamente quando você edita o arquivo `server.js`
