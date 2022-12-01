import { DataTime } from "./interfaces/interface.js";
import { validateInput } from "./helpers/validateInput.js";
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

    const saveData: DataTime = {
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
