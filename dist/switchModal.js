import { ModalDoor } from "./interfaces/variables.js";
export default function switchModal(modal, buttonModal, addWork, viewWork) {
    buttonModal.addEventListener("click", () => {
        doorOpenQuestion();
        addWork.classList.remove("add-work-active");
        viewWork.classList.remove("view-work-active");
    });
    function doorOpenQuestion() {
        const door = localStorage.getItem(ModalDoor);
        if (typeof door === "string") {
            if (door === "OPEN ADD") {
                localStorage.setItem(ModalDoor, "CLOSE ADD");
                modal.classList.toggle("modal-active"); // close
            }
            else if (door === "OPEN VIEW") {
                localStorage.setItem(ModalDoor, "OPEN ADD");
            }
            else {
                localStorage.setItem(ModalDoor, "OPEN ADD");
                modal.classList.toggle("modal-active"); // open
            }
        }
        else {
            localStorage.setItem(ModalDoor, "OPEN ADD");
            modal.classList.toggle("modal-active"); // open
        }
    }
}
