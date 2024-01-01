import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Space Mono";

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
  width: 100vw;
  height: 100vh;

  margin: 0;
  margin-left: 0vw;
  padding: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: ${colors.BACKGROUND};
  overflow: hidden;
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
  top: 20xvh;
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
  bottom: 0;
  left: 1vw;
  z-index: 1;
`;
export const RightLandingSubText = styled.div`
  position: absolute;
  bottom: 0;
  right: 1vw;
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

///////////////////// ME ///////////////////////
export const MeContainer = styled.div`
  margin-left: -1vw;
  width: 101vw;
  height: 90vh;
  margin-bottom: -10vh;
  background-color: ${colors.DARK_YELLOW};
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: hidden;
`;

export const MeHeader = styled.h1`
  font-family: "Fredoka One", cursive;
  font-size: 3vw;
  text-align: center;
  color: ${colors.DARK_BLUE};
`;
export const MeDesc = styled.p`
  font-family: "Fredoka One", cursive;
  font-size: 1.25vw;
  text-align: left;
  padding: 3vw;
  padding-top: 0;
  color: ${colors.DARK_BLUE};
`;
export const MeBack = styled.div`
  background-color: ${colors.LIGHT_YELLOW};
  width: 50vw;
  height: 35vw;
  margin-top: -5vh;
  border-radius: 5%;
`;

export const MeImg = styled.img`
  margin-left: 5vw;
  height: 35vw;
  border-radius: 5%;
`;
