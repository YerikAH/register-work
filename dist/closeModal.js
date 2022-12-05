import { ClassToggleModal, ModalDoor } from "./interfaces/variables.js";
export default function closeModal(modal) {
    document.addEventListener("click", (e) => {
        const targetElement = e.target;
        if (targetElement instanceof HTMLElement) {
            if (targetElement.className == "modal-bg") {
                modal.classList.toggle(ClassToggleModal);
                localStorage.removeItem(ModalDoor);
            }
        }
    });
}
