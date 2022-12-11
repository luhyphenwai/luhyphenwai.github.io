import React from 'react'
import {Section, Flexbox,Container, Title, SubTitle, SubTextContainer,LeftSubText, RightSubText, Blob1, Blob2, ABHeader, Letter, TextSection} from "./IntroStyles.js"
import Links from './Subcomponents/Links.jsx'
import * as colors from '../../colors.js'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

// IMAGES/ICONS
import b1 from '../../Icons/Blobs/Ellipse 1.png';
import b2 from '../../Icons/Blobs/Ellipse 2.png';

const style = {
  backgroundColor: colors.DARK_YELLOW,
  zIndex: 10,
  // width: "100vw",
  // height: "30vw",
}
const Intro = (props) => (
  <>
  <Links></Links>
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
        </Container>
      </Flexbox>
      
      <Flexbox>
      </Flexbox>
      
    
    </Section>
    
      <Blob1 style={{zIndex:-1}} src={b1} /> 
      <Blob2 style={{zIndex:-21}} src={b2} />
    
    {/* <SVGComponent /> */}
    <div style={{height: "15vh"}}></div>
    {/* ABOUT ME SECTION */}
    <Section style={style}>
      <ABHeader>
        <TextSection>
          <Fade direction='down'>
           <SubTitle>I like making cool things with&nbsp;</SubTitle>
          </Fade>
          <JackInTheBox delay={1000}>
            <Bounce delay={1000}>
              <SubTitle style={{color: colors.RED}}> code </SubTitle>
            </Bounce>
          </JackInTheBox>
        </TextSection>


        <SubTitle>making games</SubTitle>
        <SubTitle>3D Modeling and making art</SubTitle>
        
        <SubTitle>and doing hackathons</SubTitle>
      </ABHeader>
    </Section>

    {/* CURRENT SKILLS AND INTERESTS */}
    <Section style={style}>
      <ABHeader>
        <SubTitle>I know how to use these </SubTitle>
        <SubTitle>But right now I'm really interested in </SubTitle>
        <SubTitle>3D Modeling and making art</SubTitle>
      </ABHeader>
    </Section>
  </>
);

export default Intro;
