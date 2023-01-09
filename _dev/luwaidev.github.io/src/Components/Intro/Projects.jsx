import React from 'react'
import { useRef } from 'react';


import {Section,SubTitle, ABHeader,  TextSection, Project, PFrontImg, PBackImg, PTextBacking, PHeader, PText} from "./IntroStyles.js"
import * as colors from '../../colors.js'

import {Bounce, Fade, Flip, JackInTheBox} from "react-awesome-reveal"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

import UnityPathfindingImg from '../../Images/Screenshots/Unity Pathfinding.png'

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
  width: "200vw",
  height: "400vh",
  // marginLeft:"-10vw"
  // borderRadius: " 40% 40% 0 0",
  top: "200vh",
  left: "0"
}
export default function Projects(){

    
    return (
        <>
          <div style={background} ></div>
          <Section style={{height:"300vh", display:"block"}}>
            <ABHeader>
              <TextSection >
                <Fade>
                  <SubTitle>I like making cool things with&nbsp;</SubTitle>
                </Fade>
                <JackInTheBox delay={500}>
                  <Bounce delay={500}>
                    <SubTitle style={{color: colors.RED}}> code </SubTitle>
                  </Bounce>
                </JackInTheBox>
              </TextSection>
            </ABHeader>

            <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "7vw", marginTop: "10vh"}}>
              <Project href="../Projects/Unity Pathfinding">
                  <PFrontImg src={UnityPathfindingImg}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>Unity Pathfinding <br/> Visualizer</PHeader>
                  <PText>
                    A Unity WebGL project that visualizes <br/>pathfinding algorithms  in real time. 
                  </PText>
              </Project>
            </div>

            
            <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "52.5vw", marginTop: "45vh"}}>
              <Project>
                  <PFrontImg src={UnityPathfindingImg}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>Typer</PHeader>
                  <PText>
                    A simple and fun typing trainer <br/>made with plain HTML and CSS. 
                  </PText>
              </Project>
            </div>

{/* 
            <SubTitle>making games</SubTitle>
            <SubTitle>3D Modeling and making art</SubTitle>
            
            <SubTitle>and doing hackathons</SubTitle> */}
          </Section>
        </>
    );
};

// export default Projects;