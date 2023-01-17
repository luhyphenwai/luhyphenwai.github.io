import React from 'react'
import { useRef } from 'react';


import {Section,SubTitle, ABHeader,  TextSection, Project, PFrontImg, PBackImg, PTextBacking, PHeader, PText, SubHeader} from "./IntroStyles.js"
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
const background2 = {
  backgroundColor: colors.LIGHT_BLUE,
  zIndex: -1,
  position: "absolute",
  width: "100vw",
  height: "200vh",
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
          <div style={background} ></div>
          <img style={blob} src={b2} alt={blob}/>
          <div style={background2} ></div>
          <Section style={{height:"300vh", display:"block"}}>
            <ABHeader>
              <TextSection >
                <Fade direction='left' triggerOnce={true}>
                  <SubHeader>I like making cool things with&nbsp;</SubHeader>
                </Fade>
                <JackInTheBox delay={400}>
                  <Bounce delay={400}>
                    <SubHeader style={{color: colors.RED}}> code </SubHeader>
                  </Bounce>
                </JackInTheBox>
              </TextSection>
            </ABHeader>

            <Fade direction={"down"}delay={1000} duration={1000} damping={0.85} cascade={true} triggerOnce={true}> 
              <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "10vh"}}>
                <Project href="../Projects/Unity Pathfinding/index.html">
                    <PFrontImg src={UnityPathfindingImg}/>
                    <PBackImg />
                    <PTextBacking/>
                    <PHeader>Unity Pathfinding <br/> Visualizer</PHeader>
                    <PText>
                      A Unity WebGL project that visualizes <br/>pathfinding algorithms  in real time. 
                    </PText>
                </Project>
              </div>
            

              <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "50vw", marginTop: "35vh"}}>
                <Project href="../Projects/typer">
                    <PFrontImg src={TyperImg}/>
                    <PBackImg />
                    <PTextBacking/>
                    <PHeader>Typer</PHeader>
                    <PText>
                      A simple and fun typing trainer <br/>made with plain HTML and CSS. 
                    </PText>
                </Project>
              </div>
            
            </Fade>
            

            <div style={{height: "110vh"}}></div>
            <div style={{marginLeft:"70vw"}}>
              <JackInTheBox  triggerOnce={true}>
                <Bounce triggerOnce={true}>
                  <SubHeader  >making games</SubHeader>
                </Bounce>
              </JackInTheBox>
            </div>

            

            <Fade  delay={1000} duration={1000} damping={0.85} cascade={true} triggerOnce={true}>
              <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "30vh"}}>
              <Project href="https://luwaidev.itch.io/the-office">
                  <PFrontImg src={OfficeImg}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>The Office</PHeader>
                  <PText>
                    A atmospheric and spooky horror game <br/>made in around 4 days for TOJam 2022. 
                  </PText>
              </Project>
            </div>

             <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "50vw", marginTop: "10vh"}}>
              <Project href="https://luwaidev.itch.io/simulation">
                  <PFrontImg src={SimImg}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>SIMULATION</PHeader>
                  <PText>
                    A sci-fi themed arena shooter <br/>made in around a week in Unity. 
                  </PText>
              </Project>
            </div>
            </Fade>
            
            <Fade  delay={1000} duration={1000} damping={0.85} cascade={true} triggerOnce={true}>
              <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "100vh"}}>
              <Project href="https://luwaidev.itch.io/the-office">
                  <PFrontImg src={ReturnImg}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>RETURN</PHeader>
                  <PText>
                    A 2D Platformer where you control time<br/>made for a jam about time
                  </PText>
              </Project>
            </div>

             <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "50vw", marginTop: "85vh"}}>
              <Project href="https://luwaidev.itch.io/simulation">
                  <PFrontImg src={hijakImg}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>Hijack</PHeader>
                  <PText>
                    A neon sci fi isometric turn based strategy game <br/> where you can hack the enemy units. 
                  </PText>
              </Project>
            </div>
            </Fade>
             
              {/* <SubTitle>3D Modeling and making art</SubTitle>
              
              <SubTitle>and doing hackathons</SubTitle> */}
          </Section>
        </>
    );
};

// export default Projects;