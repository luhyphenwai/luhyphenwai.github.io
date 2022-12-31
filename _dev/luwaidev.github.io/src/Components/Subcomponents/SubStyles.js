import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../colors";

export const IconLinks = styled.a`
  width: 3vw;
  font-size: 3vw;
  margin-left: 1vw;
  margin-right: 1vw;
  margin-top: 0.5vw;
  margin-bottom: 0vw;
  &:hover {
    cursor: pointer;
    width: 3vw;
    font-size: 3.5vw;
    margin-left: 0.8vw;
    margin-right: 1.2vw;
    margin-top: -0.1vw;
    margin-bottom: -0.8vw;
  }
  transition: 0.1s ease-in;
`;

export const IconContainer = styled.a`
  width: 100vw;
  position: fixed;
  justify-content: center;
  display: flex;
  top: 3vh;
  z-index: 100;
  /* margin-top: 24px; */
`;

export const IconBackground = styled.div`
  background-color: ${colors.LIGHT_YELLOW};

  width: fit-content;
  height: fit-content;

  justify-content: center;

  align-items: center;

  display: flex;
  border-radius: 5vw;
  padding: 0;

  z-index: 100;
`;

// NAV MENU
export const NavButton = styled.div`
  &:hover {
    cursor: pointer;

    /* width: 200vw;
    height: 200vw; */
    /* rotate: -40deg; */
    /* background-color: ${colors.DARK_YELLOW}; */
  }
  /* background-color: ${colors.DARK_YELLOW}; */
  z-index: 100;
  position: fixed;
  bottom: -11vh;
  right: -5.5vw;
  width: 25vh;
  height: 27vh;
  /* rotate: -30deg; */

  overflow: hidden;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;
export const BearImg = styled.img`
  width: 15vw;
  &:hover {
    cursor: pointer;
    width: 31vh;
    height: 30vh;
    rotate: -40deg;
  }
  rotate: -30deg;
  z-index: 100;
  position: fixed;
  bottom: -11vh;
  right: -12vh;
  width: 30vh;
  height: 30vh;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const NavCirc = styled.div`
  &:hover {
    cursor: pointer;

    width: 200vw;
    height: 200vw;
  }

  &::hover > * {
    background-color: ${colors.DARK_BLUE};
  }

  &:hover ${BearImg} {
    cursor: pointer;
    width: 31vh;
    height: 30vh;
    rotate: -40deg;
  }
  overflow: hidden;
  white-space: nowrap;

  background-color: ${colors.DARK_YELLOW};
  z-index: 88;
  position: fixed;
  bottom: -11vh;
  right: -12vh;
  width: 30vh;
  height: 30vh;

  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const NavMenuButton = styled.div`
  z-index: 90;

  position: fixed;
  top: 11vh;
  left: 12vh;
  width: 30vh;
  height: 30vh;

  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;
