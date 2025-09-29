import { useState } from "react";
import "./styles.css";

/*
Desafio React useState - Input de Senha com Visibilidade

Descrição:
Neste desafio, você vai implementar a lógica para um campo de input que aceita uma senha. No entanto, ao invés de um campo de input chato, este é como... ligeiramente menos chato.

O que o torna menos chato é que dá ao usuário a opção de alternar a visibilidade da senha fornecendo um botão com alguns emojis fofos, 🙊 ou 🙈 dependendo se a senha está visível.

Todo o JSX está no lugar, tudo que você precisa fazer é lidar adequadamente com os diferentes estados do componente e atualizar handleChange e handleToggleVisibility para que o componente se comporte como esperado.

Tarefas:
- [x] Atualizar a contagem do comprimento da senha quando o input mudar
- [x] Atualizar o estilo do texto baseado no limite mínimo da senha
- [ ] Permitir aos usuários alternar a visibilidade da senha
- [ ] Mostrar um alert com mensagem de sucesso quando o comprimento da senha for igual ou acima do limite na submissão do formulário
- [ ] Mostrar um alert com mensagem de erro quando o comprimento da senha estiver abaixo do limite na submissão do formulário
*/

export default function Desafio04({ minimo = 8 }) {
  const [inputValue, setInputValue] = useState("");
  const [isInputValueVisible, setInputValueVisible] = useState(false);
  const limiteRespeitado = inputValue.length >= minimo;

  const handleChange = (e) => setInputValue(e.target.value);

  const handleToggleVisibility = () =>
    setInputValueVisible(!isInputValueVisible);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (limiteRespeitado) {
      alert("Senha enviada com sucesso!");
    } else {
      alert("Você precisa de uma senha mais longa");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Senha:</label>
        <span className={limiteRespeitado ? "no-error" : "error"}>
          {inputValue.length}
        </span>
      </div>
      <div className="input-container">
        <input
          placeholder="Digite uma senha"
          type={isInputValueVisible ? "text" : "password"}
          id="limited-text-input"
          value={inputValue}
          onChange={handleChange}
        />
        <button
          type="button"
          className="toggle-btn"
          onClick={handleToggleVisibility}
        >
          {isInputValueVisible ? "🙊" : "🙈"}
        </button>
      </div>

      <button type="submit" className="primary">
        Enviar
      </button>
    </form>
  );
}
