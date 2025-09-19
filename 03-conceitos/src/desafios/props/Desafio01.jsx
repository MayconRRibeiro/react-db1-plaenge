// DESAFIO 01 - Props Básicas
//
// Objetivo: Aplicar as props sendo passadas para o componente Badge
//
// Instruções:
// Atualmente, nosso componente Badge está exibindo valores fixos no código.
// Em vez de renderizar valores estáticos, queremos passá-los como props.
// Neste desafio, seu objetivo é aplicar as props sendo passadas para o
// componente Badge (name, handle, e img) para que ele renderize corretamente.
//
// Tarefas:
// 1. Dê à imagem uma tag alt apropriada usando o nome do autor
// 2. Certifique-se de que o badge exiba a imagem de perfil corretamente
// 3. Exiba o nome do autor no cabeçalho do badge
// 4. Exiba o handle do autor abaixo do cabeçalho

import "./index.css";

function Badge() {
  return (
    <div className="desafio-badge">
      <img alt={``} src={``} />
      <div>
        <h4>NAME</h4>
        <p>@HANDLE</p>
      </div>
    </div>
  );
}

export default function App() {
  return <Badge name="Charlie Foster" handle="charlie_foster_129" img="https://picsum.photos/id/129/200" />;
}
