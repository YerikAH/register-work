export default function switchModal(modal, buttonModal) {
    buttonModal.addEventListener("click", () => {
        modal.classList.toggle("modal-active");
    });
}
