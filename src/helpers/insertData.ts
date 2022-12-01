import { DataTime } from "../interfaces/interface.js";
import { WorkSave } from "../interfaces/variables.js";
export function insertData(data: DataTime, getLocalStorage?: string) {
  let dataStorage: DataTime[] =
    getLocalStorage !== undefined ? JSON.parse(getLocalStorage) : [];
  dataStorage.push(data);
  const saveDataStorage: string = JSON.stringify(dataStorage);
  localStorage.setItem(WorkSave, saveDataStorage);
}
