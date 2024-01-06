import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import * as colors from '../../colors.js'
import { BoldSubTitle, Project, ProjectColumn, ProjectContainer, ProjectHeaderContainer, ProjectImage, ProjectImageWhite, ProjectLinks,ProjectLink, ProjectTags, ProjectText, ProjectTitle, ProjectTitleLine, SectionLong, ProjectEndText, ProjectEndIcon, Title, SeperationLine, SubTitle, ProjectSubtitle, LetterContainer, SubLetter} from './HomeStyles.js';



import UnityPathfindingImg from '../../Images/Screenshots/Unity Pathfinding.png'
import TyperImg from '../../Images/Screenshots/typer.png'
import OfficeImg from '../../Images/Screenshots/The Office.jpg'
import SimImg from '../../Images/Screenshots/SIMULATION.png'
import ReturnImg from '../../Images/Screenshots/RETURN.gif'
import hijakImg from '../../Images/Screenshots/hijack.gif'
import necromergerImg from '../../Images/Screenshots/necromerger.png'
export default function Projects(){

    
    return (
        <>
          <SectionLong id='projects'>

            <ProjectHeaderContainer>
              <LetterContainer>

                <Fade cascade damping={0.1} duration={800}  style={{zIndex:1}} direction={'up'} triggerOnce={true}>
                  <SubLetter> P </SubLetter>
                  <SubLetter> r </SubLetter>
                  <SubLetter> o </SubLetter>
                  <SubLetter> j </SubLetter>
                  <SubLetter> e </SubLetter>
                  <SubLetter> c </SubLetter>
                  <SubLetter> t </SubLetter>
                  <SubLetter> s </SubLetter>
                </Fade>
              </LetterContainer>
            </ProjectHeaderContainer>

            <ProjectContainer>
              < ProjectColumn >
                <Fade style={{zIndex:0}} duration={800} delay={400}  direction='up' triggerOnce={true}>
                  <Project href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer">
                    <ProjectImage src={OfficeImg} />
                    <ProjectTitle> The Office</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A short horror game made in less than a week for TOJam 2022
                    </ProjectText>

                    <ProjectTags>c#, unity3D, blender</ProjectTags>

                    <ProjectLinks>
                      <ProjectLink href='https://github.com/luwaiwong/TOJam-2022' target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" color={colors.TEXT} />
                      </ProjectLink>
                      <ProjectLink href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>

                </Fade>
                
                <Fade style={{zIndex:0}} duration={800} direction='up' delay={600} triggerOnce={true}>
                  <Project href='https://luwai.dev/HTML/Projects/typer/typer.html'>
                    <ProjectImageWhite src={TyperImg} />
                    <ProjectTitle> Typer</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A typing trainer made with vanilla HTML and JavaScript
                    </ProjectText>

                    <ProjectTags>HTML, JS</ProjectTags>

                    <ProjectLinks>
                      <ProjectLink href='https://github.com/luwaiwong/luwaiwong.github.io' target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" color={colors.TEXT} />
                      </ProjectLink>
                      <ProjectLink href='https://luwai.dev/HTML/Projects/typer/typer.html' target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:link" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' triggerOnce={true}>
                  <Project href='https://luwai.itch.io/simulation' target="_blank" rel="noopener noreferrer">
                    <ProjectImage src={SimImg} />
                    <ProjectTitle> Simulator</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A short first person shooter made in less than a week for 7DFPS 2021
                    </ProjectText>

                    <ProjectTags>c#, unity3D, blender</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href='https://luwai.itch.io/simulation' target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <ProjectEndText href='https://github.com/luwaiwong' target="_blank" rel="noopener noreferrer">
                    Check out my github for source code and more projects
                    <ProjectEndIcon>
                      <Icon icon="mdi:github"/>
                    </ProjectEndIcon>
                  </ProjectEndText>

                  
              </ProjectColumn>

              <ProjectColumn >

                <Fade style={{zIndex:0}} duration={800} direction='up' delay={500}  triggerOnce={true}>
                  <Project href='/HTML/Projects/unity-pathfinding/index.html' target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={UnityPathfindingImg} />
                    <ProjectTitle> Unity Pathfinding</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      An implementation and visualization of pathfinding algorithm in Unity
                    </ProjectText>

                    <ProjectTags>c#, unity2D, algorithms</ProjectTags>

                    <ProjectLinks>
                      <ProjectLink href='/HTML/Projects/unity-pathfinding/index.html' target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:link" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' delay={700} triggerOnce={true}>
                  <Project href='https://luwai.itch.io/Hijack' target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={hijakImg} />
                    <ProjectTitle> Hijack</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A 2D strategy game made in 3 days for Brackeys Game Jam 2022.1
                    </ProjectText>

                    <ProjectTags>c#, unity2D</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href='https://luwai.itch.io/Hijack' target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' triggerOnce={true}>
                  <Project href='https://luwai.itch.io/RETURN' target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={ReturnImg} />
                    <ProjectTitle> Return</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A 2D platformer made in 15 days for a jam about time.
                    </ProjectText>

                    <ProjectTags>c#, unity2D</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href='https://luwai.itch.io/RETURN' target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' triggerOnce={true}>
                  
                  <Project href='https://luwai.itch.io/Necromerger' target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={necromergerImg} />
                    <ProjectTitle> Necromerger</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A 2D strategy game made in around one week for Brackeys Game Jam 2021.1
                    </ProjectText>

                    <ProjectTags>c#, unity2D</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href='https://luwai.itch.io/Necromerger' target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

              </ProjectColumn>

            </ProjectContainer>
          </SectionLong>
        </>
    );
};

// export default Projects;