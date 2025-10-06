import "./styles.css";
import { closeIcon } from "./icons";

/*
Desafio React useRef - Modal com Click Outside

Descrição:
Neste desafio você irá adicionar uma experiência de modal ao app. O usuário precisa 
conseguir abrir o modal e então fechá-lo clicando no ícone de fechar no próprio modal, 
ou clicando em qualquer lugar fora do modal.

Você precisará tanto do estado do componente quanto de uma referência ao modal para 
fazer funcionar adequadamente. Você também vai querer referenciar o evento pointerdown 
se não estiver familiarizado com ele.

Tarefas:
- [ ] Não renderizar o modal por padrão
- [ ] Clicar no botão 'Abrir Modal' deve abrir o modal
- [ ] Não fechar o modal quando o diálogo for clicado
- [ ] Fechar modal clicando no ícone de fechar
- [ ] Fechar o modal quando o usuário clicar fora do modal
*/

export default function ClickOutside() {
  const isOpen = false;

  const handleOpenModal = () => {};

  const handleCloseModal = () => {};

  return (
    <>
      <section className="desafio-container">
        <h1>Click Outside</h1>
        <button className="open-button" onClick={handleOpenModal}>
          Abrir Modal
        </button>
      </section>
      {isOpen && (
        <div className="modal-overlay">
          <dialog>
            <button className="close-button" onClick={handleCloseModal}>
              {closeIcon}
            </button>
            <h2>Modal</h2>
            <p>
              Clique fora do modal para fechar (ou use o botão) como preferir.
            </p>
          </dialog>
        </div>
      )}
    </>
  );
}
