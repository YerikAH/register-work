import { SessionWork } from "./interfaces/variables.js";
export default function sessionsWork(count, incrementButton, decrementButton) {
    let valueCount;
    document.addEventListener("click", (e) => {
        valueCount = loadValueCount();
        logicCount(e, valueCount);
        console.log("yep");
    });
    function logicCount(e, valueCountArg) {
        if (e.target === incrementButton) {
            valueCountArg++;
            updateCountSessions(valueCountArg);
            console.log("incremewnt");
        }
        if (e.target === decrementButton) {
            valueCountArg === 0 ? 0 : valueCountArg--;
            updateCountSessions(valueCountArg);
            console.log("decrement");
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
}
