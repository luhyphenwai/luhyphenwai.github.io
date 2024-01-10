import React from 'react';
import { useRef } from 'react';

import { Icon } from '@iconify/react'
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { Fade } from "react-awesome-reveal"

import { SideLinksHorizontal, SideLinkBackgroundHorizontal, SideLinkContainerHorizontal} from "./LinksStyles.js"
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
export default function LinksTall(){
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["200px", "0px"]
    });
    const y = useTransform(useSpring(scrollYProgress), latest => getMax(latest/4 + 0.75))
    // const y = 1

    return (
        <>
            <SideLinkContainerHorizontal as={motion.div} >
                <SideLinkBackgroundHorizontal as={motion.div} style={{ scale: y}}>
                    <Fade direction='up' duration={1000} delay={0} dampen={0.1} cascade triggerOnce>
                        <a href={links.itchLink} target="_blank" rel="noopener noreferrer">
                            <SideLinksHorizontal as={motion.div}  href={links.itchLink}>
                                <Icon icon="simple-icons:itchdotio" color={colors.TEXT} /> 
                            </SideLinksHorizontal>
                        </a>
                        <a href={links.twitterLink} target="_blank" rel="noopener noreferrer">
                            <SideLinksHorizontal as={motion.div}  href={links.twitterLink}>
                                <Icon icon="akar-icons:x-fill" color={colors.TEXT}  />
                            </SideLinksHorizontal> 
                        </a>
                        
                        <a href={links.githubLink} target="_blank" rel="noopener noreferrer">
                            <SideLinksHorizontal as={motion.div}  href={links.githubLink}>
                                <Icon icon="mdi:github" color={colors.TEXT}  />
                            </SideLinksHorizontal>
                        </a>
                        
                        <a href={links.instagramLink} target="_blank" rel="noopener noreferrer">
                            <SideLinksHorizontal as={motion.div}  href={links.instagramLink}>
                                <Icon icon="ri:instagram-line" color={colors.TEXT} />
                            </SideLinksHorizontal>
                        </a>
                        
                        <a href={links.linkedinLink} target="_blank" rel="noopener noreferrer">
                                
                            <SideLinksHorizontal as={motion.div} href={links.linkedinLink}>
                                <Icon icon="mdi:linkedin" color={colors.TEXT} />    
                            </SideLinksHorizontal>
                        </a>
                    </Fade>
                    
                </SideLinkBackgroundHorizontal>
            </SideLinkContainerHorizontal>
             <div ref={ref} style={{position: "absolute", marginTop: "200px"}}>
                
            </div>
            
        </>
    );
}
