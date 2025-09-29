import "./index.css";
import { useState } from "react";

const ExemploMultiplosEstados = () => {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  return (
    <div className="exemplo-container">
      <h2>Múltiplos Estados</h2>
      <input
        type="text"
        placeholder="Nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        className="exemplo-input"
      />
      <input
        type="number"
        placeholder="Idade"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
        className="exemplo-input"
        style={{ marginLeft: 8 }}
      />
      <p>
        Nome: {nome}, Idade: {idade}
      </p>
    </div>
  );
};

export default ExemploMultiplosEstados;
