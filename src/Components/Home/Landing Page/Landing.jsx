import React from 'react'
import { useMediaQuery } from 'react-responsive'

import LandingWide from './LandingWide';
import LandingTall from './LandingTall';

const Landing = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)'
  })
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    
  return <> 
    {isDesktopOrLaptop && <LandingWide/>} 
    {isTabletOrMobile && <LandingTall/>} 
  
  </>
};

export default Landing;