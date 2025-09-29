import "./index.css";
import { useState } from "react";

const ExemploValidacaoFormulario = () => {
  const [email, setEmail] = useState("");
  const [erro, setErro] = useState("");

  const validar = (e) => {
    e.preventDefault();
    if (!email.includes("@")) {
      setErro("Email inválido!");
    } else {
      setErro("");
      alert("Email válido!");
    }
  };

  return (
    <div className="exemplo-container">
      <h2>Validação de Formulários</h2>
      <form onSubmit={validar}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu email"
          className="exemplo-input"
        />
        <button className="exemplo-btn" type="submit">
          Validar
        </button>
      </form>
      {erro && <p className="exemplo-erro">{erro}</p>}
    </div>
  );
};

export default ExemploValidacaoFormulario;
