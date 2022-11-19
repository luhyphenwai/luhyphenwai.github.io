import React from 'react'
import {Flexbox,Container, LeftSection, RightSection, Title, SubTitle, Text, ImageContainer, Image} from "./IntroStyles.js"

const Intro = (props) => (
  <>
    <Flexbox>
      <Container>
        <LeftSection>
          <SubTitle> Hey there, I'm</SubTitle>
          <Title> Lu-Wai Wong</Title>
          {/* <Text> I make games, 3D model, develop websites, and so much more.</Text> */}
        </LeftSection>
      </Container>

      <Container>
        <RightSection>
          <ImageContainer>
            {/* <Image src={require('../../Images/Hands.png')} alt="Hand 3D model"/> */}
          </ImageContainer>
        </RightSection>
      </Container>
      
    </Flexbox>
  </>
);

export default Intro;
