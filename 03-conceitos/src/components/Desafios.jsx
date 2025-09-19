import { useState } from "react";

function Desafios({ titulo, desafios }) {
  const [exemploAtivo, setExemploAtivo] = useState(null);

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2 style={{ color: "#333", borderBottom: "2px solid #6c757d", paddingBottom: "10px" }}>🎯 {titulo}</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
          justifyContent: "center",
        }}
      >
        {desafios.map((desafio) => (
          <button
            key={desafio.id}
            onClick={() => setExemploAtivo(exemploAtivo === desafio.id ? null : desafio.id)}
            style={{
              padding: "12px 20px",
              backgroundColor: exemploAtivo === desafio.id ? "#6c757d" : "#f8f9fa",
              color: exemploAtivo === desafio.id ? "white" : "#495057",
              border: exemploAtivo === desafio.id ? "2px solid #6c757d" : "2px solid #dee2e6",
              borderRadius: "8px",
              cursor: "pointer",
              fontSize: "14px",
              fontWeight: "500",
              transition: "all 0.2s ease",
              minWidth: "220px",
              textAlign: "left",
            }}
            onMouseEnter={(e) => {
              if (exemploAtivo !== desafio.id) {
                e.target.style.backgroundColor = "#e9ecef";
                e.target.style.borderColor = "#6c757d";
              }
            }}
            onMouseLeave={(e) => {
              if (exemploAtivo !== desafio.id) {
                e.target.style.backgroundColor = "#f8f9fa";
                e.target.style.borderColor = "#dee2e6";
              }
            }}
          >
            {desafio.titulo}
          </button>
        ))}
      </div>

      {exemploAtivo && (
        <div style={{ marginTop: "20px" }}>{desafios.find((d) => d.id === exemploAtivo)?.componente}</div>
      )}
    </div>
  );
}

export default Desafios;
