// DESAFIO 03 - Props de Função
//
// Objetivo: Usar props de função para criar componentes menores e focados
//
// Instruções:
// Muitas vezes, queremos dividir nossa UI em componentes menores e mais focados
// para tornar nosso código mais fácil de ler e testar. Neste desafio, pegue as
// props sendo passadas para o componente Badge e use-as para renderizar a UI adequada.
//
// Tarefas:
// 1. Dê à imagem uma tag alt apropriada usando o nome do autor
// 2. Certifique-se de que o badge exiba a imagem de perfil corretamente
// 3. Exiba o nome do autor no cabeçalho do badge
// 4. Exiba o handle do autor abaixo do cabeçalho
// 5. Passe o manipulador de clique para o botão para que abra um alerta quando clicado

import "./index.css";

function Avatar() {
  return <img src={``} alt={``} />;
}

function Name() {
  return <h4>name</h4>;
}

function Handle() {
  return <p>@HANDLE</p>;
}

function Badge() {
  return (
    <div style={{}}>
      <Avatar />
      <div>
        <Name />
        <Handle />
        <button onClick={() => {}}>Add Friend</button>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Badge
      user={{
        name: "Victor Erixon",
        img: "https://picsum.photos/id/281/200/200",
        handle: "victor_erixon_281",
      }}
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
      addFriend={() => alert("Adicionado!")}
    />
  );
}
