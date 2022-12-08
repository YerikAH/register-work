import { validateInput } from "./helpers/validateInput.js";
import { voidInput } from "./helpers/voidInput.js";
import { argAddWork } from "./interfaces/interface.js";
import {
  MessageEmpty,
  MessageHour,
  MessageMinute,
  MessageSecond,
  MessageSuccess,
  MessageTimeHour,
} from "./interfaces/messages.js";
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
    let messageForError: string = "";
    const ifError = voidInput(nameWork, timeHours, hour, minute, second);
    const validateHourInput = validateInput(hour, 24);
    const validateMinuteInput = validateInput(minute, 60);
    const validateSecondInput = validateInput(second, 60);
    const validateTimeHoursInput = validateInput(timeHours, 7);

    if (ifError) {
      messageForError = MessageEmpty;
    } else if (validateHourInput) {
      messageForError = MessageHour;
    } else if (validateMinuteInput) {
      messageForError = MessageMinute;
    } else if (validateSecondInput) {
      messageForError = MessageSecond;
    } else if (validateTimeHoursInput) {
      messageForError = MessageTimeHour;
    }

    if (
      ifError ||
      validateHourInput ||
      validateMinuteInput ||
      validateSecondInput ||
      validateTimeHoursInput
    ) {
      $elementText.textContent = messageForError;
      messageError.style.setProperty("border", "1px solid var(--red)");
      $elementText.style.setProperty("color", "var(--red)");
      localStorage.setItem(ErrorInput, "TRUE");
    } else {
      $elementText.textContent = MessageSuccess;
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
