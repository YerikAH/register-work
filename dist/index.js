/* variables */
import { WorkSave } from "./interfaces/variables.js";
import { SessionWork } from "./interfaces/variables.js";
import { ModalDoor } from "./interfaces/variables.js";
/* Modules */
import addWork from "./addWork.js";
import switchModal from "./switchModal.js";
import sessionsWork from "./sessionsWork.js";
import viewSwitchWork from "./viewSwitchWork.js";
import getWork from "./getWork.js";
import deleteWork from "./deleteWork.js";
const d = document;
// switchModal.ts
const $buttonModal = d.getElementById("buttonModal");
// switchModal.ts && viewSwitchWork.ts
const $modal = d.getElementById("modal");
const $viewWork = d.getElementById("viewWork");
const $addWork = d.getElementById("addWork");
// addWork.ts
const $newWorkTask = d.getElementById("newWorkTask");
const $nameWork = d.getElementById("nameWork");
const $hourInput = d.getElementById("hourInput");
const $minuteInput = d.getElementById("minuteInput");
const $secondInput = d.getElementById("secondInput");
const $timeHoursInput = d.getElementById("timeHoursInput");
// sessionsWork.ts
const $buttonIncrement = d.getElementById("buttonIncrementSessions");
const $buttonDecrement = d.getElementById("buttonDecrementSessions");
const $countSessions = d.getElementById("countSessions");
// viewSwitchWork.ts
const $buttonView = d.getElementById("buttonView");
// deleteWork.ts
switchModal($modal, $buttonModal, $addWork, $viewWork);
addWork($newWorkTask, $nameWork, $timeHoursInput, $hourInput, $minuteInput, $secondInput);
sessionsWork($countSessions, $buttonIncrement, $buttonDecrement);
viewSwitchWork($modal, $addWork, $viewWork, $buttonView);
deleteWork();
/* Load info */
document.addEventListener("DOMContentLoaded", (e) => {
    const loadInfo = localStorage.getItem(WorkSave);
    const loadSessions = localStorage.getItem(SessionWork);
    const loadDoor = localStorage.getItem(ModalDoor);
    if (typeof loadInfo === "string") {
        getWork();
    }
    else {
        localStorage.setItem(WorkSave, "[]");
    }
    if (typeof loadSessions === "string") {
        $countSessions.textContent = loadSessions;
    }
    else {
        localStorage.setItem(SessionWork, "0");
    }
    if (typeof loadDoor === "string") {
        localStorage.removeItem(ModalDoor);
    }
});
