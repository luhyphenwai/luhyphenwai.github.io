import React from 'react';
import { Icon } from '@iconify/react'
import { SideLinks, SideLinkBackground, SideLinkContainer} from "./SubStyles"
import * as colors from '../../colors.js'

import { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform} from "framer-motion";

import { Fade } from "react-awesome-reveal"

const size = "3vw";
const hoverSize = "3vw";
const iconStyle = {
    fontSize: size,
    "&:hover": {
        fontSize: hoverSize,
    },
}
function getMax(num){
    if (num > 1){
        return 1;
    }
    else{
        return num;
    }
}
export default function Links(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["200px", "0px"]
    });
    const y = useTransform(useSpring(scrollYProgress), latest => getMax(latest/4 + 0.75))
    // const y = 1

    return (
        <div>
            <SideLinkContainer as={motion.div} >
                <SideLinkBackground as={motion.div} style={{ scale: y}}>
                    <Fade direction='right' duration={1000} delay={4000} dampen={0.1} cascade triggerOnce>
                        <a href="https://luwai.itch.io/" target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href="https://luwai.itch.io/">
                                <Icon icon="simple-icons:itchdotio" color={colors.TEXT} /> 
                            </SideLinks>
                        </a>
                        <a href="https://twitter.com/luwaidev" target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href='https://twitter.com/luwaidev'>
                                <Icon icon="akar-icons:x-fill" color={colors.TEXT}  />
                            </SideLinks> 
                        </a>
                        
                        <a href="https://github.com/luwaiwong" target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href='https://github.com'>
                                <Icon icon="mdi:github" color={colors.TEXT}  />
                            </SideLinks>
                        </a>
                        
                        <a href="https://www.instagram.com/luwaidev/" target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href='https://www.instagram.com/luwaidev/'>
                                <Icon icon="ri:instagram-line" color={colors.TEXT} />
                            </SideLinks>
                        </a>
                        
                        <a href="https://www.linkedin.com/in/luwai/" target="_blank" rel="noopener noreferrer">
                                
                            <SideLinks as={motion.div} href='https://www.linkedin.com/in/luwai/'>
                                <Icon icon="mdi:linkedin" color={colors.TEXT} />    
                            </SideLinks>
                        </a>
                    </Fade>
                    
                </SideLinkBackground>
            </SideLinkContainer>
             <div ref={ref} style={{position: "absolute", marginTop: "200px"}}>
                
            </div>
            
        </div>
    );
}
