import React from 'react'
import { Icon } from '@iconify/react'
import {Section, Flexbox,Container, Title, SubTitle, SubTextContainer,LeftSubText, RightSubText, Blob1, Blob2, ABHeader} from "./IntroStyles.js"
import Links from './Subcomponents/Links.jsx'
import * as colors from '../../colors.js'
import SVGComponent from './blob.js'

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
          <SubTitle> Hi, I'm,</SubTitle>
          <Title> Lu-Wai</Title>
        </Container>
      </Flexbox>
      
      <Flexbox>
        <SubTextContainer>
          <LeftSubText>
            <SubTitle>Game Developer</SubTitle>
            <SubTitle>Coding Savant</SubTitle>
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
  </>
);

export default Intro;
