import React from 'react'
import { useRef } from 'react';


import {Section,SubTitle, ABHeader,  TextSection, Project, PFrontImg, PBackImg} from "./IntroStyles.js"
import * as colors from '../../colors.js'

import {Bounce, Fade, Flip, JackInTheBox} from "react-awesome-reveal"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

import UnityPathfindingImg from '../../Images/Screenshots/Unity Pathfinding.png'

function getMax(num){
    if (num > 1){
        return 1;
    }
    else{
        return num;
    }
}

export default function Projects(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["200px", "0px"]
    });
    const y = useTransform(useSpring(scrollYProgress), latest => getMax(latest/4 + 0.75))

    
    return (
        <>
        <div ref={ref} style={{position: "absolute", marginTop: "200px"}}></div>
          <Section >
            <ABHeader as={motion.div} style={{top:scrollYProgress}}>
              <TextSection >
                {/* <Fade direction='left'> */}
                <SubTitle>I like making cool things with&nbsp;</SubTitle>
                {/* </Fade> */}
                <JackInTheBox delay={1000}>
                  <Bounce delay={1000}>
                    <SubTitle style={{color: colors.RED}}> code </SubTitle>
                  </Bounce>
                </JackInTheBox>
              </TextSection>
            </ABHeader>

            <Project>
                <PFrontImg />
                <PBackImg src={UnityPathfindingImg}/>
            </Project>


            <SubTitle>making games</SubTitle>
            <SubTitle>3D Modeling and making art</SubTitle>
            
            <SubTitle>and doing hackathons</SubTitle>
          </Section>
        </>
    );
};

// export default Projects;