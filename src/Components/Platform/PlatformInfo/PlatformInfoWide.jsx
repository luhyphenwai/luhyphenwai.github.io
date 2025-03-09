import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { SectionCentered,  ArrowDown} from "../../Home/HomeStyles.js"
import {AboutText, AboutImage, AboutTextContainer, AboutImageContainer} from './PlatformInfoStyles.js'

import { LandingArrowContainer } from '../../Home/Landing Page/LandingStyles.js'
import * as colors from '../../../colors.js'

import meImg from '../../../Images/me.jpg'

const AboutWide = (props) => (
  <>
    <SectionCentered id='about'>
            <AboutTextContainer>
                <Fade direction='left' delay={0} duration={1200} triggerOnce={true}>
                    <AboutText>
Howdy, I’m Lu-Wai Wong, and I’m runfsdfsdning for CSSU President!

                    </AboutText>
                </Fade>

                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutText>
I’m a CS student that wants to give you events you want, and boost your career first and foremost. <br/> Quick example -- I’ve founded a game development club in the past, teaching students how to make games, and joining game jams together!
                    </AboutText>
                </Fade>
                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutText>
                      If I’m elected, my goals are to focus on: <br/>
                         - Socials that people will LOVE (lan tournaments anyone???, free food???) <br/>
                         - Events that will help YOU as a CS student EXPAND YOUR PORTFOLIOS, teaching you about web dev, game dev, AI, and everything that we’re all interested in. <br/>
                         - Hosting networking and career focused events to help us all get jobs (the job market is tough rn 😭) <br/>
                         - And anything else you’re all interested in! I want to focus on listening to YOUR input and giving you events you’d actually use in your career!
                    </AboutText>
                </Fade>
                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutText>
                      Qualifications
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
