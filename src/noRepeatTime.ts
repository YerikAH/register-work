import { DataTime } from "./interfaces/interface.js";
import { WorkSave } from "./interfaces/variables.js";

export function noRepeatTime(hour: HTMLInputElement): boolean {
  let resultEnd: boolean = false;

  const getValueInput = parseInt(hour.value);
  const getData = localStorage.getItem(WorkSave);
  if (typeof getData === "string") {
    const stringToArray: DataTime[] = JSON.parse(getData);

    for (let i = 0; i < stringToArray.length; i++) {
      const element = stringToArray[i];
      if (element.hour === getValueInput) {
        resultEnd = true;
        break;
      }
    }
  } else {
    resultEnd = false;
  }

  return resultEnd;
}
