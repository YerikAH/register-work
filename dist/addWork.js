import { validateInput } from "./helpers/validateInput.js";
export default function addWork(newWork, nameWork, timeHours, hour, minute, second) {
    newWork.addEventListener("click", (e) => {
        e.preventDefault();
        const saveData = {
            nameWork: "",
            timeHours: "",
            hour: "",
            minute: "",
            second: "",
        };
        let aa = validateInput(hour, 24);
        console.log(aa);
        console.log(saveData);
    });
}
