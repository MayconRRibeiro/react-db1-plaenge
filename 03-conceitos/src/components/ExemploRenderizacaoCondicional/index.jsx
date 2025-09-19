import "./index.css";
import { useState } from "react";

const ExemploRenderizacaoCondicional = () => {
  const [logado, setLogado] = useState(false);
  return (
    <div className="exemplo-container">
      <h2>Renderização Condicional</h2>
      {logado ? <p>Bem-vindo, usuário!</p> : <p>Por favor, faça login.</p>}
      <button className="exemplo-btn" onClick={() => setLogado(!logado)}>
        {logado ? "Sair" : "Entrar"}
      </button>
    </div>
  );
};

export default ExemploRenderizacaoCondicional;
