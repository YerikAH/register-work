import { SessionWork } from "./interfaces/variables.js";
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
    }

    if (e.target === decrementButton) {
      valueCountArg === 0 ? 0 : valueCountArg--;
      updateCountSessions(valueCountArg);
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
}
