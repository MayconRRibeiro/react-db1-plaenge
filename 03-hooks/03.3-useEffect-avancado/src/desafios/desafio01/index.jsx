import "./styles.css";

/*
Desafio React useEffect - Relógio Digital

Descrição:
Neste desafio, você sincronizará o horário atual com o estado do seu componente, 
atualizando a UI a cada segundo com o novo horário. Para isso, você precisará da 
combinação correta de useEffect, estado do componente e o método setInterval do navegador.

Tarefas:
- [ ] Atualizar o horário a cada segundo
- [ ] Limpar o timer quando o componente for desmontado
- [ ] Usar useEffect para gerenciar o ciclo de vida do timer
*/

export default function Relogio() {
  const time = null;

  if (time === null) return null;

  return (
    <section className="relogio-container">
      <h1>Horário Atual</h1>
      <p className="relogio-horario">{time.toLocaleTimeString("pt-BR")}</p>
    </section>
  );
}
