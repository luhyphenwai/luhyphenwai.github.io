import React from 'react';
import { Slide , Fade} from "react-awesome-reveal"
import { BearImg, NavButton, NavCirc, NavMenuButton } from "./SubStyles"

import bear from "../../Icons/bear.png"

const SideMenu = () => {
    return (
        <NavButton >
            {/* <Fade direction='down' > */}
            {/* </Fade> */}
            <NavCirc>
                
                <BearImg src= {bear}/>
                {/* <NavMenuButton id='nav'>bruh</NavMenuButton> */}
            </NavCirc>
        </NavButton>
    );
};

export default SideMenu;