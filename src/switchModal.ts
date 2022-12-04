export default function switchModal(
  modal: HTMLElement,
  buttonModal: HTMLElement
) {
  buttonModal.addEventListener("click", () => {
    modal.classList.toggle("modal-active");
    buttonModal.classList.toggle("icon-active");
  });
}
