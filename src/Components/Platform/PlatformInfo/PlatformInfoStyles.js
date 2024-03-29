import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Source Code Pro";

////////// ABOUT ME //////////

export const AboutTextContainer = styled.div``;

export const AboutTitle = styled.div`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 1.45vw;

  margin: 0;
  margin-left: -5vw;
  margin-right: 5vw;
  margin-bottom: 1vh;
  z-index: 1;

  width: 50vw;

  &:hover {
    margin-left: -4vw;
    margin-right: 4vw;
  }
  transition: 0.2s;
`;
export const AboutText = styled.div`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 1.45vw;

  margin: 0;
  margin-left: -5vw;
  margin-right: 5vw;
  margin-bottom: 2vh;
  z-index: 1;

  width: 50vw;

  &:hover {
    margin-left: -4vw;
    margin-right: 4vw;
  }
  transition: 0.2s;
`;

export const AboutImage = styled.img`
  width: auto;
  height: 100%;

  // object-fit: cover;

  border-radius: 4%;

  box-shadow: 1vw 2vh ${colors.TEXT};

  &:hover {
    height: 105%;
    margin-left: -1vw;
    box-shadow: 2vw 3vh ${colors.TEXT};
  }

  transition: 0.5s;
`;

export const AboutImageContainer = styled.div`
  width: 30vw;
  height: 75vh;

  display: flex;
  justify-content: center;

  margin-left: 1vw;
  margin-right: 1vw;
`;

////////// Vertical //////////
export const AboutContainerVertical = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  margin: 0;
  margin-left: 0vw;
  padding: 0;
  z-index: 1;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;
export const AboutTextContainerVertical = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10vh;
`;

export const AboutTextVertical = styled.div`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 1.8vh;

  margin: 1vh;
  z-index: 1;

  width: 80vw;

  &:hover {
    margin-left: 2vh;
  }
  transition: 0.2s;
`;

export const AboutImageVertical = styled.img`
  width: auto;
  height: 70%;

  margin-left: -5vw;
  margin-top: 1vh;

  border-radius: 4%;

  box-shadow: 3vw 2vh ${colors.TEXT};

  &:hover {
    height: 72%;
    box-shadow: 5vw 2vh ${colors.TEXT};
  }

  transition: 0.5s;
`;

export const AboutImageContainerVertical = styled.div`
  width: 30vw;
  height: 75vh;

  display: flex;
  justify-content: center;
`;

export const AboutArrowContainerVertical = styled.a`
  display: flex;
  width: 100vw;
  justify-content: center;
  position: absolute;
  bottom: 9vh;
  height: 5vh;

  &:hover {
    cursor: pointer;
  }
`;
