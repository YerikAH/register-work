export interface PropsRe {
  setSwitchModal: (modal: boolean) => void;
  switchModal: boolean;
}
export interface StateInitial {
  time: string;
  name: string;
  hour: string;
  minute: string;
  second: string;
  timeHour: string;
  sessions: string;
}
type OptionsAction = "aa" | "Inv" | "gf" | "INCREMENT_SESSION";
export interface ReducerAction {
  select: OptionsAction;
}
