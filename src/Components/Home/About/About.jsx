import React from 'react'
import { useMediaQuery } from 'react-responsive'

import AboutWide from './AboutWide';
import AboutTall from './AboutTall';

const About = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isTall = isTabletOrMobile && isPortrait
  return <> 
    {!isTall && <AboutWide/>} 
    {isTall && <AboutTall/>} 
  
  </>
};

export default About;
