import { doorOpenQuestion } from "./helpers/doorOpenQuestion.js";
export default function switchModal(
  modal: HTMLElement,
  buttonModal: HTMLElement,
  addWork: HTMLElement,
  viewWork: HTMLElement
) {
  buttonModal.addEventListener("click", () => {
    doorOpenQuestion(modal, "ADD", "VIEW");
    addWork.classList.remove("add-work-active");
    viewWork.classList.remove("view-work-active");
  });
}
// add  view
