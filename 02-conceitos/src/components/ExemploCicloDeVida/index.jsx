import "./index.css";
import { useEffect } from "react";

const ExemploCicloDeVida = () => {
  useEffect(() => {
    alert("Componente montado!");
    return () => {
      alert("Componente desmontado!");
    };
  }, []);
  return (
    <div className="exemplo-container">
      <h2>Ciclo de Vida</h2>
      <p>Veja os alerts ao montar/desmontar o componente.</p>
    </div>
  );
};

export default ExemploCicloDeVida;
