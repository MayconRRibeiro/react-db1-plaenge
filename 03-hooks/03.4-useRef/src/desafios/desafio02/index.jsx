import "./styles.css";

/*
Desafio React useRef - Player de Vídeo

Descrição:
Neste desafio, você dará ao usuário a capacidade de reproduzir e pausar o vídeo. 
Para fazer isso, você precisará invocar os métodos play ou pause no próprio elemento 
de vídeo. Você também vai querer atualizar a UI para refletir o estado atual do vídeo.

Tarefas:
- [ ] Alternar o estado de reprodução quando o botão for clicado
- [ ] Reproduzir e pausar o vídeo quando o botão for clicado
*/

export default function VideoPlayer() {
  const isPlaying = false;

  const handleTogglePlay = () => {};

  return (
    <section className="desafio-container">
      <h1>Player de Vídeo</h1>
      <article className="video-container">
        <video
          className="video-player"
          poster="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/ElephantsDream.jpg"
        >
          <source
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
            type="video/mp4"
          />
          <track kind="captions" src="" label="Português" default />
          Seu navegador não suporta o elemento de vídeo.
        </video>
        <div className="controls">
          <button
            className="play-button"
            title={isPlaying ? "Pausar" : "Reproduzir"}
            onClick={handleTogglePlay}
          >
            {isPlaying ? "⏸" : "▶"}
          </button>
        </div>
      </article>
    </section>
  );
}
