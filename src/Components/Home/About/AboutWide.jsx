import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { SectionCentered,  ArrowDown} from "../HomeStyles.js"
import {AboutText, AboutImage, AboutTextContainer, AboutImageContainer} from './AboutStyles.js'

import { LandingArrowContainer } from '../Landing Page/LandingStyles.js'
import * as colors from '../../../colors.js'

import meImg from '../../../Images/me but cropped.jpg'

const AboutWide = (props) => (
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
                        I build things with code and develop games in my spare time, I'm very interested in VR and AR, and I'm always looking for new projects to work on. 
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

export default AboutWide;