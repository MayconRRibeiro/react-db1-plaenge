// DESAFIO 02 - Props com Objetos
//
// Objetivo: Aplicar props de objeto para o componente Badge
//
// Instruções:
// Embora este desafio pareça semelhante ao anterior, há algumas diferenças sutis.
// Como antes, aplique as novas props ao componente Badge para que ele renderize adequadamente.
// Neste caso, os dados do usuário vêm como um objeto, e os estilos são passados como prop.
//
// Tarefas:
// 1. Dê à imagem uma tag alt apropriada usando o nome do autor
// 2. Certifique-se de que o badge exiba a imagem de perfil corretamente
// 3. Exiba o nome do autor no cabeçalho do badge
// 4. Exiba o handle do autor abaixo do cabeçalho
// 5. Aplique os estilos corretos à div externa

import "./index.css";

const USER_DATA = {
  name: "Danka & Peter",
  img: "https://picsum.photos/id/177/200/200",
  handle: "danka_peter_177",
};

function Badge() {
  return (
    <div style={{}}>
      <img alt={``} src={``} />
      <div>
        <h4>NAME</h4>
        <p>@HANDLE</p>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={USER_DATA}
      style={{
        width: 280,
        margin: "0 auto",
        border: "1px solid #666",
        borderRadius: 12,
        background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
        color: "white",
        padding: "30px 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "8px",
        textAlign: "center",
        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
        fontFamily: "'Roboto', sans-serif",
      }}
    />
  );
}
