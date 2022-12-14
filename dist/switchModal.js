import { doorOpenQuestion } from "./helpers/doorOpenQuestion.js";
export default function switchModal(modal, buttonModal, addWork, viewWork) {
    buttonModal.addEventListener("click", () => {
        doorOpenQuestion(modal, "ADD", "VIEW");
        addWork.classList.remove("add-work-active");
        viewWork.classList.remove("view-work-active");
    });
}
