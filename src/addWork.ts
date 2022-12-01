import { DataTime } from "./interfaces/interface.js";
import { WorkSave } from "./interfaces/variables.js";
import { validateInput } from "./helpers/validateInput.js";
import { insertData } from "./helpers/insertData.js";
export default function addWork(
  newWork: HTMLElement,
  nameWork: HTMLInputElement,
  timeHours: HTMLInputElement,
  hour: HTMLInputElement,
  minute: HTMLInputElement,
  second: HTMLInputElement
) {
  newWork.addEventListener("click", (e: MouseEvent) => {
    e.preventDefault();
    const nameWorkReal = nameWork.value;
    const hourReal = validateInput(hour, 25);
    const minuteReal = validateInput(minute, 60);
    const secondReal = validateInput(second, 60);
    const timeHoursReal = validateInput(timeHours, 3600);

    const saveData: DataTime = {
      nameWork: nameWorkReal,
      timeHours: timeHoursReal,
      hour: hourReal,
      minute: minuteReal,
      second: secondReal,
    };
    let getLocalStorage = localStorage.getItem(WorkSave);
    if (typeof getLocalStorage === "string") {
      insertData(saveData, getLocalStorage);
    } else {
      localStorage.setItem(WorkSave, "[]");
      insertData(saveData);
    }
  });
}
