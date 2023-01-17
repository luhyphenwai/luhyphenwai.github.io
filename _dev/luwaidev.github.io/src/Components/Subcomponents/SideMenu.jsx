import React from 'react';
import { Slide , Fade} from "react-awesome-reveal"
import { BearImg, NavContainer, NavCirc, NavMenuButton, MailButton, MenuContainer, MenuButton } from "./SubStyles"
import { Icon } from '@iconify/react'

import * as colors from '../../colors.js'
import bear from "../../Icons/bear.png"

import { Outlet, Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

async function handleClick(showMenu,setShowMenu, showObj, setShowObj){

    if (!showMenu) disableBodyScroll(document.querySelector('body'));
    else enableBodyScroll(document.querySelector('body'));
    if (!showMenu){
        setShowMenu(true);
        await new Promise(resolve => setTimeout(resolve, 600));
        setShowObj(true);
    }   else {
        setShowObj(false);
        await new Promise(resolve => setTimeout(resolve, 600));
        setShowMenu(false);
    }
    // setShow(!show);
    // console.log(show);
    
    
    await new Promise(resolve => setTimeout(resolve, 1000));
}
export default function SideMenu (){
    const [showMenu, setShowMenu] = React.useState(false);
    const [showObj, setShowObj] = React.useState(false);

    // const handleClick = () => {
    //     setShow(!show);
    //     console.log(show);
        

    //     if (!show) disableBodyScroll(document.querySelector('body'));
    //     else enableBodyScroll(document.querySelector('body'));

    // };
    return (
        <NavContainer OnClick={() => handleClick(showMenu, setShowMenu, showObj, setShowObj)} >
            <NavCirc selected={showMenu}/>
            <BearImg onClick={ () =>handleClick(showMenu, setShowMenu, showObj, setShowObj)} src= {bear}/>

            <MenuContainer selected={showObj}>
                {/* <Link to="/"> */}
                    <MenuButton href="/" selected={showObj}>
                    {/* <Icon style={{fontSize:"8vw"}}icon="material-symbols:home" color={colors.DARK_BLUE}></Icon> */}
                    Home
                    </MenuButton>
                {/* </Link> */}
                
                {/* <Link to="/Projects"> */}
                    <MenuButton href="/Projects"selected={showObj}>
                    {/* <Icon style={{fontSize:"8vw"}}icon="material-symbols:home" color={colors.DARK_BLUE}></Icon> */}
                    Projects
                    </MenuButton>
                {/* </Link> */}
                
            </MenuContainer>

            <MailButton selected={showObj}>Contact Me!</MailButton>
        </NavContainer>
        
    );
};

// export default SideMenu;