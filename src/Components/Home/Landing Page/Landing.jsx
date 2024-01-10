import React from 'react'
import { useMediaQuery } from 'react-responsive'

import LandingWide from './LandingWide';
import LandingTall from './LandingTall';

const Landing = (props) => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isTall = isTabletOrMobile && isPortrait
  return <> 
    {!isTall && <LandingWide/>} 
    {isTall && <LandingTall/>} 
  
  </>
};

export default Landing;