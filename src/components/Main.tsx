import React from "react";
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

export default function Main({ setSwitchModal, switchModal }: PropsRe) {
  const handleClick = () => {
    if (switchModal) {
      setSwitchModal(false);
    } else {
      setSwitchModal(true);
    }
  };
  return (
    <>
      <MainApp>
        <MainAppCenter>
          <ButtonSettings onClick={handleClick}>
            <ButtonSettingsImage src={hamSvg} />
          </ButtonSettings>
          <SecondTemp>3600</SecondTemp>
          <LogoWork>
            <LogoWorkImage src={clockSvg} />
            <LogoWorkText>register-work</LogoWorkText>
          </LogoWork>
        </MainAppCenter>
      </MainApp>
    </>
  );
}
