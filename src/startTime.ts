import { DataTime } from "./interfaces/interface.js";
import { WorkSave } from "./interfaces/variables.js";

export default function startTime(timeUi: HTMLElement) {
  console.log("aa");
  setInterval(timeIsEqual, 1000);

  function timeIsEqual() {
    const timeFather = new Date();
    const getHourCurrent: number = timeFather.getHours();
    const getMinuteCurrent: number = timeFather.getMinutes();
    const getSecondCurrent: number = timeFather.getSeconds();
    const getTimeAlarm = localStorage.getItem(WorkSave);
    if (typeof getTimeAlarm === "string") {
      const stringToArray: DataTime[] = JSON.parse(getTimeAlarm);
      stringToArray.forEach((item) => {
        const getHour = item.hour;
        const getMinute = item.minute;
        const getSecond = item.second;
        if (
          getHourCurrent === getHour &&
          getMinuteCurrent === getMinute &&
          getSecondCurrent === getSecond
        ) {
          console.log("Start Timer");
        }
      });
    } else {
      localStorage.setItem(WorkSave, "[]");
    }
  }
}
