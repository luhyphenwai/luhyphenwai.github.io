import React from 'react';
import { useMediaQuery } from 'react-responsive'
import SideMenuTall from './SideMenuTall.jsx';
import SideMenuWide from './SideMenuWide.jsx';

const size = "3vw";
const hoverSize = "3vw";
const iconStyle = {
    fontSize: size,
    "&:hover": {
        fontSize: hoverSize,
    },
}

export default function Links(){

    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isTall = isTabletOrMobile && isPortrait
    return (
        <>
            {!isTall && <SideMenuWide/>}
            {isTall && <SideMenuTall/>}
        </>

    );
}