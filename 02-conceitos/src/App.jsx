import { createRoot } from "react-dom/client";
import { useState } from "react";
import ExemploPropsChildren from "./components/ExemploPropsChildren";
import Contador from "./components/ExemploEstado";
import ExemploMultiplosEstados from "./components/ExemploMultiplosEstados";
import ExemploCicloDeVida from "./components/ExemploCicloDeVida";
import ExemploRenderizacaoCondicional from "./components/ExemploRenderizacaoCondicional";
import ExemploRenderizacaoLista from "./components/ExemploRenderizacaoLista";
import ExemploValidacaoFormulario from "./components/ExemploValidacaoFormulario";

import Desafio01 from "./desafios/props/Desafio01";
import Desafio02 from "./desafios/props/Desafio02";
import Desafio03 from "./desafios/props/Desafio03";
import Desafio04 from "./desafios/props/Desafio04";

import Desafios from "./components/Desafios";

const App = () => {
  const [exemploAtivo, setExemploAtivo] = useState(null);

  const exemplos = [
    {
      id: "props",
      titulo: "Props e Children",
      componente: (
        <ExemploPropsChildren>
          <p>Este é um conteúdo passado como children.</p>
          <button onClick={() => alert("Botão clicado!")}>Clique-me</button>
        </ExemploPropsChildren>
      ),
    },
    { id: "estado", titulo: "Controle de Estado", componente: <Contador /> },
    { id: "estados-multiplos", titulo: "Controle de Estado - Multiplos", componente: <ExemploMultiplosEstados /> },
    { id: "ciclo-vida", titulo: "Ciclo de Vida", componente: <ExemploCicloDeVida /> },
    {
      id: "renderizacao-condicional",
      titulo: "Renderização Condicional",
      componente: <ExemploRenderizacaoCondicional />,
    },
    { id: "renderizacao-lista", titulo: "Renderização de Listas", componente: <ExemploRenderizacaoLista /> },
    { id: "validacao-formulario", titulo: "Validação de Formulários", componente: <ExemploValidacaoFormulario /> },
  ];

  const desafiosProps = [
    { id: "desafio-01", titulo: "🎯 Desafio 01 - String Props", componente: <Desafio01 /> },
    { id: "desafio-02", titulo: "🎯 Desafio 02 - Object Props", componente: <Desafio02 /> },
    { id: "desafio-03", titulo: "🎯 Desafio 03 - Function Props", componente: <Desafio03 /> },
    { id: "desafio-04", titulo: "🎯 Desafio 04 - Children Props", componente: <Desafio04 /> },
  ];

  const todosItens = [...exemplos, ...desafiosProps];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1 style={{ textAlign: "center", color: "#333", marginBottom: "30px" }}>Exemplos de Conceitos React</h1>

      {/* Seção Conceitos */}
      <div style={{ marginBottom: "40px" }}>
        <h2 style={{ color: "#333", borderBottom: "2px solid #28a745", paddingBottom: "10px" }}>
          📚 Conceitos Principais
        </h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "10px",
            marginBottom: "20px",
            justifyContent: "center",
          }}
        >
          {exemplos.map((exemplo, index) => (
            <button
              key={exemplo.id}
              onClick={() => setExemploAtivo(exemploAtivo === exemplo.id ? null : exemplo.id)}
              style={{
                padding: "12px 20px",
                backgroundColor: exemploAtivo === exemplo.id ? "#28a745" : "#f8f9fa",
                color: exemploAtivo === exemplo.id ? "white" : "#333",
                border: exemploAtivo === exemplo.id ? "2px solid #28a745" : "2px solid #ddd",
                borderRadius: "8px",
                cursor: "pointer",
                fontSize: "14px",
                fontWeight: "500",
                transition: "all 0.2s ease",
                minWidth: "200px",
                textAlign: "left",
              }}
              onMouseEnter={(e) => {
                if (exemploAtivo !== exemplo.id) {
                  e.target.style.backgroundColor = "#e9ecef";
                  e.target.style.borderColor = "#28a745";
                }
              }}
              onMouseLeave={(e) => {
                if (exemploAtivo !== exemplo.id) {
                  e.target.style.backgroundColor = "#f8f9fa";
                  e.target.style.borderColor = "#ddd";
                }
              }}
            >
              {index + 1}. {exemplo.titulo}
            </button>
          ))}
        </div>
      </div>

      {/* Seção Desafios Props */}
      <Desafios titulo="Desafios Práticos - Props" desafios={desafiosProps} />

      {/* Área de Exibição */}
      {exemploAtivo && (
        <div
          style={{
            border: `2px solid ${desafiosProps.find((d) => d.id === exemploAtivo) ? "#6c757d" : "#28a745"}`,
            borderRadius: "10px",
            padding: "25px",
            backgroundColor: desafiosProps.find((d) => d.id === exemploAtivo) ? "#f8f9fa" : "#f8fff8",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <h2
            style={{
              color: desafiosProps.find((d) => d.id === exemploAtivo) ? "#6c757d" : "#28a745",
              marginTop: 0,
              marginBottom: "20px",
              borderBottom: `2px solid ${desafiosProps.find((d) => d.id === exemploAtivo) ? "#6c757d" : "#28a745"}`,
              paddingBottom: "10px",
            }}
          >
            {todosItens.find((ex) => ex.id === exemploAtivo)?.titulo}
          </h2>
          {todosItens.find((ex) => ex.id === exemploAtivo)?.componente}
        </div>
      )}
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<App />);
