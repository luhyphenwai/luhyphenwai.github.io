import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { SectionCentered, AboutText, AboutImage, AboutTextContainer, AboutImageContainer, ArrowDown} from "./HomeStyles.js"
import { LandingArrowContainer } from './Landing Page/LandingStyles.js'
import * as colors from '../../colors.js'

import meImg from '../../Images/me but cropped.jpg'

const About = (props) => (
  <>
    <SectionCentered id='about'>
            <AboutTextContainer>
                <Fade direction='left' delay={0} duration={1200} triggerOnce={true}>
                    <AboutText>
                        I'm Lu-Wai, I'm currently studying mathematics and statistics at the University Of Toronto, on track to graduate in 2026. 
                    </AboutText>
                </Fade>

                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutText>
                        I build web apps and games in my spare time, and I'm interested in working on AI/Machine Learning as well as VR and AR
                    </AboutText>
                </Fade>
            </AboutTextContainer>

            <Fade direction='right' delay={1200} duration={1200} triggerOnce={true}>
              <AboutImageContainer>
                <AboutImage src={meImg}/>
              </AboutImageContainer>                
            </Fade>

      <LandingArrowContainer href="#projects">
        <Fade direction='down' delay={100} duration={1000} triggerOnce={true}>
            <ArrowDown>
              <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
            </ArrowDown>
        </Fade>
      </LandingArrowContainer>
    </SectionCentered>
  </>
);

export default About;
