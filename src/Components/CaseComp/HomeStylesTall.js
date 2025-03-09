import styled, { css, keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Source Code Pro";

export const UnderConstructionText = styled.h1`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 3vw;
  margin: 0;
  padding-top: 75vh;
  padding-left: 10vw;
`;

/////////// SECTIONS/CONTAINERS ///////////

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
  z-index: 1;
`;

export const Section = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  margin: 0;
  margin-left: 0vw;
  padding: 0;
  z-index: 1;

  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;

export const SectionLong = styled.div`
  position: relative;
  width: 100vw;
  height: fit-content;

  margin: 0;
  margin-left: 0vw;
  padding: 0;
  z-index: 1;

  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;
export const SectionCentered = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;

  margin: 0;
  margin-left: 0vw;
  padding: 0;
  z-index: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;

export const BufferSection = styled.div`
  height: 15vh;
`;

export const LetterContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: fit-content;
`;
////////// TEXT //////////

export const Title = styled.h1`
  display: flex;
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 10vw;
`;

// Individual letters for animation
export const Letter = styled.h1`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 8.5vh;
  margin: 0;

  animation: 1s ${fadeIn};
  overflow: hidden;

  &:hover {
    margin-top: -1vh;
    font-size: 10vh;
  }
  transition: 0.2s;
`;

export const BoldSubTitle = styled.h2`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 4vh;
  margin: 0;
  z-index: 1;

  &:hover {
    font-size: 5vh;
  }
  transition: 0.2s;
`;

export const SubTitle = styled.h2`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 3.5vh;
  margin: 0;
  z-index: 1;

  &:hover {
    margin-bottom: 0.5vh;
  }
  transition: 0.2s;
`;

export const SubLetter = styled.h2`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 5.5vh;
  margin: 0;

  animation: 1s ${fadeIn};
  overflow: hidden;
`;

export const SubHeader = styled.h1`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 2.5vw;
  margin: 0;
  z-index: 1;
`;

export const Text = styled.p`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 2vw;

  z-index: 1;
`;

export const TextSection = styled.div`
  display: flex;
`;

////////// IMAAGES/ICONS //////////
export const ImageContainer = styled.div`
  background-color: #f7ecde;
  border: 10px solid #54bab9;

  width: 80%;
  box-shadow: 1vw 2vh 5px grey;
`;

export const Image = styled.img`
  width: 100%;
`;

export const ArrowDown = styled.a`
  margin-top: 0vh;
  font-size: 5vw;

  display: flex;
  justify-content: center;
  width: 10vw;

  &:hover {
    margin-top: 1vh;
  }
  transition: 0.2s;
`;

export const ArrowDownHeight = styled.a`
  margin-top: 0vh;
  font-size: 5vh;

  display: flex;
  justify-content: center;
  width: 10vw;

  &:hover {
    margin-top: 1vh;
  }
  transition: 0.2s;
`;
export const DisplayImg = styled.img`
  position: absolute;
  width: 35vw;
  margin-left: 1.25vw;
  border-radius: 4%;
  &:hover {
    width: 37.5vw;
    margin-left: 0vw;
  }

  transition: 0.5s;
`;

export const SeperationLine = styled.div`
  position: static;
  width: 80vw;
  height: 5px;
  margin-left: 1vw;
  background-color: ${colors.TEXT};
  border-radius: 5px;
`;
