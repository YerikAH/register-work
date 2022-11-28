import React, { useReducer, useState } from "react";
import ReactDOM from "react-dom";
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

import { ChoiceOptions, initialState } from "../reducers/app.reducer";

export default function Modal() {
  const elementHTML: Element = document.getElementById("modal")!;
  const [state, dispatch] = useReducer(ChoiceOptions, initialState);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [time, setTime] = useState(3600);
  const [title, setTitle] = useState("");
  const [hourInput, setHourInput] = useState("");
  const [minuteInput, setMinuteInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [timeInput, setTimeInput] = useState("");

  const handleTitleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    const userWrite = evt.currentTarget.value;
    setTitle(userWrite);
  };

  const handleInputTime = (
    evt: React.FormEvent<HTMLInputElement>,
    setNumber: React.Dispatch<React.SetStateAction<number>>,
    limit: number
  ) => {
    const inputWriteUser = evt.currentTarget.value;
    validateNumber(inputWriteUser, setNumber, limit);
  };
  const handleClick = () => {
    const payloadData = {
      hourData: hour,
      minuteData: minute,
      secondData: second,
      timeData: time,
      titleData: title,
    };
    if (
      hourInput == "" ||
      minuteInput == "" ||
      secondInput == "" ||
      timeInput == ""
    ) {
      console.log("Faltan datos");
    } else {
    }
  };
  function validateNumber(
    input: string,
    setNumber: React.Dispatch<React.SetStateAction<number>>,
    limitNumber: number
  ) {
    const noSpace = input.trim();
    let regexOnlyNumber: RegExp = /^[0-9]+$/;
    if (!regexOnlyNumber.test(noSpace.trim())) {
      console.log("Datos incorrectos");
    } else {
      const stringToNumber = parseInt(noSpace);

      if (stringToNumber >= limitNumber) {
        setNumber(limitNumber);
      } else if (stringToNumber <= 0) {
        setNumber(0);
      } else {
        setNumber(stringToNumber);
      }
    }
  }
  return ReactDOM.createPortal(
    <>
      <ModalComponent>
        <ModalComponentBox>
          <McTitle>Add name of work</McTitle>
          <McInputDiv>
            <McInputButton onClick={handleClick}>+</McInputButton>
            <McInputText
              value={title}
              onChange={(evt) => handleTitleChange(evt)}
            />
          </McInputDiv>
          <McBoxGrid>
            <McBoxGridOne>
              <BgoBox>
                <BgoLabel>Hour</BgoLabel>
                <BgoInput
                  onInput={(evt) => handleInputTime(evt, setHour, 24)}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setHourInput(evt.currentTarget.value)
                  }
                />
              </BgoBox>
              <BgoBox>
                <BgoLabel>Minute</BgoLabel>
                <BgoInput
                  onInput={(evt) => handleInputTime(evt, setMinute, 60)}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setMinuteInput(evt.currentTarget.value)
                  }
                />
              </BgoBox>
              <BgoBox>
                <BgoLabel>Second</BgoLabel>
                <BgoInput
                  onInput={(evt) => handleInputTime(evt, setSecond, 60)}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setSecondInput(evt.currentTarget.value)
                  }
                />
              </BgoBox>
            </McBoxGridOne>
            <McBoxGridTwo>
              <BgoBox>
                <BgoLabel>Time / hours</BgoLabel>
                <BgoInput
                  onInput={(evt) => handleInputTime(evt, setTime, 28800)}
                  onChange={(evt: React.ChangeEvent<HTMLInputElement>) =>
                    setTimeInput(evt.currentTarget.value)
                  }
                />
              </BgoBox>
              <BgoBox>
                <BgoLabel>Add Sesions / today</BgoLabel>
                <BgoBox className="sessions">
                  <BgtButton
                    onClick={() => dispatch({ select: "DECREMENTAR" })}
                  >
                    -
                  </BgtButton>
                  <BgtInput className="custom">{state.countSessions} </BgtInput>
                  <BgtButton
                    onClick={() => dispatch({ select: "INCREMENTAR" })}
                  >
                    +
                  </BgtButton>
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
