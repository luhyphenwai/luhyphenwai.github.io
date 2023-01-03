import React from 'react'


import {Section, Flexbox,Container, Title, SubTitle, SubTextContainer,LeftSubText, RightSubText, Blob1, Blob2, ABHeader, Letter, TextSection} from "./IntroStyles.js"

import Links from '../Subcomponents/Links.jsx'
import SideMenu from "../Subcomponents/SideMenu.jsx"
import Splash from './Splash.jsx'
import Projects from './Projects.jsx'
import * as colors from '../../colors.js'

import {} from "react-awesome-reveal"

// IMAGES/ICONS
import b1 from '../../Icons/Blobs/Ellipse 1.png';
import b2 from '../../Icons/Blobs/Ellipse 2.png';

const style = {
  backgroundColor: colors.DARK_YELLOW,
  zIndex: 10,
  // position: "absolute",
  // width: "100vw",
  // height: "30vw",
}

const background = {
  backgroundColor: colors.DARK_YELLOW,
  zIndex: -1,
  position: "absolute",
  width: "100vw",
  height: "100vh",
  borderRadius: " 20vw 20vw 0 0",
  top: "110vh",
  left:"0"
}

const Intro = (props) => (
  <>
  <SideMenu></SideMenu>
  <Links></Links>
      
    {/* INTRO SECTION */}
    <Splash/>
    
    <Blob1 style={{zIndex:-1}} src={b1} /> `
    <Blob2 style={{zIndex:-21}} src={b2} />`
    
    {/* <SVGComponent /> */}
    <div style={background} ></div>

    {/* ABOUT ME SECTION */}
    <Projects/>

    {/* CURRENT SKILLS AND INTERESTS */}
    {/* <Section style={style}>
      <ABHeader>
        <SubTitle>I know how to use these </SubTitle>
        <SubTitle>But right now I'm really interested in </SubTitle>
        <SubTitle>3D Modeling and making art</SubTitle>
      </ABHeader>
    </Section> */}

  </>
);

export default Intro;
