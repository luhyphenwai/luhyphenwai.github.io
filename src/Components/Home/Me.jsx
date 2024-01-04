import React from 'react'
import { useRef } from 'react';


import {MeContainer, MeBack, MeHeader, MeDesc, MeImg} from "./HomeStyles.js"
import * as colors from '../../colors.js'

import {Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

import me from '../../Images/luwai.png'
import b1 from '../../Icons/Blobs/Ellipse 1.png';

// function getMax(num){
//     if (num > 1){
//         return 1;
//     }
//     else{
//         return num;
//     }
// }


const blob ={
  position : "absolute",
  zIndex: -1,
  rotate: "170deg",
  width: "150vw",
  top:"620vh",
  left:"-10vw"
}
const blob2 ={
  position : "absolute",
  zIndex: -1,
  rotate: "170deg",
  width: "250vh",
  top:"595vh",
  left:"-10vw",
  overflow: "hidden"
}
export default function Me(){

    
    return (
        <>
        
        </>
    );
};

// export default Projects;