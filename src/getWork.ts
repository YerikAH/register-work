import { WorkSave } from "./interfaces/variables.js";
import { DataTime } from "./interfaces/interface.js";
export default function getWork(viewLoadWord: HTMLElement) {
  const loadInfo = localStorage.getItem(WorkSave);
  const $fragment = document.createDocumentFragment();
  if (typeof loadInfo === "string") {
    viewLoadWord.textContent = "";
    const loadDataTime: DataTime[] = JSON.parse(loadInfo);
    loadDataTime.forEach((item) => {
      const dateDivElement = document.createElement("div");
      const nameWorkParElement = document.createElement("h4");
      const hourParElement = document.createElement("p");
      const minuteParElement = document.createElement("p");
      const secondParElement = document.createElement("p");

      nameWorkParElement.textContent = item.nameWork;
      hourParElement.textContent = ` ${item.hour}`;
      minuteParElement.textContent = `${item.minute}`;
      secondParElement.textContent = `${item.second}`;

      dateDivElement.appendChild(nameWorkParElement);
      dateDivElement.appendChild(hourParElement);
      dateDivElement.appendChild(minuteParElement);
      dateDivElement.appendChild(secondParElement);

      $fragment.appendChild(dateDivElement);
    });
    viewLoadWord.appendChild($fragment);
  } else {
    localStorage.setItem(WorkSave, "[]");
  }
}
