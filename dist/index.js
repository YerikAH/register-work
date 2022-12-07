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
import closeModal from "./closeModal.js";
import validateHtmlInput from "./validateHtmlInput.js";
import startTime from "./startTime.js";
const d = document;
// switchModal.ts
const $buttonModal = d.getElementById("buttonModal");
// switchModal.ts && viewSwitchWork.ts && closeModal.ts
const $modal = d.getElementById("modal");
const $viewWork = d.getElementById("viewWork");
const $addWork = d.getElementById("addWork");
// addWork.ts && validateHtmlInput.ts
const $newWorkTask = d.getElementById("newWorkTask");
const $nameWork = d.getElementById("nameWork");
const $hourInput = d.getElementById("hourInput");
const $minuteInput = d.getElementById("minuteInput");
const $secondInput = d.getElementById("secondInput");
const $timeHoursInput = d.getElementById("timeHoursInput");
const dataAddWorkArg = {
    newWork: $newWorkTask,
    nameWork: $nameWork,
    timeHours: $timeHoursInput,
    hour: $hourInput,
    minute: $minuteInput,
    second: $secondInput,
};
// validateHtmlInput.ts
const $messageAddWork = d.getElementById("messageAddWork");
// sessionsWork.ts
const $buttonIncrement = d.getElementById("buttonIncrementSessions");
const $buttonDecrement = d.getElementById("buttonDecrementSessions");
const $countSessions = d.getElementById("countSessions");
// viewSwitchWork.ts
const $buttonView = d.getElementById("buttonView");
// deleteWork.ts
// closeModal.ts
// startTime.ts
switchModal($modal, $buttonModal, $addWork, $viewWork);
validateHtmlInput(dataAddWorkArg, $messageAddWork);
addWork(dataAddWorkArg);
sessionsWork($countSessions, $buttonIncrement, $buttonDecrement);
viewSwitchWork($modal, $addWork, $viewWork, $buttonView);
deleteWork();
closeModal($modal);
startTime();
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
