import { useEffect, useState } from "react";
import "./ExemploUseEffect.css";

// Regra #0 Quando um componente renderiza, deve acontecer de forma previsível. (Sem efeitos colaterais)
// Regra #1 Se um efeito colateral é disparado por um evento, ele deve ser disparado dentro do próprio evento.
// Regra #2 Se um efeito colateral sincroniza o seu componente com algo externo(API/localStorage/DOM), ele deve ser disparado dentro de um useEffect.
export default function ExemploUseEffect({ nome = "Visitante" }) {
  const [index, setIndex] = useState(0);

  const saudacoes = ["Hello", "Hola", "Bonjour"];

  const handleClick = () => {
    const proximoIndex = index === saudacoes.length - 1 ? 0 : index + 1;
    setIndex(proximoIndex);

    localStorage.setItem("index", proximoIndex);
  };

  useEffect(() => {
    const item = localStorage.getItem("index");
    if (item) setIndex(Number(item));
  }, []);

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
