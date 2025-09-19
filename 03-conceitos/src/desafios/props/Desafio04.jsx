// DESAFIO 04 - Props Children
//
// Objetivo: Finalizar o componente Badge para que utilize todas as props passadas
//
// Instruções:
// Complete o componente Badge para que utilize todas as props passadas para ele.
// O componente deve renderizar não apenas as props tradicionais, mas também
// o conteúdo passado como children.
//
// Tarefas:
// 1. Dê à imagem uma tag alt apropriada usando o nome do autor
// 2. Certifique-se de que o badge exiba a imagem de perfil corretamente
// 3. Exiba o nome do autor no cabeçalho do badge
// 4. Exiba o handle do autor abaixo do cabeçalho
// 5. Exiba o texto da bio abaixo dos cabeçalhos
// 6. Passe o manipulador de clique para o botão para que abra um alerta quando clicado

import "./index.css";

function Badge({ name, img, handle }) {
  return (
    <div className="desafio-badge">
      <img className="desafio-img" alt={`Avatar for ${name}`} src={img} />
      <header>
        <h4 className="desafio-h4">{name}</h4>
        <h6 className="desafio-h6">@{handle}</h6>
      </header>
    </div>
  );
}

export default function App() {
  const handleAddFriend = () => alert("Adicionado!");

  return (
    <Badge name="Thomas Lefebvre" handle="thomas_lefebvre_433" img="https://picsum.photos/id/433/200/200">
      <p className="desafio-p">Thomas adora programar, jogar futebol e assistir séries de tecnologia.</p>
      <button className="desafio-button-yellow" onClick={handleAddFriend}>
        Adicionar Amigo
      </button>
    </Badge>
  );
}
