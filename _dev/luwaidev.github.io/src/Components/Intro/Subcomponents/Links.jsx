import React from 'react';
import { Icon } from '@iconify/react'
import {IconLinks, IconContainer, IconBackground} from "../IntroStyles.js"
import * as colors from '../../../colors.js'

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
    return (
        <div>
            <IconContainer as={motion.div} >
                <IconBackground as={motion.div} style={{ scale: y }}>
                    <Fade direction='down' duration={600} delay={2200} dampen={0.1} cascade triggerOnce>
                        <IconLinks as={motion.div}  href="https://luwaidev.itch.io/">
                            <Icon icon="simple-icons:itchdotio" color={colors.DARK_BLUE} /> 
                        </IconLinks>
                        <IconLinks as={motion.div}  href='https://twitter.com/luwaidev'>
                            <Icon icon="ri:twitter-fill" color={colors.DARK_BLUE}  />
                        </IconLinks>
                        <IconLinks as={motion.div}  href='https://github.com'>
                            <Icon icon="mdi:github" color={colors.DARK_BLUE}  />
                        </IconLinks>
                        
                        <IconLinks as={motion.div}  href='https://www.instagram.com/luwaidev/'>
                            <Icon icon="ri:instagram-line" color={colors.DARK_BLUE} />
                        </IconLinks>
                        
                        <IconLinks as={motion.div} href='https://www.linkedin.com/in/lu-wai-wong-27a2661b7/'>
                            <Icon icon="mdi:linkedin" color={colors.DARK_BLUE} />    
                        </IconLinks>
                    </Fade>
                    
                </IconBackground>
            </IconContainer>
             <div ref={ref} style={{position: "absolute", marginTop: "200px"}}>
                {/* <figure className="progress">
                <svg id="progress" width="75" height="75" viewBox="0 0 100 100">
                    <circle cx="50" cy="50" r="30" pathLength="1" className="bg" />
                    <motion.circle
                    cx="50"
                    cy="50"
                    r="30"
                    pathLength="1"
                    className="indicator"
                    style={{ pathLength: scrollYProgress }}
                    />
                </svg>
                </figure> */}
            </div>
            
        </div>
    );
}

// export default Links;