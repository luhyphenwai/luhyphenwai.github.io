import React from 'react'
import { Icon } from '@iconify/react'
import {Flexbox,Container, LeftSection, RightSection, Title, SubTitle, Text, ImageContainer, Image} from "./IntroStyles.js"
import * as colors from '../../colors.js'

const Intro = (props) => (
  <>
    <Flexbox>
      <Container>
        <LeftSection>
          <Icon icon="mdi-light:home" color={colors.DARK_BLUE} />
          <SubTitle> Hey there, I'm</SubTitle>
          <Title> Lu-Wai Wong</Title>
          {/* <Text> I make games, 3D model, develop websites, and so much more.</Text> */}
        </LeftSection>
      </Container>

      <Container>
        <RightSection>
          <ImageContainer>
            <Image src={require('../../Icons/Blobs/blob.svg')} alt="blob"/>
          </ImageContainer>
        </RightSection>
      </Container>
      
    </Flexbox>
  </>
);

export default Intro;
