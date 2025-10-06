import { useRef, useState } from "react";
import "./styles.css";

/*
Desafio React useRef - Notas de Campo

Descrição:
Neste desafio você deve completar um app que coleta novas notas do usuário e as exibe 
em uma lista. Sempre que uma nova nota for adicionada, você precisará fazer scroll 
para que ela apareça na tela.

Tarefas:
- [ ] Adicionar uma nova nota quando o usuário enviar o formulário
- [ ] Fazer scroll da nova nota para a visualização
- [ ] Limpar o campo de entrada quando o usuário enviar uma nota válida
- [ ] Evitar que notas vazias sejam adicionadas
*/

export default function FieldNotes() {
  const lastNoteRef = useRef();
  const [notes, setNotes] = useState([
    "Componentes encapsulam tanto a representação visual de uma parte específica da UI quanto o estado e a lógica que a acompanham.",
    "A mesma intuição que você tem sobre criar e compor funções pode ser aplicada diretamente à criação e composição de componentes. No entanto, em vez de compor funções para obter algum valor, você pode compor componentes para obter alguma UI.",
    "JSX combina o poder e a expressividade do JavaScript com a legibilidade e acessibilidade do HTML",
    "Assim como um componente possibilitou a composição e reutilização de UI, os hooks possibilitaram a composição e reutilização de lógica não visual.",
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newNote = formData.get("note");
  };

  return (
    <section className="desafio-container">
      <h1>Notas de Campo</h1>
      <div className="notes-wrapper">
        <ul className="notes-list">
          {notes.map((msg, index) => (
            <li key={index}>{msg}</li>
          ))}
        </ul>
        <form onSubmit={handleSubmit} className="note-form">
          <input
            required
            type="text"
            name="note"
            placeholder="Digite sua nota..."
            className="note-input"
          />
          <button className="submit-button" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
