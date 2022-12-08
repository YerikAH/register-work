import { hourToSecond } from "./helpers/hourToSecond.js";
import { WorkSave } from "./interfaces/variables.js";
import timer from "./timer.js";
export default function startTime() {
    const $timeTemp = document.getElementById("timeTemp");
    setInterval(timeIsEqual, 1000);
    let activateTimer = false;
    let activateTimerHour;
    let timerOut;
    function timeIsEqual() {
        const timeFather = new Date();
        const getHourCurrent = timeFather.getHours();
        const getMinuteCurrent = timeFather.getMinutes();
        const getSecondCurrent = timeFather.getSeconds();
        const getTimeAlarm = localStorage.getItem(WorkSave);
        console.log(getHourCurrent, getMinuteCurrent, getSecondCurrent);
        if (typeof getTimeAlarm === "string") {
            const stringToArray = JSON.parse(getTimeAlarm);
            stringToArray.forEach((item) => {
                const getTimeHour = hourToSecond(item.timeHours);
                const getHour = item.hour;
                const getMinute = item.minute;
                const getSecond = item.second;
                if (getHourCurrent === getHour &&
                    getMinuteCurrent === getMinute &&
                    getSecondCurrent === getSecond) {
                    console.log("Start Timer");
                    clearTimeout(timerOut);
                    activateTimerHour = getTimeHour;
                    activateTimer = true;
                    timer();
                }
            });
        }
        else {
            localStorage.setItem(WorkSave, "[]");
        }
        if (activateTimer) {
            timerOut = setTimeout(timerOutFunction, 1000);
            function timerOutFunction() {
                if (activateTimerHour !== 0) {
                    activateTimerHour--;
                    $timeTemp.textContent = `${activateTimerHour}`;
                }
                else {
                    activateTimer = false;
                    $timeTemp.textContent = `3600`;
                    clearTimeout(timerOut);
                }
            }
        }
    }
}
