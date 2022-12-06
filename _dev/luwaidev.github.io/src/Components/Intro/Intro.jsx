import React from 'react'
import {Section, Flexbox,Container, Title, SubTitle, SubTextContainer,LeftSubText, RightSubText, Blob1, Blob2, ABHeader, Letter} from "./IntroStyles.js"
import Links from './Subcomponents/Links.jsx'
import * as colors from '../../colors.js'
import {Bounce, Fade, Slide, Zoom} from "react-awesome-reveal"

// IMAGES/ICONS
import b1 from '../../Icons/Blobs/Ellipse 1.png';
import b2 from '../../Icons/Blobs/Ellipse 2.png';

const style = {
  backgroundColor: colors.DARK_YELLOW,
  zIndex: 2,
  // width: "100vw",
  // height: "30vw",
}
const style1 = {
  // backgroundColor: colors.DARK_YELLOW,
  zIndex: 2,
  width: "100%",
  height: "15vw",
}
const Intro = (props) => (
  <>
  <Links></Links>
    <Section>
      
      
    {/* INTRO SECTION */}
      <Flexbox>
        <Container>
          <Title>
            <Fade>
              <Slide direction='down'>
                <SubTitle> Hi,&nbsp;</SubTitle>
              </Slide>
            </Fade>
            
            <Fade delay={800}>
              <Slide delay={800} direction='down'>
                <SubTitle> I'm</SubTitle>
              </Slide>
            </Fade>
          </Title>
          <Title> 
            <Zoom cascade damping={0.1} duration={800} delay={1300}>
              <Letter> L</Letter>
              <Letter> u</Letter>
              <Letter> -</Letter>
              <Letter> W</Letter>
              <Letter> a</Letter>
              <Letter> i</Letter>
            </Zoom>
          </Title>
        </Container>
      </Flexbox>
      
      <Flexbox>
        <SubTextContainer>
          <LeftSubText>
            <SubTitle>Human Being</SubTitle>
            <SubTitle>Game Developer</SubTitle>
          </LeftSubText>
          <RightSubText>
            <SubTitle>uoft '26</SubTitle>
          </RightSubText>
        </SubTextContainer>
      </Flexbox>
        <Blob1 src={b1}/>
        <Blob2 src={b2}/>
    </Section>
    
    
    {/* <SVGComponent /> */}

    <div style={style1}>

    </div>

    {/* ABOUT ME SECTION */}
    <Section style={style}>
      <ABHeader>
        <SubTitle>I like making cool things with code</SubTitle>
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
