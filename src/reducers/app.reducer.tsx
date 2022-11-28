import { TimeTemp } from "../interface/variable";
type ActionType =
  | { select: "INCREMENTAR" }
  | { select: "DECREMENTAR" }
  | { select: "TIME" };

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
        let stringToNumber = parseInt(localStorage.getItem(TimeTemp));
      } else {
        timeCurrent = state.time - 1;
      }
      return {
        ...state,
        countSessions: state.countSessions,
        time: state.time - 1,
      };
    default:
      return state;
  }
}
