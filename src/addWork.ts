import { argAddWork, DataTime } from "./interfaces/interface.js";
import { ErrorInput, WorkSave } from "./interfaces/variables.js";
import { validateInput } from "./helpers/validateInput.js";
import { insertData } from "./helpers/insertData.js";
import getWork from "./getWork.js";

export default function addWork(data: argAddWork) {
  let thereAerror = false;
  let { newWork, nameWork, timeHours, hour, minute, second } = data;
  newWork.addEventListener("click", (e) => {
    e.preventDefault();

    const nameWorkReal = nameWork.value;
    const hourReal = validateInput(hour, 24);
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

    const getErrorInput = localStorage.getItem(ErrorInput);
    if (typeof getErrorInput === "string") {
      if (getErrorInput === "FALSE") {
        thereAerror = true;
      }
    }

    if (thereAerror) {
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
    }
  });
}
