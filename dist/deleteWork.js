import { WorkId, WorkSave } from "./interfaces/variables.js";
import getWork from "./getWork.js";
export default function deleteWork() {
    document.addEventListener("click", (e) => {
        const targetElement = e.target;
        if (targetElement instanceof HTMLElement) {
            console.log("Aaa");
            const getIdClick = targetElement.getAttribute(WorkId);
            const loadInfo = localStorage.getItem(WorkSave);
            const stringToArray = JSON.parse(loadInfo);
            const filterId = stringToArray.filter((item) => item.idWork !== getIdClick);
            const convertFilterId = JSON.stringify(filterId);
            localStorage.setItem(WorkSave, convertFilterId);
            getWork();
        }
    });
}
