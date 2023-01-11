import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../colors";

/////////// SECTIONS/CONTAINERS ///////////

export const Flexbox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: fit-content;
  justify-content: center;
  z-index: 1;
`;

export const Container = styled.div`
  justify-content: center;
  width: fit-content;
  height: fit-content;
  margin-top: -10vh;
`;
export const SubTextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  z-index: 1;
`;
export const LeftSubText = styled.div`
  justify-content: left;
  z-index: 1;
`;
export const RightSubText = styled.div`
  justify-content: right;
  z-index: 1;
`;

export const Section = styled.div`
  width: 100vw;
  height: 110vh;
  margin: 0;
  margin-left: -10px;
  padding: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
  font-size: 17.5vw;
  margin: 0;

  animation: 1s ${fadeIn};
`;
export const SubTitle = styled.h2`
  font-family: "Fredoka One", cursive;
  color: ${colors.DARK_BLUE};
  font-size: 2vw;
  margin: 0;
  z-index: 1;
`;

export const Text = styled.p`
  font-family: "Fredoka One", cursive;
  color: ${colors.DARK_BLUE};
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
  z-index: -10;
  margin: 0;
  padding: 0;
  overflow: hidden;
`;

const blob1In = keyframes`
  0% {
  top: 150vh;
  }
50% {
  top: 150vh;
  }
  100% {
  top: 20vh;
  }
`;

const blob2In = keyframes`
  0% {
  top: 150vh;
  }
50% {
  top: 150vh;
  }
  100% {
  top: 40vh;
  }
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

  animation: 2.5s ${blob1In};
  animation-timing-function: cubic-bezier(0.55, 0.33, 0.08, 0.96);
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
  animation: 2.5s ${blob2In};
  animation-timing-function: cubic-bezier(0.55, 0.33, 0.08, 0.96);
`;

// About Me
export const ABHeader = styled.div`
  /* position: fixed; */
  /* top: 100px;
  left: 100px; */
  margin-left: 11vw;
  z-index: 100;
  /* margin-bottom: 200vh; */
`;

export const PFrontImg = styled.img`
  position: absolute;
  z-index: 10;
  width: 35vw;
  height: 30vw;
  border-radius: 10px;
  background-color: white;
  transition: 0.5s;
`;

export const PBackImg = styled.img`
  position: absolute;
  z-index: 5;
  width: 35vw;
  height: 30vw;
  border-radius: 10px;
  &:hover {
    color: white;
    cursor: pointer;

    width: 38.5vw;
    height: 33vw;
  }
  transition: 0.5s;
`;
export const PTextBacking = styled.div`
  position: absolute;
  width: 35vw;
  height: 30vw;
  z-index: 10;

  background-color: black;
  opacity: 0%;
  border-radius: 10px;

  transition: 0.5s;
`;

export const PHeader = styled.h2`
  position: absolute;
  z-index: 11;
  width: 35vw;
  height: 30vw;

  font-size: 3.5vw;
  font-family: "Fredoka One", cursive;
  text-align: center;
  color: ${colors.DARK_BLUE};
  opacity: 0%;
  /* margin-top: 3%;
  margin-left: 5vw; */

  /* &:hover {
    opacity: 100%;
    z-index: 10;
  } */
  transition: 0.5s;
  /* transition-delay: opacity 0.3s; */
`;
export const PText = styled.h2`
  position: absolute;
  z-index: 11;
  width: 35vw;
  height: 30vw;

  font-size: 1.5vw;
  font-family: "Fredoka One", cursive;
  text-align: center;
  color: ${colors.DARK_BLUE};
  opacity: 0%;
  /* margin: 20%; */
  /* padding: 10%; */
  margin-top: 35%;
  overflow: wrap;

  /* &:hover {
    opacity: 100%;
    z-index: 10;
  } */
  transition: 0.5s;
  /* transition-delay: opacity 0.3s; */
`;

export const Project = styled.a`
  position: absolute;
  width: 35vw;
  height: 30vw;
  overflow: hidden;
  margin-left: 1.25vw;
  z-index: 10;

  &:hover {
    color: transparent;
    cursor: pointer;

    width: 38.5vw;
    height: 33vw;
    margin-left: 0vw;
  }
  /* margin-left: 45vw; */

  &:hover ${PHeader} {
    opacity: 100%;
    z-index: 10;
    width: 38.5vw;
    height: 33vw;
    /* margin-top: 3%; */
  }

  &:hover ${PText} {
    opacity: 100%;
    z-index: 10;
    width: 38.5vw;
    height: 33vw;
    /* margin-top: 3%; */
  }

  &:hover ${PTextBacking} {
    opacity: 70%;
    z-index: 10;

    width: 38.5vw;
    height: 33vw;
  }

  &:hover ${PFrontImg} {
    width: 38.5vw;
    height: 33vw;
  }

  transition: 0.5s;
`;
