import styled, { keyframes } from "styled-components";
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
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;

export const BufferSection = styled.div`
  height: 10vh;
`;
////////// TEXT //////////

export const Title = styled.h1`
  display: flex;
  font-family: ${BOLD_FONT};
  color: ${colors.DARK_BLUE};
  font-size: 15vw;
  margin: 0; */
`;

export const BoldSubTitle = styled.h2`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 4vw;
  margin: 0;
  z-index: 1;
`;

export const SubTitle = styled.h2`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 3vw;
  margin: 0;
  z-index: 1;
`;
export const SubHeader = styled.h1`
  font-family: "Fredoka One", cursive;
  color: ${colors.TEXT};
  font-size: 2.5vw;
  margin: 0;
  z-index: 1;
`;

export const Text = styled.p`
  font-family: "Fredoka One", cursive;
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
  height: 3px;
  margin-left: 1vw;
  background-color: ${colors.TEXT};
  border-radius: 5px;
`;
////////// LANDING PAGE //////////

// Holds the "Hi, I'm" text
export const IntroSubheaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 1vh;
  left: 1vw;
`;

// Individual letters for animation
export const Letter = styled.h1`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 14vw;
  margin: 0;

  animation: 1s ${fadeIn};
  overflow: hidden;
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
  margin-bottom: -2vh;
`;
export const LastNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: -2vh;
`;
// Hold left and right text

export const LeftLandingSubText = styled.div`
  position: absolute;
  bottom: 1vh;
  left: 1vw;
  z-index: 1;
`;
export const RightLandingSubText = styled.div`
  position: absolute;
  bottom: 1vh;
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

////////// PROJECTS //////////
export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
  margin-top: 1vh;
`;

export const ProjectContainer = styled.div`
  display: flex;

  // height: 150vh;
  height: fit-content;
  width: 90vw;

  margin-left: 1vw;
  margin-top: 1vh;
  border-radius: 20px;

  overflow: hidden;
  background-color: ${colors.BACKGROUND_DARK};
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 45vw;
  padding: 2vw;
  padding-bottom: 0vw;
`;

export const Project = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 41vw;
  height: auto;
  margin-bottom: 2vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND};
  &:hover {
    cursor: pointer;
    // background-color: ${colors.DARK_BLUE};
  }

  z-index: 100;

  transition: 0.4s;
`;

export const ProjectImage = styled.img`
  border-radius: 20px;

  width: 100%;
  // height: 100%;

  background-color: ${colors.BACKGROUND};

  ${Project}:hover & {
    cursor: pointer;
    opacity: 0.4;
  }

  opacity: 1;
  transition: 0.4s;
`;
export const ProjectImageWhite = styled.img`
  border-radius: 20px;

  width: 100%;
  // height: 100%;

  background-color: ${colors.BACKGROUND};

  ${Project}:hover & {
    cursor: pointer;
    opacity: 0.4;
  }

  opacity: 1;
  transition: 0.4s;
`;

export const ProjectTitle = styled.h3`
  font-family: ${REGULAR_FONT};
  font-size: 3vw;
  font-decoration: underline;

  color: ${colors.TEXT};

  position: absolute;
  top: -2vh;
  left: 1vw;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }
  transition: 0.4s;
`;
export const ProjectText = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2vw;
  font-decoration: underline;

  color: ${colors.TEXT};
  position: absolute;
  top: 5vw;
  margin: 1vw;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectTech = styled.div``;
