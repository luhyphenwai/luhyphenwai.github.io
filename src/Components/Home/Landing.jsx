import React from 'react'
import {Section, Flexbox, Title, SubTitle,LeftLandingSubText, RightLandingSubText,  Letter,  ArrowDown, BoldSubTitle, IntroSubheaderContainer, LandingArrowContainer, NameContainer, FirstNameContainer, LastNameContainer} from "./HomeStyles.js"
import * as colors from '../../colors.js'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

const Landing = (props) => (
  <>
    <Section>
      
      {/* INTRO SECTION */}
      <IntroSubheaderContainer>
          <Fade style={{zIndex:0}}>
              <Slide direction='down'>
                <BoldSubTitle> Hi, &nbsp;</BoldSubTitle>
              </Slide>
            </Fade>
            
            <Fade delay={800} style={{zIndex:0}}>
              <Slide delay={800} direction='down' >
                <BoldSubTitle> I'm</BoldSubTitle>
              </Slide>
            </Fade>
      </IntroSubheaderContainer>
      <NameContainer>
        <FirstNameContainer> 
          <Fade cascade damping={0.1} duration={800} delay={1500} style={{zIndex:1}} direction={'up'} >
            <Letter> L</Letter>
            <Letter> u</Letter>
            <Letter> -</Letter>
            <Letter> W</Letter>
            <Letter> a</Letter>
            <Letter> i</Letter>
          </Fade>
        </FirstNameContainer>
        <LastNameContainer> 
          <Fade cascade damping={0.1} duration={800} delay={2500} style={{zIndex:1}} direction={'up'}>
            <Letter> W</Letter>
            <Letter> o</Letter>
            <Letter> n</Letter>
            <Letter> g</Letter>
          </Fade>
        </LastNameContainer>
      </NameContainer>


      <LeftLandingSubText>
        <Fade delay={4000} direction='down'>
            <SubTitle>Stats & CS</SubTitle>
        </Fade>
        
        <Fade delay={4800}direction='down'>
            <SubTitle>Developer</SubTitle>
        </Fade>
      </LeftLandingSubText>

      <RightLandingSubText>
        <AttentionSeeker effect="rubberBand" delay={7000} style={{zIndex:0}}>
        <Fade delay={5600} direction='down'>
            <SubTitle>uoft '26</SubTitle>
        </Fade>
        </AttentionSeeker>
      </RightLandingSubText>
      
      <LandingArrowContainer href="#Section2">
        <Fade direction='down' delay={6400} duration={1000}>
            <ArrowDown>
              <Icon icon="mdi:arrow-down" color={colors.TEXT} /> 
            </ArrowDown>
        </Fade>
      </LandingArrowContainer>
    </Section>
  </>
);

export default Landing;
