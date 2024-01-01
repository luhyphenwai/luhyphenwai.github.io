import styled, { keyframes, css } from "styled-components";
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
const BearAppear = keyframes`
    0% {rotate: -90deg; bottom: -20vh}
    80% {rotate: -90deg; bottom: -20vh}
    100% {rotate: -30deg; bottom: -11vh}
    `;

export const NavContainer = styled.div`
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

export const NavButton = styled.button`
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
  bottom: 0vh;
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
    /* width: 31vh;
    height: 30vh; */
    rotate: -40deg;
  }
  rotate: -30deg;
  z-index: 1002;
  position: fixed;
  bottom: -11vh;
  right: -12vh;
  width: 30vh;
  height: 30vh;
  transition: 0.4s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
  animation: ${BearAppear} 3.5s ease-in-out;
  /* animation-delay: 2s; */
`;

export const NavCirc = styled.div`
  /* &:hover {
    cursor: pointer;

    width: 200vw;
    height: 200vw;
    border-radius: 50vw;
  } */

  /* &::hover > * {
    background-color: ${colors.DARK_BLUE};
  } */

  /* &:hover ${BearImg} {
    cursor: pointer;
    width: 31vh;
    height: 30vh;
    rotate: -40deg;
  } */
  overflow: hidden;
  white-space: nowrap;

  background-color: ${colors.LIGHT_BLUE};
  z-index: ${(props) => (props.selected ? "1000" : "-100")};
  position: fixed;
  bottom: ${(props) => (props.selected ? "-761vh" : "-11vh")};
  right: ${(props) => (props.selected ? "-762vh" : "-12vh")};
  width: ${(props) => (props.selected ? "1000vh" : "0vh")};
  height: ${(props) => (props.selected ? "1000vh" : "0vw")};
  border-radius: ${(props) => (props.selected ? "250vh" : "0vw")};

  transition: 1s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);

  animation: ${(props) => (props.selected ? styles : "")};
`;
const flash = keyframes`
  from {
      opacity: 0;
      }

      to {
      opacity: 1;
      }
`;
const styles = css`
  /* background-color: pink; */
  animation: ${flash} 0.3s linear 3;
`;

export const NavMenuButton = styled.div`
  z-index: 90;

  position: fixed;
  top: 11vh;
  left: 12vh;
  width: 40vh;
  height: 40vh;

  transition: 0.25s;
  transition-timing-function: cubic-bezier(0.39, 0.575, 0.565, 1);
`;

export const MenuContainer = styled.div`
  z-index: ${(props) => (props.selected ? "1001" : "1001")};
  background-color: ${colors.LIGHT_YELLOW};
  position: fixed;
  display: flex;
  justify-content: left;
  flex-direction: column;
  align-items: left;
  /* margin-left: 5vw; */
  margin-left: ${(props) => (props.selected ? "5vw" : "-15vw")};
  margin-top: 15vh;
  width: 30vw;
  height: 70vh;
  top: ${(props) => (props.selected ? "0vh" : "0vh")};
  opacity: ${(props) => (props.selected ? "100%" : "0%")};
  left: 0;

  border-radius: 3vw;
  transition: 0.4s;

  padding: auto;
`;

export const MenuButton = styled.a`
  z-index: ${(props) => (props.selected ? "1001" : "1001")};
  /* background-color: ${colors.LIGHT_YELLOW}; */

  display: flex;
  /* align-items: center; */
  justify-content: left;
  text-decoration: none;
  width: 15vw;
  height: 5vw;
  /* margin: 1vw; */
  margin-left: 3vw;
  margin-top: ${(props) => (props.selected ? "3vh" : "3vh")};
  /* margin-top: "3vh"; */
  opacity: ${(props) => (props.selected ? "100%" : "0%")};
  transition: 0.3s;

  border-radius: 3vw;

  padding: auto;

  text-align: center;

  font-family: "Fredoka One", cursive;
  font-size: 3vw;
  color: ${colors.DARK_BLUE};

  &:hover {
    cursor: pointer;
    /* width: 18vw;
    height: 18vw;
    margin: 2vw; */
    /* margin-top: -1vw; */
    font-size: 3.5vw;
    margin-left: 4vw;
  }

  /* transition-delay: 0.4s; */
`;
export const MailButton = styled.a`
  z-index: ${(props) => (props.selected ? "1001" : "1001")};
  background-color: ${colors.LIGHT_YELLOW};
  width: 15vw;
  height: 8vh;
  position: fixed;
  bottom: 2.5vh;
  left: 42.5vw;
  top: ${(props) => (props.selected ? "90vh" : "105vh")};

  font-family: "Fredoka One", cursive;
  font-size: 2vw;
  color: ${colors.DARK_BLUE};
  /* display: table-cell; */
  line-height: 8vh;
  text-align: center;

  margin-top: ${(props) => (props.selected ? "0" : "-1vh")};
  opacity: ${(props) => (props.selected ? "100%" : "0%")};
  transition: 0.4s;

  align-items: center;
  justify-content: center;
  border-radius: 3vw;
  &:hover {
    cursor: pointer;
    width: 18vw;
    height: 10vh;
    /* display: table-cell; */
    line-height: 10vh;
    left: 41.5vw;
    bottom: 1.5vh;
    top: 89vh};
  }
`;
