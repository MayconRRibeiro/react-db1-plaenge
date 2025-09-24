import "./styles.css";

/*
Desafio React useState - Input com Limite de Caracteres

Descrição:
Agora que você sabe como adicionar estado no React, vamos revisitar nosso desafio de Limite de Caracteres e torná-lo um pouco mais sofisticado.

O objetivo desta aplicação é obter algum input do usuário, mas apenas "submeter" esse input se o comprimento for menor ou igual ao characterLimit (20 caracteres, por padrão). Diferentemente de outros desafios de "Limite de Caracteres", este mostra ao usuário quantos caracteres restam antes de atingir o limite.

Tarefas:
- [ ] Desafio03 renderiza um input e botão enviar
- [ ] Atualizar a contagem de caracteres restantes quando o usuário digitar
- [ ] Adicionar classe "error" ao elemento span "Caracteres restantes:" quando o usuário exceder o limite e "no-error" quando não exceder
- [ ] alert "O texto excede o limite de caracteres. Por favor, encurte seu texto." quando o usuário submeter um formulário com muitos caracteres
- [ ] alert "Obrigado pela sua submissão!" quando o usuário submeter um formulário com número aceitável de caracteres
- [ ] Resetar o input para string vazia quando o formulário for submetido com sucesso
*/
export default function Desafio03({ limiteCaracteres = 20 }) {
  const inputValue = "";

  const handleChange = (e) => {};

  const handleSubmit = (e) => {
    e.preventDefault();

    // se o comprimento do input for muito longo
    // alert "O texto excede o limite de caracteres. Por favor, encurte seu texto."
    // senão
    // alert "Obrigado pela sua submissão!"
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="limited-text-input">Entrada de Texto Limitada:</label>
        <span className="no-error">Caracteres restantes: TODO</span>
      </div>
      <input
        type="text"
        placeholder="Digite algum texto"
        id="limited-text-input"
        value={inputValue}
        onChange={handleChange}
      />

      <button type="submit" className="primary">
        Enviar
      </button>
    </form>
  );
}
