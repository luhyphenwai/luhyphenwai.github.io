import React from 'react'
import {Section, Flexbox, Title, SubTitle,LeftLandingSubText, RightLandingSubText,  Letter,  ArrowDown, BoldSubTitle, IntroSubheaderContainer, LandingArrowContainer, NameContainer, FirstNameContainer, LastNameContainer, SectionCentered, AboutText} from "./HomeStyles.js"
import * as colors from '../../colors.js'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

const About = (props) => (
  <>
    <SectionCentered>
     <AboutText>I'm Lu-Wai, I'm currently studying mathematics and statistics at the University Of Toronto, on track to graduate in 2026. <br/> <br/>I build web apps and games in my spare time, and I'm interested in working on AI/Machine Learning as well as VR and AR</AboutText>
    </SectionCentered>
  </>
);

export default About;
