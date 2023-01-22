import React from 'react'
import { useRef } from 'react';


import {MeContainer, MeBack, MeHeader, MeDesc, MeImg} from "./IntroStyles.js"
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
        <MeContainer>
          
          {/* <img style={blob} src={b1} alt={blob}/> */}
          <img style={blob2} src={b1} alt={blob2}/>
          <Bounce duration={1500}> <MeBack>
            {/* <Zoom  cascade={true}  delay={800} duration={800}> */}
              <MeHeader>About Me</MeHeader>
            {/* </Zoom> */}
            {/* <Zoom   cascade={true} delay={1500}duration={800} > */}
              <MeDesc>I'm Lu-Wai Wong, currently a student at The University of Toronto studying Computer Science. <br/> <br/> 
                I'm really interested in AR and VR development, web development, game development, AI, and Space technologies. <br/> <br/> 
                I love making cool stuff with code and I'm always looking for new opportunities to learn about new tech. In my free time, you'll catch me working on a new coding project, on my games, or playing some KSP or Valorant.<br/> <br/>
                I'm currently looking for Summer 2023 co-op/internship positions. <br/><br/>
                If you'd like to chat or if you'd like to challenge to a game of <a href="https://www.chess.com/registration-invite?hash=xZboa5%2BXZVFVZvXZtJjc0sui/YWfDm/kb8KKSr0NGvSNSyogJMV6i/VtZO%2Bu79V3PSXyP6FueU0P5e4nDskYajnkXnEY8pzpa6gOv3O5GdTUNBkJOqXe5OfAGsiBc/T9BhtUfv2MR6iCCILaJdZBcg%3D%3D">chess</a>, feel free to reach out to me on on social media or email me at luwaiwong@gmail.com!
              </MeDesc>
            {/* </Zoom> */}
            
          </MeBack>
          </Bounce >
          
          <Bounce duration={1500} delay={800}><MeImg src={me}/></Bounce>
        </MeContainer>
        </>
    );
};

// export default Projects;