import React from 'react'


import * as colors from '../../colors.js'

import {Bounce, Fade, Flip, JackInTheBox, Zoom} from "react-awesome-reveal"

import UnityPathfindingImg from '../../Images/Screenshots/Unity Pathfinding.png'
import TyperImg from '../../Images/Screenshots/typer.png'
import OfficeImg from '../../Images/Screenshots/The Office.jpg'
import SimImg from '../../Images/Screenshots/SIMULATION.png'
import ReturnImg from '../../Images/Screenshots/RETURN.gif'
import hijakImg from '../../Images/Screenshots/hijack.gif'

import { BoldSubTitle, Project, ProjectColumn, ProjectContainer, ProjectHeaderContainer, ProjectImage, ProjectText, ProjectTitle, SectionLong} from './HomeStyles.js';


export default function Projects(){

    
    return (
        <>
          <SectionLong id='1'>

            <ProjectHeaderContainer>
              <BoldSubTitle>Projects</BoldSubTitle>

            </ProjectHeaderContainer>

            {/* <Project >
              <ProjectImage src={OfficeImg} />
            </Project> */}
            <ProjectContainer>
              < ProjectColumn >
                <Project href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer">
                  <ProjectImage src={OfficeImg} />
                  <ProjectTitle> The Office</ProjectTitle>
                  <ProjectText>A short horror game made in less than a week for TOJam 2022</ProjectText>

                </Project>
                <Project  >
                  <ProjectImage src={SimImg} href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer"/>
                  <ProjectTitle> Simulation</ProjectTitle>
                </Project>
                <Project  >
                  <ProjectImage src={TyperImg} href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer"/>=
                  <ProjectTitle> The Office</ProjectTitle>
                  <ProjectText>A short horror game made in less than a week for TOJam 2022</ProjectText>
                </Project>
              </ProjectColumn>
              <ProjectColumn>
                <Project  >
                  <ProjectImage src={UnityPathfindingImg} href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer"/>
                  <ProjectTitle> The Office</ProjectTitle>
                  <ProjectText>A short horror game made in less than a week for TOJam 2022</ProjectText>
                </Project>
                <Project  >
                  <ProjectImage src={hijakImg} href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer"/>
                  <ProjectTitle> The Office</ProjectTitle>
                  <ProjectText>A short horror game made in less than a week for TOJam 2022</ProjectText>
                </Project>
                <Project  >
                  <ProjectImage src={ReturnImg} href='https://luwai.itch.io/the-office' target="_blank" rel="noopener noreferrer"/>
                  <ProjectTitle> The Office</ProjectTitle>
                  <ProjectText>A short horror game made in less than a week for TOJam 2022</ProjectText>
                </Project>
              </ProjectColumn>

            </ProjectContainer>
          </SectionLong>
        </>
    );
};

// export default Projects;