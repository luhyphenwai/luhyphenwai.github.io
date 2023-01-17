import React from 'react'
import {Section, Flexbox,Container, Title, SubTitle, SubTextContainer,LeftSubText, RightSubText, Blob1, Blob2, ABHeader, Letter, TextSection, ArrowDown} from "./IntroStyles.js"
import * as colors from '../../colors.js'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

const Splash = (props) => (
  <>
    <Section>
      
    {/* INTRO SECTION */}
      <Flexbox>
        <Container>
          <Title>
            <Fade style={{zIndex:0}}>
              <Slide direction='down'>
                <SubTitle> Hi, &nbsp;</SubTitle>
              </Slide>
            </Fade>
            
            <Fade delay={800} style={{zIndex:0}}>
              <Slide delay={800} direction='down' >
                <SubTitle> I'm</SubTitle>
              </Slide>
            </Fade>
          </Title>
          <Title> 
            <Zoom cascade damping={0.1} duration={800} delay={1300} style={{zIndex:1}}>
              <Letter> L</Letter>
              <Letter> u</Letter>
              <Letter> -</Letter>
              <Letter> W</Letter>
              <Letter> a</Letter>
              <Letter> i</Letter>
            </Zoom>
          </Title>
          <SubTextContainer>
            <LeftSubText>
              <Fade delay={2000} direction='down'>
                  <SubTitle>Student</SubTitle>
              </Fade>
              
              <Fade delay={2750}direction='down'>
                  <SubTitle>Developer</SubTitle>
              </Fade>
            </LeftSubText>
            <RightSubText>
              <AttentionSeeker effect="rubberBand" delay={5000} style={{zIndex:0}}>
              <Fade delay={2000} direction='down'>
                  <SubTitle>uoft '26</SubTitle>
              </Fade>
              </AttentionSeeker>
            </RightSubText>
          </SubTextContainer>
            <Flexbox style={{position:'absolute', width: "62vw"}}>
              <Fade direction='down' delay={3500} duration={1000}>
                  <ArrowDown>
                    <Icon icon="material-symbols:arrow-downward-rounded" color={colors.DARK_BLUE} /> 
                  </ArrowDown>
              </Fade>
            </Flexbox>
          
        </Container>
      </Flexbox>
      
    </Section>
  </>
);

export default Splash;
