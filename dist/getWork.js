import { WorkId, WorkSave } from "./interfaces/variables.js";
import { pushZero } from "./helpers/pushZero.js";
export default function getWork() {
    const $fatherWork = document.getElementById("fatherWork");
    const loadInfo = localStorage.getItem(WorkSave);
    const $fragment = document.createDocumentFragment();
    if (typeof loadInfo === "string") {
        $fatherWork.textContent = "";
        const loadDataTime = JSON.parse(loadInfo);
        if (loadDataTime.length > 0) {
            loadDataTime.forEach((item) => {
                const hourWorkString = item.nameWork;
                const hourString = item.hour;
                const minuteString = pushZero(item.minute);
                const secondString = pushZero(item.second);
                const idString = item.idWork;
                const dateDivElement = document.createElement("div");
                const dateGridDivElement = document.createElement("div");
                const nameWorkParElement = document.createElement("h4");
                const timeDivElement = document.createElement("div");
                const hourParElement = document.createElement("p");
                const minuteParElement = document.createElement("p");
                const secondParElement = document.createElement("p");
                const deleteElement = document.createElement("button");
                const imageDeleteElement = document.createElement("img");
                dateDivElement.className = "work-task";
                dateGridDivElement.className = "work-task-grid";
                deleteElement.className = "work-task-delete";
                deleteElement.setAttribute("aria-label", "delete work");
                deleteElement.setAttribute(WorkId, idString);
                imageDeleteElement.setAttribute("src", "../assets/trash.svg");
                imageDeleteElement.setAttribute(WorkId, idString);
                imageDeleteElement.setAttribute("alt", "trash");
                nameWorkParElement.textContent = hourWorkString;
                hourParElement.textContent = ` ${hourString}: `;
                minuteParElement.textContent = `${minuteString}: `;
                secondParElement.textContent = `${secondString}`;
                dateGridDivElement.appendChild(nameWorkParElement);
                timeDivElement.appendChild(hourParElement);
                timeDivElement.appendChild(minuteParElement);
                timeDivElement.appendChild(secondParElement);
                dateGridDivElement.appendChild(timeDivElement);
                dateDivElement.appendChild(dateGridDivElement);
                deleteElement.appendChild(imageDeleteElement);
                dateDivElement.appendChild(deleteElement);
                $fragment.appendChild(dateDivElement);
            });
            $fatherWork.appendChild($fragment);
        }
        else {
            const voidElement = document.createElement("div");
            const voidElementImage = document.createElement("img");
            const voidElementTitle = document.createElement("h4");
            const voidElementMessage = document.createElement("p");
            voidElement.className = "no-work-task";
            voidElementImage.setAttribute("src", "../assets/void.svg");
            voidElementTitle.textContent = "You didn't add any jobs";
            voidElementMessage.textContent =
                "It looks like you didn't add any jobs, do you know you can add jobs? You just have to click on the icon of a sum.";
            voidElement.appendChild(voidElementImage);
            voidElement.appendChild(voidElementTitle);
            voidElement.appendChild(voidElementMessage);
            $fragment.appendChild(voidElement);
            $fatherWork.appendChild($fragment);
        }
    }
    else {
        localStorage.setItem(WorkSave, "[]");
    }
}
