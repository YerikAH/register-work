import { validateInput } from "./helpers/validateInput.js";
import { voidInput } from "./helpers/voidInput.js";
import { MessageEmpty, MessageErrorUnknow, MessageHour, MessageMinute, MessageNoRepeat, MessageSecond, MessageSuccess, MessageTimeHour, } from "./interfaces/messages.js";
import { ErrorInput } from "./interfaces/variables.js";
import { noRepeatTime } from "./noRepeatTime.js";
export default function validateHtmlInput(data, messageError) {
    let { newWork, nameWork, timeHours, hour, minute, second } = data;
    let $elementText = messageError.firstElementChild;
    newWork.addEventListener("click", (e) => {
        e.preventDefault();
        let messageForError = "";
        const ifError = voidInput(nameWork, timeHours, hour, minute, second);
        const validateHourInput = validateInput(hour, 24);
        const validateMinuteInput = validateInput(minute, 60);
        const validateSecondInput = validateInput(second, 60);
        const validateTimeHoursInput = validateInput(timeHours, 7);
        const validateNoRepeat = noRepeatTime(hour);
        if (ifError) {
            messageForError = MessageEmpty;
        }
        else if (validateHourInput) {
            messageForError = MessageHour;
        }
        else if (validateMinuteInput) {
            messageForError = MessageMinute;
        }
        else if (validateSecondInput) {
            messageForError = MessageSecond;
        }
        else if (validateTimeHoursInput) {
            messageForError = MessageTimeHour;
        }
        else if (validateNoRepeat) {
            messageForError = MessageNoRepeat;
        }
        else {
            messageForError = MessageErrorUnknow;
        }
        if (ifError ||
            validateHourInput ||
            validateMinuteInput ||
            validateSecondInput ||
            validateTimeHoursInput ||
            validateNoRepeat) {
            $elementText.textContent = messageForError;
            messageError.style.setProperty("border", "1px solid var(--red)");
            $elementText.style.setProperty("color", "var(--red)");
            localStorage.setItem(ErrorInput, "TRUE");
        }
        else {
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
