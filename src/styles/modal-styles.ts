import styled from "styled-components";

export const ModalComponent = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  display: grid;
  place-items: center;
  padding: 2rem;
`;
export const ModalComponentBox = styled.div`
  background-color: var(--bg-modal);
  padding: 2rem;
  border-radius: 1rem;
  max-width: 36.25rem;
  width: 100%;
`;
export const McTitle = styled.h2`
  color: var(--white);
  font-size: 1.125rem;
  margin-bottom: 1rem;
`;
export const McInputDiv = styled.div`
  width: 100%;
  background-color: var(--bg-color);
  position: relative;
  padding: 0.5rem;
  border-radius: 100rem;
  border: 1px solid var(--color-second);
`;
export const McInputButton = styled.button`
  position: absolute;
  font-size: 1.125rem;
  color: var(--color-second);
  font-weight: 900;
  background: transparent;
  top: 0;
  bottom: 0;
  margin: auto 0.5rem;
`;
export const McInputText = styled.input`
  background: transparent;
  width: 100%;
  height: 100%;
  color: var(--white);
  padding: 0 1.5rem;
  font-weight: 900;
`;
export const McBoxGrid = styled.div`
  display: grid;
  margin-top: 2rem;
  @media (min-width: 600px) {
    grid-template-columns: 28% 68%;
    gap: 2%;
  }
`;
export const McBoxGridOne = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  gap: 5%;
  justify-content: space-between;
  @media (min-width: 600px) {
    grid-template-columns: 100%;
    grid-template-rows: auto auto auto;
  }
`;
export const BgoBox = styled.div`
  display: flex;
  flex-direction: ${(props) =>
    props.className === "sessions" ? "row" : "column"};

  margin-bottom: 1rem;

  gap: 0.5rem;
  justify-content: center;
  @media (min-width: 600px) {
    margin-bottom: ${(props) => (props.className === "end" ? "0" : "1rem")};
    position: relative;
    top: ${(props) => (props.className === "end" ? "0.6rem" : "0")};
  }
`;
export const BgoLabel = styled.label`
  font-size: 0.8rem;
  color: var(--color-second);
  font-weight: 900;
  margin-bottom: 0.5rem;
`;
export const BgoInput = styled.input`
  width: 100%;
  background-color: var(--bg-color);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--white);
  font-weight: 900;
  font-size: 0.8rem;
`;
export const McBoxGridTwo = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
export const BgtButton = styled.button`
  width: 100%;
  background-color: var(--bg-color);
  padding: 0.5rem;
  border: 1px solid var(--color-second);
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  width: 3rem;
  font-weight: 900;
`;
export const BgtInput = styled.input`
  width: 5rem;
  background-color: var(--bg-color);
  padding: 0.5rem;
  border-radius: 0.5rem;
  color: var(--white);
  font-size: 1rem;
  font-weight: 900;
  text-align: center;
`;
export const ViewStat = styled.a`
  padding: 0.5rem;
  background-color: var(--blue);
  color: var(--white);
  font-weight: 600;
  border-radius: 0.3rem;
  text-align: center;
  font-size: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const ViewStatImage = styled.img`
  width: 1rem;
`;
export const McTextGuide = styled.p`
  color: var(--white);
  text-align: center;
  font-weight: 600;
  margin-top: 1rem;
  font-size: 0.8rem;
  @media (min-width: 600px) {
    margin-top: 3rem;
  }
`;
