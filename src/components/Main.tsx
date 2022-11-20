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
} from "../styles/main.style";
import clockSvg from "../assets/clock.svg";
import hamSvg from "../assets/ham.svg";

export default function Main() {
  return (
    <MainApp>
      <MainAppCenter>
        <ButtonSettings>
          <ButtonSettingsImage src={hamSvg} />
        </ButtonSettings>
        <SecondTemp>3600</SecondTemp>
        <LogoWork>
          <LogoWorkImage src={clockSvg} />
          <LogoWorkText>register-work</LogoWorkText>
        </LogoWork>
      </MainAppCenter>
    </MainApp>
  );
}
