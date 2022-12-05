import { ClassToggleModal, ModalDoor } from "../interfaces/variables.js";
export function doorOpenQuestion(
  modal: HTMLElement,
  buttonOne: string, // ADD
  buttonTwo: string // VIEW
) {
  const door = localStorage.getItem(ModalDoor);
  if (typeof door === "string") {
    if (door === `OPEN ${buttonOne}`) {
      localStorage.setItem(ModalDoor, `CLOSE ${buttonOne}`);
      modal.classList.toggle(ClassToggleModal); // close
    } else if (door === `OPEN ${buttonTwo}`) {
      localStorage.setItem(ModalDoor, `OPEN ${buttonOne}`);
    } else {
      localStorage.setItem(ModalDoor, `OPEN ${buttonOne}`);
      modal.classList.toggle(ClassToggleModal); // open
    }
  } else {
    localStorage.setItem(ModalDoor, `OPEN ${buttonOne}`);
    modal.classList.toggle(ClassToggleModal); // open
  }
}
