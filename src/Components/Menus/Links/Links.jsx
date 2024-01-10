import React from 'react';
import { useMediaQuery } from 'react-responsive'
import LinksWide from './LinksWide.jsx';

const size = "3vw";
const hoverSize = "3vw";
const iconStyle = {
    fontSize: size,
    "&:hover": {
        fontSize: hoverSize,
    },
}
export default function Links(){

    return (
        <LinksWide/>
    );
}
