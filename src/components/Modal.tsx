import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { optionsModal } from "../reducers/app.reducer";
import {
  ModalComponent,
  ModalComponentBox,
  McTitle,
  McInputDiv,
  McInputButton,
  McInputText,
  McBoxGrid,
  McBoxGridOne,
  BgoBox,
  BgoLabel,
  BgoInput,
  McBoxGridTwo,
  BgtButton,
  BgtInput,
  ViewStat,
  ViewStatImage,
  McTextGuide,
} from "../styles/modal-styles";
import stadicts from "../assets/state.svg";

const INITIAL_STATE = {
  time: "",
  name: "",
  hour: "7",
  minute: "0",
  second: "0",
  timeHour: "1",
  sessions: "0",
};
export default function Modal() {
  const elementHTML: Element = document.getElementById("modal")!;
  const [state, dispatch] = useReducer(optionsModal, INITIAL_STATE, 0);

  const handleAument = () => {};
  return ReactDOM.createPortal(
    <>
      <ModalComponent>
        <ModalComponentBox>
          <McTitle>Add name of work</McTitle>
          <McInputDiv>
            <McInputButton>+</McInputButton>
            <McInputText />
          </McInputDiv>
          <McBoxGrid>
            <McBoxGridOne>
              <BgoBox>
                <BgoLabel>Hour</BgoLabel>
                <BgoInput />
              </BgoBox>
              <BgoBox>
                <BgoLabel>Minute</BgoLabel>
                <BgoInput />
              </BgoBox>
              <BgoBox>
                <BgoLabel>Second</BgoLabel>
                <BgoInput />
              </BgoBox>
            </McBoxGridOne>
            <McBoxGridTwo>
              <BgoBox>
                <BgoLabel>Time / hours</BgoLabel>
                <BgoInput />
              </BgoBox>
              <BgoBox>
                <BgoLabel>Add Sesions / today</BgoLabel>
                <BgoBox className="sessions">
                  <BgtButton>-</BgtButton>
                  <BgtInput value="0" className="custom" />
                  <BgtButton>+</BgtButton>
                </BgoBox>
              </BgoBox>
              <BgoBox className="end">
                <ViewStat>
                  {" "}
                  <ViewStatImage src={stadicts} /> View Stadicts
                </ViewStat>
              </BgoBox>
            </McBoxGridTwo>
          </McBoxGrid>
          <McTextGuide>
            The timer will start according to the time you chose.
          </McTextGuide>
        </ModalComponentBox>
      </ModalComponent>
    </>,
    elementHTML
  );
}
