import "./index.css";
import { useEffect, useState } from "react";

const ExemploPadroesUseEffect = () => {
  const [contador, setContador] = useState(0);
  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div className="exemplo-container">
      <h2>Padrões comuns de useEffect</h2>
      <p>Contador: {contador}</p>
      <button className="exemplo-btn" onClick={() => setContador(contador + 1)}>
        Incrementar
      </button>
      <p>Veja o título da aba mudando!</p>
    </div>
  );
};

export default ExemploPadroesUseEffect;
