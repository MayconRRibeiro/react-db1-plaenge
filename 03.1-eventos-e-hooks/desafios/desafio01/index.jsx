import "./styles.css";

/*
Desafio React useState - Alternar Modo Claro/Escuro

Descrição:
Para persistir um valor entre renderizações e atualizar a UI quando esse valor muda, 
precisamos usar o hook useState do React. 
Neste desafio, você precisa criar um botão que alterna o estado do modo entre claro e escuro.

Tarefas:
- [ ] O app renderiza sem erros
- [ ] O modo padrão é escuro
- [ ] O modo alterna entre escuro e claro quando o botão é clicado
- [ ] Após resolver, resolva utilizando 1 button só 
*/
export default function Desafio01() {
  const mode = "dark";

  return (
    <main className={mode}>
      {mode === "light" ? (
        <button>Ativar Dark Mode</button>
      ) : (
        <button>Ativar Light Mode</button>
      )}
    </main>
  );
}
