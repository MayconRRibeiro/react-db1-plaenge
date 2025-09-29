import "./index.css";

const ExemploPropsChildren = (props) => {
  return (
    <div className="exemplo-container">
      <h2>Props e Children</h2>
      <p>Olá, {props.nome}!</p>
      <div>{props.children}</div>
    </div>
  );
};

export default ExemploPropsChildren;
