import styled, { keyframes, css } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Space Mono";

/////////// SIDE LINKS ///////////

export const SideLinkBackground = styled.div`
  background-color: ${colors.BACKGROUND};

  width: fit-content;
  height: fit-content;

  margin-right: 1vw;

  justify-content: center;

  align-items: center;

  display: flex;
  flex-direction: column;

  border-radius: 2vw;
  padding: 0;

  z-index: 100;
`;

export const SideLinkContainer = styled.a`
  height: 100vh;

  position: fixed;
  right: 0vw;

  display: flex;
  flex-direction: column;

  justify-content: center;
  z-index: 100;

  overflow: hidden;
  /* margin-top: 24px; */
`;
export const SideLinks = styled.a`
  width: 3vw;
  font-size: 4vw;
  margin-left: 1vw;
  margin-right: 2vw;
  margin-top: 0.5vw;
  margin-bottom: 0vw;
  &:hover {
    cursor: pointer;
    width: 3vw;
    font-size: 5vw;
    margin-left: 1vw;
    margin-right: 2.5vw;
    margin-top: 0.5vw;
    margin-bottom: 0vw;
  }
  transition: 0.1s ease-in;
`;

// SIDE MENU

export const SideMenuButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  position: fixed;
  right: 1.5vw;
  top: 1vh;

  width: 5vw;
  height: 4vw;
  border-radius: 2vw;
  padding-top: 1vw;

  background-color: ${colors.BACKGROUND};
  color: ${colors.TEXT};

  font-size: 4vw;

  &:hover {
    cursor: pointer;

    font-size: 5vw;
  }

  z-index: 200;

  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;

  overflow: hidden;
  z-index: 100;
`;

export const MenuBackground = styled.div`
  background-color: ${colors.BACKGROUND};

  position: fixed;
  right: ${(props) => (props.visible ? "-250vw" : "0vw")};
  top: ${(props) => (props.visible ? "-250vw" : "0vh")};

  width: ${(props) => (props.visible ? "500vw" : "0vw")};
  height: ${(props) => (props.visible ? "500vw" : "0vh")};

  border-radius: 100vw;

  z-index: 100;

  transition: 2s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuButtonContainer = styled.div`
  position: fixed;
  top: 5vh;
  left: ${(props) => (props.visible ? "1vw" : "-50vw")};

  transition: 1s;
  display: flex;
  flex-direction: column;
`;

export const MenuButton = styled.a`
  font-size: 4vw;
  font-family: ${BOLD_FONT};
  color: ${colors.TEXT};

  transition: 0.4s;
`;
