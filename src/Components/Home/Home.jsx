import React from 'react'

import Links from '../Menus/Links/Links.jsx'
import SideMenu from "../Menus/SideMenu.jsx"
import Landing from './Landing Page/Landing.jsx'
import HomeProjects from './HomeProjects.jsx'
import About from './About.jsx'
import * as colors from '../../colors.js'

import { BufferSection, Section, SeperationLine, UnderConstructionText } from "./HomeStyles.js"

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
    
    <About/>
    
    <BufferSection/>
    <HomeProjects/>
    
    {/* Under Construction Section */}
    {/* <div style={background} id='Section3'>
      <UnderConstructionText> 🚧 under construction 🚧</UnderConstructionText>
    </div> */}


  </>
);

export default Home;
