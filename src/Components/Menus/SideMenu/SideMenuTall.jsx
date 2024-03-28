import React, { useRef } from 'react';
import { Outlet, Link } from "react-router-dom";

import { Slide , Fade} from "react-awesome-reveal"
import { motion, useScroll, useSpring, useTransform} from "framer-motion";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

import { Icon } from '@iconify/react'

import { MenuBackground, MenuButtonVertical, MenuButtonContainerVertical, SideMenuButtonVertical } from "./SubStyles.js"


import * as colors from '../../../colors.js'




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
async function handleClick(showMenu,setShowMenu, showObj, setShowObj){

    if (!showMenu) disableBodyScroll(document.querySelector('body'));
    else enableBodyScroll(document.querySelector('body'));
    if (!showMenu){
        setShowMenu(true);
        await new Promise(resolve => setTimeout(resolve, 600));
        setShowObj(true);
    }   else {
        setShowObj(false);
        await new Promise(resolve => setTimeout(resolve, 400));
        setShowMenu(false);
    }
    // setShow(!show);
    // console.log(show);
    
    
    await new Promise(resolve => setTimeout(resolve, 1000));
}
export default function SideMenu (){
    const [showMenu, setShowMenu] = React.useState(false);
    const [showObj, setShowObj] = React.useState(false);


    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["500px", "200px"]
    });
    const y = useTransform(useSpring(scrollYProgress), latest => getMax(latest/4 + 0.75))

    return (
        <>
            {/* Hamburguer Menu Button */}
            <SideMenuButtonVertical as={motion.div} onClick={() => handleClick(showMenu, setShowMenu, showObj, setShowObj)} style={{scale:y}}>
                <Fade delay={5000}>
                    <Icon icon="mdi:menu" /> 
                </Fade>
            </SideMenuButtonVertical>   
            
            <MenuBackground visible={showMenu}>
                <MenuButtonContainerVertical visible={showObj}>
                    <MenuButtonVertical visible={showObj} href={"www.luwai.dev"}>Home</MenuButtonVertical>
                </MenuButtonContainerVertical>
            </MenuBackground>
        </>
        
    );
};
