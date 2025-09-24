import "./styles.css";

/*
Desafio React useState - Formulário Multi-Etapas

Descrição:
Neste desafio você recebe um formulário multi-etapas para obter dados do usuário. Com o JSX já no lugar, atualize o estado do componente e funções para permitir que o usuário progrida através do formulário, atualizando o estado conforme necessário.

Tarefas:
- [ ] Permitir ao usuário transicionar para a próxima etapa
- [ ] Permitir ao usuário retornar para a etapa anterior
- [ ] Atualizar formData conforme o usuário progride através do formulário
- [ ] Quando terminar, submeter o formulário e resetar o estado do componente
*/

const initialFormData = {
  name: "",
  email: "",
  address: "",
  city: "",
  zipcode: "",
};

export default function Desafio05() {
  const currentStep = 1;
  const formData = initialFormData;

  const handleChange = () => {};

  const handleNextStep = () => {};

  const handlePrevStep = () => {};

  const handleSubmit = () => {
    alert("Obrigado pela sua submissão!");
  };

  if (currentStep === 1) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Informações Pessoais</h2>
        <div className="progress-container">
          <label>Etapa {currentStep} de 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <div className="field-group">
          <label htmlFor="name">Nome</label>
          <input
            required
            name="name"
            id="name"
            placeholder="Digite seu nome"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label htmlFor="email">Email</label>
          <input
            required
            name="email"
            id="email"
            type="email"
            placeholder="Digite seu email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="button" className="secondary" onClick={handleNextStep}>
          Próximo
        </button>
      </form>
    );
  } else if (currentStep === 2) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Endereço</h2>
        <div className="progress-container">
          <label>Etapa {currentStep} de 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <div className="field-group">
          <label htmlFor="address">Endereço</label>
          <input
            required
            name="address"
            id="address"
            type="text"
            placeholder="Qual é seu endereço?"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label htmlFor="city">Cidade</label>
          <input
            required
            name="city"
            id="city"
            placeholder="Em qual cidade você mora?"
            value={formData.city}
            onChange={handleChange}
          />
        </div>
        <div className="field-group">
          <label htmlFor="zipcode">CEP</label>
          <input
            required
            name="zipcode"
            id="zipcode"
            type="number"
            placeholder="Qual é seu CEP?"
            value={formData.zipcode}
            onChange={handleChange}
          />
        </div>
        <div className="button-group">
          <button className="secondary" type="button" onClick={handleNextStep}>
            Próximo
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Anterior
          </button>
        </div>
      </form>
    );
  } else if (currentStep === 3) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Confirme suas informações:</h2>
        <div className="progress-container">
          <label>Etapa {currentStep} de 3</label>
          <progress value={currentStep} max={3} />
        </div>
        <table>
          <tbody>
            {Object.keys(formData).map((key) => {
              const displayNames = {
                name: "Nome",
                email: "Email",
                address: "Endereço",
                city: "Cidade",
                zipcode: "CEP",
              };
              return (
                <tr key={key}>
                  <td>{displayNames[key]}</td>
                  <td>{formData[key]}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="button-group">
          <button className="primary" type="submit">
            Enviar
          </button>
          <button type="button" className="link" onClick={handlePrevStep}>
            Anterior
          </button>
        </div>
      </form>
    );
  } else {
    return null;
  }
}
