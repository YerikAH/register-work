import { WorkSave } from "./interfaces/variables.js";
import { validateInput } from "./helpers/validateInput.js";
import { insertData } from "./helpers/insertData.js";
export default function addWork(newWork, nameWork, timeHours, hour, minute, second) {
    newWork.addEventListener("click", (e) => {
        e.preventDefault();
        const nameWorkReal = nameWork.value;
        const hourReal = validateInput(hour, 25);
        const minuteReal = validateInput(minute, 60);
        const secondReal = validateInput(second, 60);
        const timeHoursReal = validateInput(timeHours, 18000);
        const saveData = {
            nameWork: nameWorkReal,
            timeHours: timeHoursReal,
            hour: hourReal,
            minute: minuteReal,
            second: secondReal,
        };
        const getLocalStorage = localStorage.getItem(WorkSave);
        if (typeof getLocalStorage === "string") {
            insertData(saveData, getLocalStorage);
        }
        else {
            localStorage.setItem(WorkSave, "[]");
            insertData(saveData);
        }
    });
}
