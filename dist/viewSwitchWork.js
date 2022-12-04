import { doorOpenQuestion } from "./helpers/doorOpenQuestion.js";
export default function viewSwitchWork(modal, addWork, viewWork, buttonView) {
    buttonView.addEventListener("click", (e) => {
        doorOpenQuestion(modal, "VIEW", "ADD");
        addWork.classList.add("add-work-active");
        viewWork.classList.add("view-work-active");
    });
}
