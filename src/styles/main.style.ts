import styled from "styled-components";

export const MainApp = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: auto;
  display: grid;
  place-items: center;
  background-color: var(--bg-color);
`;
export const MainAppCenter = styled.section`
  width: 100%;
  display: flex;
  padding: 1rem 2rem;
  height: 100%;
  justify-content: center;
  align-items: center;
`;
export const SecondTemp = styled.h1`
  font-size: 4rem;
  color: var(--color-second);
  font-weight: 600;
  text-shadow: 0px 17px 16px rgba(0, 0, 0, 0.25);
`;
export const ButtonSettings = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background: transparent;
  border: none;
  margin: 1rem;
`;
export const ButtonSettingsImage = styled.img``;
export const LogoWork = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
  align-items: center;
  gap: 0.5rem;
`;
export const LogoWorkImage = styled.img``;
export const LogoWorkText = styled.p`
  color: var(--white);
  font-size: 0.8rem;
`;
