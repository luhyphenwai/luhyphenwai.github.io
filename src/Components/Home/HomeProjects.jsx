import React from 'react'
import { useRef } from 'react';


import * as colors from '../../colors.js'

import {Bounce, Fade, Flip, JackInTheBox, Zoom} from "react-awesome-reveal"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

import UnityPathfindingImg from '../../Images/Screenshots/Unity Pathfinding.png'
import TyperImg from '../../Images/Screenshots/typer.png'
import OfficeImg from '../../Images/Screenshots/The Office.jpg'
import SimImg from '../../Images/Screenshots/SIMULATION.png'
import ReturnImg from '../../Images/Screenshots/RETURN.gif'
import hijakImg from '../../Images/Screenshots/hijack.gif'
import b2 from '../../Icons/Blobs/Ellipse 2.png';
import f9 from '../../Images/3D Models/LP Falcon 9 in Clouds Square.png'
import beach from '../../Images/3D Models/Demo.png'
import liminal from '../../Images/3D Models/liminal with doors.png'
import circles from '../../Images/3D Models/12 Circles.png'
import starship from '../../Images/3D Models/cover.png'
import heAR from '../../Images/Screenshots/heAR.png'
import escapAR from '../../Images/Screenshots/escapar.gif'

// function getMax(num){
//     if (num > 1){
//         return 1;
//     }
//     else{
//         return num;
//     }
// }

const background = {
  backgroundColor: colors.DARK_YELLOW,
  zIndex: -1,
  position: "absolute",
  width: "100vw",
  height: "200vh",
  // marginLeft:"-10vw"
  // borderRadius: " 40% 40% 0 0",
  top: "200vh",
  left: "0"
}
const background2 = {
  backgroundColor: colors.LIGHT_BLUE,
  zIndex: -1,
  position: "absolute",
  width: "100vw",
  height: "400vh",
  // marginLeft:"-10vw"
  // borderRadius: " 40% 40% 0 0",
  top: "280vh",
  left: "0"
}

const blob ={
  position : "absolute",
  zIndex: -1,
  rotate: "55deg",
  width: "150vw",
  top:"200vh",
  left:"-30vw"
}
export default function Projects(){

    
    return (
        <>
        </>
    );
};

// export default Projects;