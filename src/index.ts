/* variables */
import { WorkSave } from "./interfaces/variables.js";
import { SessionWork } from "./interfaces/variables.js";
/* Modules */
import addWork from "./addWork.js";
import switchModal from "./switchModal.js";
import sessionsWork from "./sessionsWork.js";

const d = document;
// switchModal.ts
const $modal = d.getElementById("modal")!;
const $buttonModal = d.getElementById("buttonModal")!;
// addWork.ts
const $newWorkTask = d.getElementById("newWorkTask")!;
const $nameWork = d.getElementById("nameWork") as HTMLInputElement;
const $hourInput = d.getElementById("hourInput") as HTMLInputElement;
const $minuteInput = d.getElementById("minuteInput") as HTMLInputElement;
const $secondInput = d.getElementById("secondInput") as HTMLInputElement;
const $timeHoursInput = d.getElementById("timeHoursInput") as HTMLInputElement;
// sessionsWork.ts
const $buttonIncrement = d.getElementById("buttonIncrementSessions")!;
const $buttonDecrement = d.getElementById("buttonDecrementSessions")!;
const $countSessions = d.getElementById("countSessions")!;

switchModal($modal, $buttonModal);
addWork(
  $newWorkTask,
  $nameWork,
  $timeHoursInput,
  $hourInput,
  $minuteInput,
  $secondInput
);
sessionsWork($countSessions, $buttonIncrement, $buttonDecrement);

/* Load info */
document.addEventListener("DOMContentLoaded", (e) => {
  const loadInfo = localStorage.getItem(WorkSave);
  const loadSessions = localStorage.getItem(SessionWork);
  if (typeof loadInfo === "string") {
    /* Logic */
  } else {
    localStorage.setItem(WorkSave, "[]");
  }
  if (typeof loadSessions === "string") {
    $countSessions.textContent = loadSessions;
  } else {
    localStorage.setItem(SessionWork, "0");
  }
});
