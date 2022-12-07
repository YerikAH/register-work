import { validateInput } from "./helpers/validateInput.js";
import { voidInput } from "./helpers/voidInput.js";
import { ErrorInput } from "./interfaces/variables.js";
export default function validateHtmlInput(data, messageError) {
    let { newWork, nameWork, timeHours, hour, minute, second } = data;
    let $elementText = messageError.firstElementChild;
    newWork.addEventListener("click", (e) => {
        e.preventDefault();
        const ifError = voidInput(nameWork, timeHours, hour, minute, second);
        const validateHourInput = validateInput(hour, 25);
        //let timeBreakTime = timeBreaK(..arg) Add validate HTML
        if (ifError) {
            $elementText.textContent =
                "An error occurred, did I complete all the fields?";
            messageError.style.setProperty("border", "1px solid var(--red)");
            $elementText.style.setProperty("color", "var(--red)");
            localStorage.setItem(ErrorInput, "TRUE");
        }
        else {
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
