import React from 'react'
import { useRef } from 'react';


import {Section,SubTitle, ABHeader,  TextSection, Project, PFrontImg, PBackImg, PTextBacking, PHeader, PText, SubHeader, DisplayImg} from "./HomeStyles.js"
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
          <div style={background} ></div>
          <img style={blob} src={b2} alt={blob}/>
          <div style={background2} ></div>
          <Section style={{height:"fit-content", display:"block"}}>
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
              <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "10vh"}}>
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
            
                <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "85vh"}}>
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
             
            <div style={{height: "180vh"}}></div>
            <div style={{marginLeft:"10vw"}}>
              <Fade  triggerOnce={true}>
                {/* <Bounce triggerOnce={true}> */}
                  <SubTitle>3D Modeling and making art</SubTitle>
                {/* </Bounce> */}
              </Fade>
            </div>
            <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "50vw", marginTop: "20vh"}}>
              <DisplayImg src={f9} href="https://twitter.com/luwaidev">

              </DisplayImg>
            </div>

            <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "10vh"}}>
              <DisplayImg src={starship } href="https://twitter.com/luwaidev">

              </DisplayImg>
            </div>
             <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "55vh"}}>
              <DisplayImg src={liminal} href="https://twitter.com/luwaidev">

              </DisplayImg>
            </div>
            <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "50vw", marginTop: "100vh"}}>
              <DisplayImg src={beach} href="https://twitter.com/luwaidev">

              </DisplayImg>
            </div>
<div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "100vh"}}>
              <DisplayImg src={circles} href="https://twitter.com/luwaidev">

              </DisplayImg>
            </div>

            <div style={{height: "180vh"}}></div>
            <div style={{marginLeft:"60vw"}}>
              <JackInTheBox  triggerOnce={true}>
                <Bounce triggerOnce={true}>
                  <SubTitle>and doing hackathons</SubTitle>
                </Bounce>
              </JackInTheBox>
            </div>

               <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "50vw", marginTop: "10vh"}}>
              <Project href="https://devpost.com/software/escapar">
                  <PFrontImg src={escapAR}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>EscapAR</PHeader>
                  <PText>
                    A multiplayer AR escape room <br/> made for Hack Western 9. 
                  </PText>
              </Project>
            </div>
             <div style={{ position: "absolute",width: "40vw", height: "40vw", marginLeft: "6vw", marginTop: "10vh"}}>
              <Project href="https://devpost.com/software/hear-1pibsd">
                  <PFrontImg src={heAR}/>
                  <PBackImg />
                  <PTextBacking/>
                  <PHeader>heAR</PHeader>
                  <PText>
                    An app using AR and NLP to <br/>summarize, translate and analyze <br/>conversations  and lectures made for <br/> Hack the North 2022. 
                  </PText>
              </Project>
            </div>
            <div style={{height: "80vh"}}></div>
          </Section>
        </>
    );
};

// export default Projects;