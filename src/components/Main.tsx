import React, { useEffect, useReducer } from "react";
import {
  MainApp,
  MainAppCenter,
  SecondTemp,
  LogoWork,
  LogoWorkImage,
  LogoWorkText,
  ButtonSettings,
  ButtonSettingsImage,
} from "../styles/main-styles";
import clockSvg from "../assets/clock.svg";
import hamSvg from "../assets/ham.svg";
import { PropsRe } from "../interface/interface";

import { ChoiceOptions, initialState } from "../reducers/app.reducer";

export default function Main({ setSwitchModal, switchModal }: PropsRe) {
  const [state, dispatch] = useReducer(ChoiceOptions, initialState);
  const handleClick = () => {
    if (switchModal) {
      setSwitchModal(false);
    } else {
      setSwitchModal(true);
    }
  };
  useEffect(() => {
    setInterval(() => {
      dispatch({ select: "TIME" });
      console.log(new Date());
    }, 2000);
    setInterval(() => {
      console.log(new Date());
    }, 1000);
  }, []);

  return (
    <>
      <MainApp>
        <MainAppCenter>
          <ButtonSettings onClick={handleClick}>
            <ButtonSettingsImage src={hamSvg} />
          </ButtonSettings>
          <SecondTemp>{state.time}</SecondTemp>
          <LogoWork>
            <LogoWorkImage src={clockSvg} />
            <LogoWorkText>register-work</LogoWorkText>
          </LogoWork>
        </MainAppCenter>
      </MainApp>
    </>
  );
}
