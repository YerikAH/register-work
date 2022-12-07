import { voidInput } from "./helpers/voidInput.js";
import { argAddWork } from "./interfaces/interface.js";
import { ErrorInput } from "./interfaces/variables.js";
export default function validateHtmlInput(
  data: argAddWork,
  messageError: HTMLElement
) {
  let { newWork, nameWork, timeHours, hour, minute, second } = data;
  let $elementText: HTMLElement =
    messageError.firstElementChild! as HTMLElement;

  newWork.addEventListener("click", (e) => {
    e.preventDefault();

    let ifError = voidInput(nameWork, timeHours, hour, minute, second);

    if (ifError) {
      $elementText.textContent =
        "An error occurred, did I complete all the fields?";
      messageError.style.setProperty("border", "1px solid var(--red)");
      $elementText.style.setProperty("color", "var(--red)");
      localStorage.setItem(ErrorInput, "TRUE");
    } else {
      $elementText.textContent = "The job was created successfully";
      messageError.style.setProperty("border", "1px solid var(--blue)");
      $elementText.style.setProperty("color", "var(--blue)");
      localStorage.setItem(ErrorInput, "FALSE");
    }

    messageError.style.setProperty("display", "block");
    setTimeout(() => {
      messageError.style.setProperty("display", "none");
    }, 3000);
  });
}
