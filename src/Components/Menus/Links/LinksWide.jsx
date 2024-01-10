import React from 'react';
import { useRef } from 'react';

import { Icon } from '@iconify/react'
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { Fade } from "react-awesome-reveal"

import { SideLinks, SideLinkBackground, SideLinkContainer} from "../SubStyles.js"
import * as colors from '../../../colors.js'
import * as links from '../../../links.js'



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
export default function LinksWide(){
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
                        <a href={links.itchLink} target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href={links.itchLink}>
                                <Icon icon="simple-icons:itchdotio" color={colors.TEXT} /> 
                            </SideLinks>
                        </a>
                        <a href={links.twitterLink} target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href={links.twitterLink}>
                                <Icon icon="akar-icons:x-fill" color={colors.TEXT}  />
                            </SideLinks> 
                        </a>
                        
                        <a href={links.githubLink} target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href={links.githubLink}>
                                <Icon icon="mdi:github" color={colors.TEXT}  />
                            </SideLinks>
                        </a>
                        
                        <a href={links.instagramLink} target="_blank" rel="noopener noreferrer">
                            <SideLinks as={motion.div}  href={links.instagramLink}>
                                <Icon icon="ri:instagram-line" color={colors.TEXT} />
                            </SideLinks>
                        </a>
                        
                        <a href={links.linkedinLink} target="_blank" rel="noopener noreferrer">
                                
                            <SideLinks as={motion.div} href={links.linkedinLink}>
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
