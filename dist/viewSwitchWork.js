import { ModalDoor } from "./interfaces/variables.js";
export default function viewSwitchWork(modal, addWork, viewWork, buttonView) {
    buttonView.addEventListener("click", (e) => {
        doorOpenQuestion();
        addWork.classList.add("add-work-active");
        viewWork.classList.add("view-work-active");
    });
    function doorOpenQuestion() {
        const door = localStorage.getItem(ModalDoor);
        if (typeof door === "string") {
            if (door === "OPEN VIEW") {
                localStorage.setItem(ModalDoor, "CLOSE VIEW");
                modal.classList.toggle("modal-active"); // close
            }
            else if (door === "OPEN ADD") {
                localStorage.setItem(ModalDoor, "OPEN VIEW");
            }
            else {
                localStorage.setItem(ModalDoor, "OPEN VIEW");
                modal.classList.toggle("modal-active"); // open
            }
        }
        else {
            localStorage.setItem(ModalDoor, "OPEN VIEW");
            modal.classList.toggle("modal-active"); // open
        }
    }
}
