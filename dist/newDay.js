import { NewDayStorage, StartTimer, StartTimerNumber, SessionWork, } from "./interfaces/variables.js";
export default function newDay() {
    document.addEventListener("DOMContentLoaded", (e) => {
        const newDayStorage = localStorage.getItem(NewDayStorage);
        const dayCurrent = `${new Date().getDate()}`;
        const monthCurrent = `${new Date().getMonth()}`;
        const timeCurrent = `${dayCurrent} | ${monthCurrent}`;
        if (typeof newDayStorage === "string") {
            if (timeCurrent !== newDayStorage) {
                localStorage.removeItem(StartTimer);
                localStorage.removeItem(StartTimerNumber);
                localStorage.setItem(NewDayStorage, timeCurrent);
                localStorage.setItem(SessionWork, "0");
            }
            else {
                localStorage.setItem(NewDayStorage, timeCurrent);
            }
        }
        else {
            localStorage.setItem(NewDayStorage, timeCurrent);
        }
    });
}
