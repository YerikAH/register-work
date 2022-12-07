import { WorkSave } from "./interfaces/variables.js";
export default function startTime(timeUi) {
    console.log("aa");
    setInterval(timeIsEqual, 1000);
    function timeIsEqual() {
        const timeFather = new Date();
        const getHourCurrent = timeFather.getHours();
        const getMinuteCurrent = timeFather.getMinutes();
        const getSecondCurrent = timeFather.getSeconds();
        const getTimeAlarm = localStorage.getItem(WorkSave);
        if (typeof getTimeAlarm === "string") {
            const stringToArray = JSON.parse(getTimeAlarm);
            stringToArray.forEach((item) => {
                const getHour = item.hour;
                const getMinute = item.minute;
                const getSecond = item.second;
                if (getHourCurrent === getHour &&
                    getMinuteCurrent === getMinute &&
                    getSecondCurrent === getSecond) {
                    console.log("Start Timer");
                }
            });
        }
        else {
            localStorage.setItem(WorkSave, "[]");
        }
    }
}
