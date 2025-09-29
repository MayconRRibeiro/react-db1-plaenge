import { useState } from "react";
import "./styles.css";

/*
Desafio React useState - Contador

Descrição:
Este desafio é bem direto. Incremente ou decremente o count sempre que o usuário clicar no botão correspondente.

Tarefas:
- [x] Renderizar o estado inicial corretamente
- [x] Incrementar count quando o usuário clicar no botão "+"
- [x] Decrementar count quando o usuário clicar no botão "-"
- [x] Renderizar o count correto após múltiplos cliques nos botões
- [x] Adicionar botão de reset, quando o usuário clicar no botão "reset", o count deve voltar para 0
*/

export default function Desafio02() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => setCount(count + 1);
  const handleDecrement = () => setCount(count - 1);
  const handleReset = () => setCount(0);

  return (
    <main>
      <span>{count}</span>
      <div>
        <button onClick={handleDecrement}>-</button>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </main>
  );
}
