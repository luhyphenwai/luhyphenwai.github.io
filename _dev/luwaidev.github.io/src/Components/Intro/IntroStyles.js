import styled from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../colors";

/////////// SECTIONS/CONTAINERS ///////////

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
`;

export const Container = styled.div`
  justify-content: center;
  width: fit-content;
  height: 20%;
  margin-top: 20vh;
`;
export const SubTextContainer = styled.div`
  width: 53.6%;
  display: flex;
  justify-content: space-between;
`;
export const LeftSubText = styled.div`
  justify-content: left;
`;
export const RightSubText = styled.div`
  justify-content: right;
`;

export const Section = styled.div`
  width: 100vw;
  height: 110vh;
  margin: 0;
  margin-left: -10px;
  padding: 0;
`;
////////// TEXT //////////

export const Title = styled.h1`
  display: flex;
  /* font-family: "Fredoka One", cursive;
  color: ${colors.DARK_BLUE};
  font-size: 15vw;
  margin: 0; */
`;
export const Letter = styled.h1`
  font-family: "Fredoka One", cursive;
  color: ${colors.DARK_BLUE};
  font-size: 15vw;
  margin: 0;

  animation: 1s ${fadeIn};
`;
export const SubTitle = styled.h2`
  font-family: "Fredoka One", cursive;
  color: ${colors.DARK_BLUE};
  font-size: 2vw;
  margin: 0;
`;

export const Text = styled.p`
  font-family: "Fredoka One", cursive;
  color: ${colors.DARK_BLUE};
  font-size: 2vw;
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

export const Blob = styled.div`
  size: fit-content;
  width: 300vh;
  /* height: 300vh; */
  position: absolute;
  justify-content: center;
  display: flex;
  /* transform: rotate(0deg); */
  top: -600vh;
  left: -75vh;
  z-index: -1;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const Blob1 = styled.img`
  size: fit-content;
  width: 150vw;
  /* height: 300vh; */
  position: absolute;
  justify-content: center;
  display: flex;
  /* transform: rotate(0deg); */
  top: 20vh;
  left: -50vw;
  z-index: -1;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;
export const Blob2 = styled.img`
  size: fit-content;
  width: 150vw;
  /* height: 300vh; */
  position: absolute;
  justify-content: center;
  display: flex;
  /* transform: rotate(0deg); */
  top: 40vh;
  left: 0vh;
  z-index: -2;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

export const IconLinks = styled.a`
  width: 3vw;
  margin: 1vw;
  &:hover {
    cursor: pointer;
    width: 3vw;
  }
`;

export const IconContainer = styled.a`
  width: 98vw;
  position: fixed;
  justify-content: center;
  display: flex;
  top: 3vh;
  /* margin-top: 24px; */
`;

export const IconBackground = styled.div`
  background-color: ${colors.LIGHT_YELLOW};

  width: fit-content;

  justify-content: center;

  display: flex;
  height: 10vh;
  border-radius: 5vw;
`;

// About Me
export const ABHeader = styled.div`
  margin-left: 10vw;
`;
