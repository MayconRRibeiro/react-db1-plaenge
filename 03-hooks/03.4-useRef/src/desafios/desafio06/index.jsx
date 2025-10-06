import "./styles.css";

/*
Desafio React useRef - Siga o Líder

Descrição:
O conceito é simples: animar o centro da caixa para as coordenadas onde o usuário clica.

Para fazer isso, você precisará atualizar o array de posição para incluir as novas 
posições x e y para onde a caixa deve se transformar.

Tarefas:
- [ ] Animar a caixa para as coordenadas onde o usuário clica
*/

export default function FollowTheLeader() {
  const position = [0, 0];

  const handleClick = ({ clientX, clientY }) => {};

  return (
    <div className="wrapper">
      <div
        className="box"
        style={{
          transform: `translate(${position[0]}px, ${position[1]}px)`,
          transition: "transform 1s",
        }}
      />
    </div>
  );
}
