import { DataTime } from "./interfaces/interface.js";
import { WorkSave } from "./interfaces/variables.js";
import { validateInput } from "./helpers/validateInput.js";
import { insertData } from "./helpers/insertData.js";
import getWork from "./getWork.js";
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
    const timeHoursReal = validateInput(timeHours, 18000);
    const idWork: string = `${Date.now()}`;
    const saveData: DataTime = {
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
    } else {
      localStorage.setItem(WorkSave, "[]");
      insertData(saveData);
    }
  });
}
