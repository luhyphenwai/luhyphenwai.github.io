import React from 'react'

import Links from '../Menus/Links/Links.jsx'
import SideMenu from "../Menus/SideMenu/SideMenu.jsx"
import HomeProjects from '../Home/HomeProjects/HomeProjects.jsx'
import PlatformInfo from './PlatformInfo/PlatformInfo.jsx'
import * as colors from '../../colors.js'

import { BufferSection, Section, SeperationLine, UnderConstructionText } from "../Home/HomeStyles.js"



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
    
    <PlatformInfo/>
    
    <BufferSection/>
    <HomeProjects/>
    
    {/* Under Construction Section */}
    {/* <div style={background} id='Section3'>
      <UnderConstructionText> 🚧 under construction 🚧</UnderConstructionText>
    </div> */}


  </>
);

export default Home;
