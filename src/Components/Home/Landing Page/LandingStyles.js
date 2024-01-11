import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Source Code Pro";

////////// LANDING PAGE //////////

// Holds the "Hi, I'm" text
export const IntroSubheaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 1vh;
  left: 1vw;
`;

// Holds both words for name
export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 1vw;
`;
// Holds the "Letters" text
export const FirstNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -2vw;
`;
export const LastNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2vh;
`;
// Hold left and right text

export const LeftLandingSubText = styled.div`
  position: absolute;
  bottom: 2vh;
  left: 1vw;
  z-index: 1;
`;
export const RightLandingSubText = styled.div`
  position: absolute;
  bottom: 2vh;
  right: 2vw;
  z-index: 1;
`;

// Holds the down arrow
export const LandingArrowContainer = styled.a`
  display: flex;
  width: 100%;
  justify-content: center;
  position: absolute;
  bottom: 4vw;
  height: 5vh;

  &:hover {
    cursor: pointer;
  }
`;

////////// Tall //////////
export const LandingArrowContainerTall = styled.a`
  display: flex;
  width: 100vw;
  justify-content: center;
  position: absolute;
  bottom: 17vh;
  height: 5vh;

  &:hover {
    cursor: pointer;
  }
`;

// Hold left and right text

export const LeftLandingSubTextTall = styled.div`
  position: absolute;
  bottom: 25vh;
  left: 2vw;
  z-index: 1;
`;
export const RightLandingSubTextTall = styled.div`
  position: absolute;
  bottom: 25vh;
  right: 2vw;
  z-index: 1;
`;

// Holds the "Letters" text
export const FirstNameContainerTall = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: -2vw;
  margin-top: -30vh;
`;
export const LastNameContainerTall = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2vh;
`;
