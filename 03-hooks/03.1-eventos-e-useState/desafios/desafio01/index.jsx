import { useState } from "react";
import "./styles.css";

/*
Desafio React useState - Alternar Modo Claro/Escuro

Descrição:
Para persistir um valor entre renderizações e atualizar a UI quando esse valor muda, 
precisamos usar o hook useState do React. 
Neste desafio, você precisa criar um botão que alterna o estado do modo entre claro e escuro.

Tarefas:
- [x] O app renderiza sem erros
- [x] O modo padrão é escuro
- [x] O modo alterna entre escuro e claro quando o botão é clicado
- [x] Após resolver, resolva utilizando 1 button só 
*/
export default function Desafio01() {
  const [mode, setMode] = useState("dark");

  const handleClick = () => {
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <main className={mode}>
      <button onClick={handleClick}>
        {mode === "dark" ? "Ativar Light Mode" : "Ativar Dark Mode"}
      </button>
    </main>
  );
}
