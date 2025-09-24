import "./styles.css";

/*
Desafio React useState - Construtor de Formulários

Descrição:
Neste desafio vamos ficar meta e construir um construtor de formulários. Parece complexo, mas com o JSX já no lugar, seu trabalho principal é gerenciar o array formFields. O usuário precisará ser capaz de adicionar itens a ele, atualizar itens nele e remover itens dele.

Todas as funções com seus parâmetros estão no lugar, você só precisa examinar o JSX e atualizar cada uma adequadamente.

Tarefas:
- [ ] Permitir aos usuários adicionar um campo de formulário
- [ ] Permitir aos usuários deletar campos de formulário
- [ ] Permitir aos usuários atualizar valores dos campos de formulário
- [ ] Permitir aos usuários submeter o formulário dinâmico com os novos valores
*/

export default function Desafio06() {
  const formFields = [];

  const handleAddFormField = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const newField = {
      id: new Date().getTime(),
      type: formData.get("type"),
      label: formData.get("label"),
      placeholder: formData.get("placeholder"),
      required: formData.get("required"),
      value: ""
    };
  };

  const handleUpdateFormField = (id, updatedField) => {};

  const handleDeleteFormField = (id) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(formFields, null, 2));
  };

  return (
    <div className="form-builder-container">
      <h1>Construtor de Formulários</h1>
      
      <form id="form-builder" onSubmit={handleAddFormField}>
        <fieldset>
          <legend>Adicionar um Campo</legend>
          
          <div className="field-group">
            <label htmlFor="type">Tipo do Campo</label>
            <select name="type" id="type">
              <option value="text">Texto</option>
              <option value="number">Número</option>
              <option value="email">Email</option>
              <option value="password">Senha</option>
            </select>
          </div>
          
          <div className="checkbox-group">
            <label htmlFor="required">Obrigatório</label>
            <input type="checkbox" name="required" id="required" />
          </div>
          
          <div className="field-group">
            <label htmlFor="label">Rótulo</label>
            <input
              required
              type="text"
              name="label"
              id="label"
              placeholder="Digite um rótulo"
            />
          </div>
          
          <div className="field-group">
            <label htmlFor="placeholder">Placeholder</label>
            <input
              required
              type="text"
              id="placeholder"
              name="placeholder"
              placeholder="Digite um placeholder"
            />
          </div>
          
          <button type="submit" className="secondary">
            Adicionar Campo
          </button>
        </fieldset>
      </form>

      <form id="form-fields" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Campos do Formulário</legend>
          
          {formFields.length === 0 ? (
            <div className="empty-state">
              <span>Seus campos de formulário aparecerão aqui</span>
            </div>
          ) : (
            <ul className="form-fields-list">
              {formFields.map((field) => (
                <li key={field.id} className="form-field-item">
                  <div className="field-content">
                    <label htmlFor={`input-${field.id}`}>{field.label}</label>
                    <div className="input-actions">
                      <input
                        id={`input-${field.id}`}
                        required={field.required}
                        placeholder={field.placeholder}
                        type={field.type}
                        value={field.value}
                        onChange={(e) =>
                          handleUpdateFormField(field.id, { value: e.target.value })
                        }
                      />
                      <button
                        type="button"
                        className="delete-btn"
                        onClick={() => handleDeleteFormField(field.id)}
                        title="Deletar campo"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                  {field.required && <span className="required-indicator">*</span>}
                </li>
              ))}
            </ul>
          )}
          
          <button className="primary" disabled={formFields.length === 0}>
            Submeter Formulário
          </button>
        </fieldset>
      </form>
    </div>
  );
}