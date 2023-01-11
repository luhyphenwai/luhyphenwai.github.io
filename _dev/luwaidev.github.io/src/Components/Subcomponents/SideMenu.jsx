import React from 'react';
import { Slide , Fade} from "react-awesome-reveal"
import { BearImg, NavContainer, NavCirc, NavMenuButton, MailButton, MenuContainer, MenuButton } from "./SubStyles"
import { Icon } from '@iconify/react'

import * as colors from '../../colors.js'
import bear from "../../Icons/bear.png"

import { Outlet, Link } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';

export default function SideMenu (){
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(!show);
        console.log(show);
        

        if (!show) disableBodyScroll(document.querySelector('body'));
        else enableBodyScroll(document.querySelector('body'));

    };
    return (
        <NavContainer OnClick={() => handleClick()} >
            <NavCirc selected={show}/>
            <BearImg onClick={ () => handleClick()} src= {bear}/>

            <MenuContainer selected={show}>
                {/* <Link to="/"> */}
                    <MenuButton href="/" selected={show}>
                    {/* <Icon style={{fontSize:"8vw"}}icon="material-symbols:home" color={colors.DARK_BLUE}></Icon> */}
                    Home
                    </MenuButton>
                {/* </Link> */}
                
                {/* <Link to="/Projects"> */}
                    <MenuButton href="/Projects"selected={show}>
                    {/* <Icon style={{fontSize:"8vw"}}icon="material-symbols:home" color={colors.DARK_BLUE}></Icon> */}
                    Projects
                    </MenuButton>
                {/* </Link> */}
                
            </MenuContainer>

            <MailButton selected={show}>Contact Me!</MailButton>
        </NavContainer>
        
    );
};

// export default SideMenu;