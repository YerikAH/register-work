import { hourToSecond } from "./helpers/hourToSecond.js";
import { DataTime } from "./interfaces/interface.js";
import {
  StartTimer,
  StartTimerNumber,
  WorkSave,
} from "./interfaces/variables.js";

export default function startTime() {
  let timerOut: number;
  const $timeTemp = document.getElementById("timeTemp")!;
  setInterval(timeIsEqual, 1000);

  function timeIsEqual() {
    const timeFather = new Date();
    const getHourCurrent: number = timeFather.getHours();
    const getMinuteCurrent: number = timeFather.getMinutes();
    const getSecondCurrent: number = timeFather.getSeconds();

    const startTimeQuestion = localStorage.getItem(StartTimer);
    const startTimeNumber = localStorage.getItem(StartTimerNumber);
    const getTimeAlarm = localStorage.getItem(WorkSave);

    console.log(getHourCurrent, getMinuteCurrent, getSecondCurrent);
    if (typeof getTimeAlarm === "string") {
      const stringToArray: DataTime[] = JSON.parse(getTimeAlarm);
      stringToArray.forEach((item) => {
        const getTimeHour = hourToSecond(item.timeHours);
        const getHour = item.hour;
        const getMinute = item.minute;
        const getSecond = item.second;
        if (
          getHourCurrent === getHour &&
          getMinuteCurrent === getMinute &&
          getSecondCurrent === getSecond
        ) {
          console.log("Start Timer");
          const convertToString = getTimeHour.toString();
          localStorage.setItem(StartTimerNumber, "0");
          localStorage.setItem(StartTimer, "FALSE");
          setTimeout(() => {
            localStorage.setItem(StartTimerNumber, convertToString);
            localStorage.setItem(StartTimer, "TRUE");
          }, 2000);
        }
      });
    } else {
      localStorage.setItem(WorkSave, "[]");
    }

    if (startTimeQuestion === "TRUE") {
      timerOut = setTimeout(timerOutFunction, 500);

      function timerOutFunction() {
        let numberTemp: number;
        if (typeof startTimeNumber === "string") {
          numberTemp = parseInt(startTimeNumber);
        } else {
          numberTemp = 0;
        }

        if (numberTemp !== 0) {
          numberTemp--;
          $timeTemp.textContent = `${numberTemp}`;
          const convertNumberTemp = numberTemp.toString();
          localStorage.setItem(StartTimerNumber, convertNumberTemp);
        } else {
          localStorage.setItem(StartTimer, "FALSE");
          $timeTemp.textContent = `3600`;
          clearTimeout(timerOut);
        }
      }
    }
  }
}
