import { WorkSave } from "../interfaces/variables.js";
export function insertData(data, getLocalStorage) {
    let dataStorage = getLocalStorage !== undefined ? JSON.parse(getLocalStorage) : [];
    dataStorage.push(data);
    const saveDataStorage = JSON.stringify(dataStorage);
    localStorage.setItem(WorkSave, saveDataStorage);
}
