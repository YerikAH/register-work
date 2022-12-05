import { WorkSave } from "./interfaces/variables.js";
import { validateInput } from "./helpers/validateInput.js";
import { insertData } from "./helpers/insertData.js";
import getWork from "./getWork.js";
export default function addWork(newWork, nameWork, timeHours, hour, minute, second) {
    newWork.addEventListener("click", (e) => {
        e.preventDefault();
        const ifError = errorInput(nameWork, timeHours, hour, minute, second);
        const nameWorkReal = nameWork.value;
        const hourReal = validateInput(hour, 25);
        const minuteReal = validateInput(minute, 60);
        const secondReal = validateInput(second, 60);
        const timeHoursReal = validateInput(timeHours, 18000);
        const idWork = `${Date.now()}`;
        const saveData = {
            nameWork: nameWorkReal,
            timeHours: timeHoursReal,
            hour: hourReal,
            minute: minuteReal,
            second: secondReal,
            idWork: idWork,
        };
        // reset input
        nameWork.value = "";
        timeHours.value = "";
        hour.value = "";
        minute.value = "";
        second.value = "";
        const getLocalStorage = localStorage.getItem(WorkSave);
        if (typeof getLocalStorage === "string") {
            insertData(saveData, getLocalStorage);
            getWork();
        }
        else {
            localStorage.setItem(WorkSave, "[]");
            insertData(saveData);
        }
    });
    function errorInput(...arg) {
        let validateInput = false;
        arg.forEach((item) => {
            if (item.value === "" || item.value === " ") {
                validateInput = true;
            }
            else {
                validateInput = false;
            }
        });
        return validateInput;
    }
}
