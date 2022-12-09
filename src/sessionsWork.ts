import { SessionsByDay, SessionWork } from "./interfaces/variables.js";
import { SessionDay } from "./interfaces/interface.js";
export default function sessionsWork(
  count: HTMLElement,
  incrementButton: HTMLElement,
  decrementButton: HTMLElement
) {
  let valueCount: number;
  document.addEventListener("click", (e) => {
    valueCount = loadValueCount();
    logicCount(e, valueCount);
  });

  function logicCount(e: MouseEvent, valueCountArg: number) {
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

  function loadValueCount(): number {
    const loadNumberCount = localStorage.getItem(SessionWork);

    if (typeof loadNumberCount === "string") {
      return JSON.parse(loadNumberCount);
    } else {
      localStorage.setItem(SessionWork, "0");
      return 0;
    }
  }

  function updateCountSessions(valueCountArg: number) {
    localStorage.setItem(SessionWork, JSON.stringify(valueCountArg));

    const loadCount: string = localStorage.getItem(SessionWork)!;
    count.textContent = loadCount;
  }

  function updateDataDay(valueNumber: number) {
    const dayCurrent: string = `${new Date().getDay()}`;
    const monthCurrent: string = `${new Date().getMonth()}`;
    const timeCurrent: string = `${dayCurrent} | ${monthCurrent}`;
    let myDataSessions: SessionDay = {
      dayPast: timeCurrent,
      sessionsPast: `${valueNumber}`,
    };
    const sessionsDayStorage = localStorage.getItem(SessionsByDay);
    if (typeof sessionsDayStorage === "string") {
      let stringToArray: SessionDay[] = JSON.parse(sessionsDayStorage);
      let getTemporalVar = stringToArray.find(
        (item) => item.dayPast === myDataSessions.dayPast
      );
      if (getTemporalVar !== undefined) {
        getTemporalVar.sessionsPast = `${valueNumber}`;
      } else {
        stringToArray.push(myDataSessions);
      }
      localStorage.setItem(SessionsByDay, JSON.stringify(stringToArray));
    } else {
      localStorage.setItem(SessionsByDay, "[]");
    }
  }
}
