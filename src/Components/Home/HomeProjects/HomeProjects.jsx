import React from 'react'
import { useMediaQuery } from 'react-responsive'

import HomeProjectsWide from './HomeProjectsWide';
import HomeProjectsTall from './HomeProjectsTall';

export default function HomeProjects (){
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
  const isTall = isTabletOrMobile && isPortrait
  return (<> 
    {!isTall && <HomeProjectsWide/>} 
    {isTall && <HomeProjectsTall/>} 
  
  </>)
};