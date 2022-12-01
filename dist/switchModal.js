import anime from "../node_modules/@types/animejs/index.d.ts";
export default function switchModal(modal, buttonModal) {
  const clickButton = () => {
    anime({
      targets: modal,
      backgroundColor: "#FFF",
    });
  };
  buttonModal.addEventListener("click", clickButton);
}
