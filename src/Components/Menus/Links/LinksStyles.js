import styled, { keyframes, css } from "styled-components";
import { fadeIn } from "react-animations";
import * as colors from "../../../colors";

const BOLD_FONT = "Rubik Mono One";
const REGULAR_FONT = "Space Mono";

/////////// SIDE LINKS ///////////

////////// Horizontal //////////

export const SideLinkContainerHorizontal = styled.div`
  height: 10vh;
  width: 100vw;

  position: fixed;
  bottom: 0vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  z-index: 100;

  overflow: hidden;
  /* margin-top: 24px; */
`;

export const SideLinkBackgroundHorizontal = styled.div`
  background-color: ${colors.BACKGROUND};

  width: fit-content;
  height: fit-content;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  border-radius: 2vh;
  padding: 0;

  z-index: 100;
`;

export const SideLinksHorizontal = styled.a`
  height: 7vh;
  font-size: 6vh;

  margin-left: 2vw;
  margin-right: 2vw;
  margin-top: 0.5vh;

  &:hover {
    cursor: pointer;

    margin-top: 0vw;
    // font-size: 7vh;
  }
  transition: 0.1s ease-in;
`;

////////// Vertical //////////
export const SideLinkBackgroundVertical = styled.div`
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

export const SideLinkContainerVertical = styled.div`
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
