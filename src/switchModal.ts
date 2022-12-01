import anime from "../node_modules/@types/animejs/index";

export default function switchModal(
  modal: HTMLElement,
  buttonModal: HTMLElement
) {
  const clickButton = () => {
    anime({
      targets: modal,
      backgroundColor: "#FFF",
    });
  };
  buttonModal.addEventListener("click", clickButton);
}
