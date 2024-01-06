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
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background-color: ${colors.BACKGROUND};
  overflow: hidden;
`;

export const BufferSection = styled.div`
  height: 20vh;
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
  font-size: 14vw;
  margin: 0;

  animation: 1s ${fadeIn};
  overflow: hidden;

  &:hover {
    margin-top: -2.1vh;
    font-size: 15vw;
  }
  transition: 0.2s;
`;

export const BoldSubTitle = styled.h2`
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};
  font-size: 4vw;
  margin: 0;
  z-index: 1;

  &:hover {
    font-size: 4.25vw;
  }
  transition: 0.2s;
`;

export const SubTitle = styled.h2`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 3vw;
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
  font-size: 5vw;
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

////////// ABOUT ME //////////

export const AboutTextContainer = styled.div``;

export const AboutText = styled.div`
  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 2vw;

  margin: 0;
  margin-left: -5vw;
  margin-right: 5vw;
  margin-bottom: 5vh;
  z-index: 1;

  width: 50vw;

  &:hover {
    margin-left: -4vw;
    margin-right: 4vw;
  }
  transition: 0.2s;
`;

export const AboutImage = styled.img`
  width: 30vw;
  max-height: 50vh;

  margin-left: 1vw;
  margin-right: 1vw;
  border-radius: 4%;

  box-shadow: 1vw 2vh ${colors.TEXT};

  &:hover {
    margin-left: 0vw;
    width: 32vw;
    margin-left: 0vw;
    box-shadow: 2vw 3vh ${colors.TEXT};
  }

  transition: 0.5s;
`;

////////// PROJECTS //////////
export const ProjectHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1vw;
  margin-top: 1h;
  margin-bottom: -5vh;

  position: relative;
`;

export const ProjectSubtitle = styled.div`
  margin-left: 0.25vw;
  margin-top: 5vh;
  margin-bottom: 10vh;
  margin-right: 13vw;

  position: absolute;
  top: -2vw;
  right: 0;

  font-family: ${REGULAR_FONT};
  color: ${colors.TEXT};
  font-size: 2vw;

  text-align: right;
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
  // background-color: ${colors.BACKGROUND_DARK};
`;

export const ProjectColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: flex-start;

  width: 45vw;
  // padding: 2vw;
  padding-top: 5vw;
  padding-bottom: 0vw;
`;

export const Project = styled.a`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 41vw;
  height: auto;
  margin-bottom: 3vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND};

  box-shadow: 0px 0px 10px black;

  &:hover {
    cursor: pointer;
    margin-top: -1vw;
    margin-bottom: 4vw;
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
    opacity: 0.1;
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
export const ProjectTitleLine = styled.div`
  position: absolute;
  top: 6vw;
  left: 1vw;
  width: 39vw;
  height: 3px;
  background-color: ${colors.TEXT};
  border-radius: 5px;

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
  top: 7vw;
  margin: 1vw;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectTags = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2vw;
  font-decoration: underline;

  color: ${colors.TEXT};
  position: absolute;
  bottom: 1vw;
  margin: 1vw;
  width: 50%;

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectLinks = styled.div`
  position: absolute;
  bottom: 1vw;
  right: 1vw;

  flex-direction: row;
  justify-content: flex-end;
`;

export const ProjectLink = styled.a`
  font-family: ${REGULAR_FONT};
  font-size: 4vw;
  color: ${colors.TEXT};
  margin-left: 1vw;

  z-index: 200;
  &:hover {
    cursor: pointer;
    font-size: 5vw;
  }

  opacity: 0;

  ${Project}:hover & {
    opacity: 1;
  }

  transition: 0.4s;
`;

export const ProjectEndText = styled.div`
  font-family: ${REGULAR_FONT};
  font-size: 2vw;

  color: ${colors.TEXT};

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  width: 37vw;
  height: 100%;
  margin-bottom: 2vw;

  padding: 2vw;

  border-radius: 20px;
  background-color: ${colors.BACKGROUND_DARK};

  &:hover {
    cursor: pointer;
    margin-top: -1vw;
    margin-bottom: 3vw;
    // background-color: ${colors.DARK_BLUE};
  }

  z-index: 0;

  transition: 0.4s;
`;

export const ProjectEndIcon = styled.a`
  position: absolute;
  bottom: 1vw;
  left: 2vw;

  flex-direction: row;
  justify-content: flex-end;

  color: ${colors.TEXT};
  font-size: 4vw;
`;
