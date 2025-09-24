import "./styles.css";

/*
Desafio React useState - Contador

Descrição:
Este desafio é bem direto. Incremente ou decremente o count sempre que o usuário clicar no botão correspondente.

Tarefas:
- [ ] Renderizar o estado inicial corretamente
- [ ] Incrementar count quando o usuário clicar no botão "+"
- [ ] Decrementar count quando o usuário clicar no botão "-"
- [ ] Renderizar o count correto após múltiplos cliques nos botões
- [ ] Adicionar botão de reset, quando o usuário clicar no botão "reset", o count deve voltar para 0
*/

export default function Desafio02() {
  const count = 0;

  return (
    <main>
      <span>{count}</span>
      <div>
        <button>-</button>
        <button>+</button>
      </div>
    </main>
  );
}
