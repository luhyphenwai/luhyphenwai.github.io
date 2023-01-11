import React from 'react';
import { Slide , Fade} from "react-awesome-reveal"
import { BearImg, NavContainer, NavCirc, NavMenuButton, NavButton } from "./SubStyles"

import bear from "../../Icons/bear.png"

export default function SideMenu (){
    const [show, setShow] = React.useState(false);

    const handleClick = () => {
        setShow(!show);
        console.log(show);
    };
    return (
        <NavContainer OnClick={() => handleClick()} >
            {/* <NavButton  onClick={ () => handleClick()}>

            </NavButton> */}
            <NavCirc selected={show}/>
            <BearImg onClick={ () => handleClick()} src= {bear}/>
            {/* <button onClick={() => handleClick()} style={{position: 'fixed', top:'100px'}}>bruh</button> */}
        </NavContainer>
        
    );
};

// export default SideMenu;