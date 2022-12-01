import switchModal from "./switchModal.js";

const d = document;
// switchModal.ts
const $modal = d.getElementById("modal")!;
const $buttonModal = d.getElementById("buttonModal")!;
// addWork.ts
const $newWorkTask = d.getElementById("newWorkTask");
const $nameWork = d.getElementById("nameWork");
const $hourInput = d.getElementById("hourInput");
const $minuteInput = d.getElementById("minuteInput");
const $secondInput = d.getElementById("secondInput");
const $timeHoursInput = d.getElementById("timeHoursInput");
switchModal($modal, $buttonModal);
