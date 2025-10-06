import "./styles.css";

/*
Desafio React useRef - Foco Automático no Input

Descrição:
Neste desafio, você receberá uma ref e um elemento de input simples. Seu trabalho é 
fazer com que o input receba foco automaticamente quando o componente for renderizado 
pela primeira vez.

Tarefas:
- [ ] Garantir que o foco seja aplicado quando o componente renderiza
*/

function TextInput() {
  return (
    <section className="desafio-container">
      <h1>Input com Foco Automático</h1>
      <div className="form-group">
        <label htmlFor="focus">Endereço de Email</label>
        <input
          id="focus"
          type="email"
          placeholder="Digite seu email"
          className="input-field"
        />
      </div>
    </section>
  );
}

export default TextInput;
