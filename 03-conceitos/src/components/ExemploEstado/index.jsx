import "./index.css";
import { useState } from "react";

// ExemploEstado
const Contador = () => {
  const [numero, setNumero] = useState(0);

  const onIncrementar = () => setNumero(numero + 1);

  return (
    <div className="exemplo-container">
      <h2>Controle de Estado</h2>
      <p>Contador: {numero}</p>
      <button className="exemplo-btn" onClick={onIncrementar}>
        Incrementar
      </button>
    </div>
  );
};

export default Contador;
