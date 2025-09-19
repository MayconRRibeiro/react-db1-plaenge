import "./index.css";

const pizzas = [
  { id: 1, nome: "Mussarela" },
  { id: 2, nome: "Calabresa" },
  { id: 3, nome: "Portuguesa" },
];

const ExemploRenderizacaoLista = () => {
  return (
    <div className="exemplo-container">
      <h2>Renderização de Listas</h2>
      <ul className="exemplo-lista">
        {pizzas.map((pizza) => (
          <li key={pizza.id} className="exemplo-lista-item">
            {pizza.nome}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExemploRenderizacaoLista;
