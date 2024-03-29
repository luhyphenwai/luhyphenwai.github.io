import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { ArrowDownHeight} from "../../Home/HomeStyles.js"
import {AboutTextVertical, AboutImageVertical, AboutTextContainerVertical, AboutImageContainerVertical, AboutContainerVertical, AboutArrowContainerVertical} from './PlatformInfoStyles.js'

import * as colors from '../../../colors.js'

import meImg from '../../../Images/me but cropped.jpg'

const AboutTall = (props) => (
  <>
    <AboutContainerVertical id='about'>
        <AboutTextContainerVertical>
            <Fade direction='left' delay={0} duration={1200} triggerOnce={true}>
                    <AboutTextVertical>
Howdy, I’m Lu-Wai Wong, and I’m running for CSSU President!

                    </AboutTextVertical>
                </Fade>

                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutTextVertical>
I’m a CS student that wants to give you events you want, and boost your career first and foremost. <br/> Quick example -- I’ve founded a game development club in the past, teaching students how to make games, and joining game jams together!
                    </AboutTextVertical>
                </Fade>
                <Fade direction='left' delay={600} duration={1200} triggerOnce={true}>
                    <AboutTextVertical>
                      If I’m elected, my goals are to focus on: <br/>
                         - Socials that people will LOVE (lan tournaments anyone???, free food???) <br/>
                         - Events that will help YOU as a CS student EXPAND YOUR PORTFOLIOS, teaching you about web dev, game dev, AI, and everything that we’re all interested in. <br/>
                         - Hosting networking and career focused events to help us all get jobs (the job market is tough rn 😭) <br/>
                         - And anything else you’re all interested in! I want to focus on listening to YOUR input and giving you events you’d actually use in your career!
                    </AboutTextVertical>
                </Fade>
        </AboutTextContainerVertical>

        <Fade direction='right' delay={1200} duration={1200} triggerOnce={true}>
            <AboutImageContainerVertical>
            <AboutImageVertical src={meImg}/>
            </AboutImageContainerVertical>                
        </Fade>

        <AboutArrowContainerVertical href="#projects">
            <Fade direction='down' delay={100} duration={1000} triggerOnce={true}>
                <ArrowDownHeight>
                <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
                </ArrowDownHeight>
            </Fade>
        </AboutArrowContainerVertical>
    </AboutContainerVertical>
            
  </>
);

export default AboutTall;