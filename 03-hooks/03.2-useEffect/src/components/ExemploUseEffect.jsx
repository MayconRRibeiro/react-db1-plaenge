import { useState } from "react";
import "./ExemploUseEffect.css";

export default function ExemploUseEffect({ nome = "Visitante" }) {
  const [index, setIndex] = useState(() => {
    return Number(localStorage.getItem("index"));
  });

  const saudacoes = ["Hello", "Hola", "Bonjour"];

  const handleClick = () => {
    const proximoIndex = index === saudacoes.length - 1 ? 0 : index + 1;
    setIndex(proximoIndex);
  };

  return (
    <main className="saudacao-container">
      <h1 className="saudacao-titulo">
        {saudacoes[index]}, {nome}
      </h1>
      <button onClick={handleClick} className="saudacao-botao">
        Próxima Saudação
      </button>
    </main>
  );
}
