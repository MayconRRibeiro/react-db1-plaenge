import "./styles.css";

/*
Desafio React useRef - Textarea Expansível

Descrição:
Neste desafio você precisará adicionar funcionalidade ao app para que o usuário possa 
digitar no textarea e ele irá expandir para se ajustar ao conteúdo conforme digitam.

Tarefas:
- [ ] Atualizar o valor do textarea quando estiver digitando
- [ ] Definir a altura do textarea baseada na sua altura de scroll
*/

export default function ExpandingTextarea() {
  const text = "";

  return (
    <section className="desafio-container">
      <h1>Textarea Expansível</h1>
      <div className="form-group">
        <label htmlFor="textarea">Digite ou cole algum texto</label>
        <textarea
          id="textarea"
          placeholder="Digite algum texto"
          value={text}
          onChange={() => {}}
          rows={1}
          className="expanding-textarea"
        />
      </div>
    </section>
  );
}
