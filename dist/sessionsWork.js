import { SessionsByDay, SessionWork } from "./interfaces/variables.js";
export default function sessionsWork(count, incrementButton, decrementButton) {
    let valueCount;
    document.addEventListener("click", (e) => {
        valueCount = loadValueCount();
        logicCount(e, valueCount);
    });
    function logicCount(e, valueCountArg) {
        if (e.target === incrementButton) {
            valueCountArg++;
            updateCountSessions(valueCountArg);
            updateDataDay(valueCountArg);
        }
        if (e.target === decrementButton) {
            valueCountArg === 0 ? 0 : valueCountArg--;
            updateCountSessions(valueCountArg);
            updateDataDay(valueCountArg);
        }
    }
    function loadValueCount() {
        const loadNumberCount = localStorage.getItem(SessionWork);
        if (typeof loadNumberCount === "string") {
            return JSON.parse(loadNumberCount);
        }
        else {
            localStorage.setItem(SessionWork, "0");
            return 0;
        }
    }
    function updateCountSessions(valueCountArg) {
        localStorage.setItem(SessionWork, JSON.stringify(valueCountArg));
        const loadCount = localStorage.getItem(SessionWork);
        count.textContent = loadCount;
    }
    function updateDataDay(valueNumber) {
        const dayCurrent = `${new Date().getDate()}`;
        const monthCurrent = `${new Date().getMonth()}`;
        const timeCurrent = `${dayCurrent} | ${monthCurrent}`;
        let myDataSessions = {
            dayPast: timeCurrent,
            sessionsPast: `${valueNumber}`,
        };
        const sessionsDayStorage = localStorage.getItem(SessionsByDay);
        if (typeof sessionsDayStorage === "string") {
            let stringToArray = JSON.parse(sessionsDayStorage);
            let getTemporalVar = stringToArray.find((item) => item.dayPast === myDataSessions.dayPast);
            if (getTemporalVar !== undefined) {
                getTemporalVar.sessionsPast = `${valueNumber}`;
            }
            else {
                stringToArray.push(myDataSessions);
            }
            localStorage.setItem(SessionsByDay, JSON.stringify(stringToArray));
        }
        else {
            localStorage.setItem(SessionsByDay, "[]");
        }
    }
}
