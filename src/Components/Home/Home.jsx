import React from 'react'

import Links from '../Subcomponents/Links.jsx'
import SideMenu from "../Subcomponents/SideMenu.jsx"
import Landing from './Landing.jsx'
import Projects from './HomeProjects.jsx'
import Me from './Me.jsx'
import * as colors from '../../colors.js'

import { Section, UnderConstructionText } from "./HomeStyles.js"

import {} from "react-awesome-reveal"



const background = {
  backgroundColor: colors.BACKGROUND,



  zIndex: -1,
  width: "100vw",
  height: "100vh",
  top: "100vh",
  left:"0"
}

const Home = (props) => (
  <>
    <SideMenu/>
    <Links/>
        
    {/* INTRO SECTION */}
    <Landing/>
      
    
    {/* <SVGComponent /> */}
    <div style={background} id='Section2'>
      <UnderConstructionText> 🚧 under construction 🚧</UnderConstructionText>
    </div>

    {/* ABOUT ME SECTION */}
    {/* <Projects/> */}

    {/* CURRENT SKILLS AND INTERESTS */}
    {/* <Section style={style}>
      <ABHeader>
        <SubTitle>I know how to use these </SubTitle>
        <SubTitle>But right now I'm really interested in </SubTitle>
        <SubTitle>3D Modeling and making art</SubTitle>
      </ABHeader>
    </Section> */}
    {/* <Me/> */}

  </>
);

export default Home;
