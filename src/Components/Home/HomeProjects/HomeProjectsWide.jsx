import React from 'react'

import { Icon } from '@iconify/react'
import {AttentionSeeker, Bounce, Fade, Flip, JackInTheBox, Slide, Zoom} from "react-awesome-reveal"

import { BoldSubTitle, SectionLong,   LetterContainer, SubLetter} from '../HomeStyles.js';
import {Project, ProjectColumn, ProjectContainer, ProjectHeaderContainer, ProjectImage, ProjectImageWhite, ProjectLinks,ProjectLink, ProjectTags, ProjectText, ProjectTitle, ProjectTitleLine, ProjectEndText, ProjectEndIcon} from './HomeProjectsStyles.js'

import * as colors from '../../../colors.js'
import * as links from '../../../links.js'



import UnityPathfindingImg from '../../../Images/Screenshots/Unity Pathfinding.png'
import TyperImg from '../../../Images/Screenshots/typer.png'
import OfficeImg from '../../../Images/Screenshots/The Office.jpg'
import SimImg from '../../../Images/Screenshots/SIMULATION.png'
import ReturnImg from '../../../Images/Screenshots/RETURN.gif'
import hijakImg from '../../../Images/Screenshots/hijack.gif'
import necromergerImg from '../../../Images/Screenshots/necromerger.png'
import sortingImg from '../../../Images/Screenshots/sorting.png'
export default function HomeProjectsWide(){

    
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
                  <Project href={links.officeItchLink} target="_blank" rel="noopener noreferrer">
                    <ProjectImage src={OfficeImg} />
                    <ProjectTitle> The Office</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A short horror game made in less than a week for TOJam 2022
                    </ProjectText>

                    <ProjectTags>c#, unity3D, blender</ProjectTags>

                    <ProjectLinks>
                      <ProjectLink href={links.officeGithubLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" color={colors.TEXT} />
                      </ProjectLink>
                      <ProjectLink href={links.officeItchLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>

                </Fade>
                
                <Fade style={{zIndex:0}} duration={800} direction='up' delay={600} triggerOnce={true}>
                  <Project href={links.typerLink}>
                    <ProjectImageWhite src={TyperImg} />
                    <ProjectTitle> Typer</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A typing trainer made with vanilla HTML and JavaScript
                    </ProjectText>

                    <ProjectTags>HTML, JS</ProjectTags>

                    <ProjectLinks>
                      <ProjectLink href={links.typerGithubLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" color={colors.TEXT} />
                      </ProjectLink>
                      <ProjectLink href={links.typerLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:link" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' triggerOnce={true}>
                  <Project href={links.simulationLink} target="_blank" rel="noopener noreferrer">
                    <ProjectImage src={SimImg} />
                    <ProjectTitle> Simulator</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A short first person shooter made in less than a week for 7DFPS 2021
                    </ProjectText>

                    <ProjectTags>c#, unity3D, blender</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href={links.simulationLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                
                <ProjectEndText href={links.githubLink} target="_blank" rel="noopener noreferrer">
                    Check out my github for source code and more projects
                    <ProjectEndIcon href={links.githubLink} target="_blank" rel="noopener noreferrer">
                      <Icon icon="mdi:github"/>
                    </ProjectEndIcon>
                </ProjectEndText>

                  
              </ProjectColumn>

              <ProjectColumn >

                <Fade style={{zIndex:0}} duration={800} direction='up' delay={500}  triggerOnce={true}>
                  <Project href={links.pathfindingLink} target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={UnityPathfindingImg} />
                    <ProjectTitle> Unity Pathfinding</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      An implementation and visualization of pathfinding algorithm in Unity
                    </ProjectText>

                    <ProjectTags>c#, unity2D, algorithms</ProjectTags>

                    <ProjectLinks>
                      <ProjectLink href={links.pathfindingLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:link" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' delay={700} triggerOnce={true}>
                  <Project href={links.hijackLink} target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={sortingImg} />
                    <ProjectTitle> Sorting Visualizer</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A visualization of sorting algorithms made with JavaScript and React
                    </ProjectText>

                    <ProjectTags>React, JS, HTML</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href={links.sortingLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:link" color={colors.TEXT} />
                      </ProjectLink>
                      <ProjectLink href={links.sortingGithubLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' triggerOnce={true}>
                  <Project href={links.returnLink} target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={ReturnImg} />
                    <ProjectTitle> Return</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A 2D platformer made in 15 days for a jam about time.
                    </ProjectText>

                    <ProjectTags>c#, unity2D</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href={links.returnLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                    </ProjectLinks>
                  </Project>
                </Fade>

                <Fade style={{zIndex:0}} duration={800} direction='up' triggerOnce={true}>
                  
                  <Project href={links.necroLink} target="_blank" rel="noopener noreferrer">
                    <ProjectImageWhite src={necromergerImg} />
                    <ProjectTitle> Necromerger</ProjectTitle>
                    <ProjectTitleLine/>

                    <ProjectText>
                      A 2D strategy game made in around one week for Brackeys Game Jam 2021.1
                    </ProjectText>

                    <ProjectTags>c#, unity2D</ProjectTags>

                    <ProjectLinks>

                      <ProjectLink href={links.necroLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="simple-icons:itchdotio" color={colors.TEXT} />
                      </ProjectLink>
                      <ProjectLink href={links.necroGithubLink} target="_blank" rel="noopener noreferrer">
                        <Icon icon="mdi:github" color={colors.TEXT} />
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