import { TimeTemp, AllTime } from "../interface/variable";
import { PayloadData } from "../interface/interface";

type ActionType =
  | { select: "INCREMENTAR" }
  | { select: "DECREMENTAR" }
  | { select: "TIME" }
  | { select: "NEW_DATA"; payload: PayloadData };

export const initialState = {
  countSessions: 0,
  time: 3600,
  hour: 0,
  minute: 0,
  second: 0,
  nameWork: "",
};
export function ChoiceOptions(state: typeof initialState, action: ActionType) {
  switch (action.select) {
    case "INCREMENTAR":
      return {
        ...state,
        countSessions: state.countSessions + 1,
      };
    case "DECREMENTAR":
      let numberCountSessions = state.countSessions;
      if (state.countSessions <= 0) {
        numberCountSessions = state.countSessions;
      } else {
        numberCountSessions = state.countSessions - 1;
      }
      return {
        ...state,
        countSessions: numberCountSessions,
      };
    case "TIME":
      let timeCurrent: number = state.time - 1;
      const getLocalStorage: string | null = localStorage.getItem(TimeTemp);
      localStorage.setItem(TimeTemp, `${timeCurrent}`);
      if (typeof getLocalStorage === "string") {
        let stringToNumber = parseInt(getLocalStorage);
        timeCurrent = stringToNumber - 1;
      } else {
        timeCurrent = state.time - 1;
      }

      return {
        ...state,
        countSessions: state.countSessions,
        time: state.time - 1,
      };
    case "NEW_DATA":
      const { hourData, minuteData, secondData, timeData, titleData } =
        action.payload;
      const SaveTime = JSON.stringify({
        time: timeData,
        hour: hourData,
        minute: minuteData,
        second: secondData,
        nameWork: titleData,
      });
      localStorage.setItem(AllTime, SaveTime);
      return {
        ...state,
        time: timeData,
        hour: hourData,
        minute: minuteData,
        second: secondData,
        nameWork: titleData,
      };

    default:
      return state;
  }
}
