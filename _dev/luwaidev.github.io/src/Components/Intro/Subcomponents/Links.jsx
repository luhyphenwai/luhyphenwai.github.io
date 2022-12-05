import React from 'react';
import { Icon } from '@iconify/react'
import {IconLinks, IconContainer, IconBackground} from "../IntroStyles.js"
import * as colors from '../../../colors.js'

const size = "3vw";
const Links = () => {
    return (
        <div>
            <IconContainer>
                <IconBackground>
                    <IconLinks href="https://luwaidev.itch.io/">
                    <Icon icon="simple-icons:itchdotio" color={colors.DARK_BLUE} fontSize={size} /> 
                    </IconLinks>
                    <IconLinks href='https://twitter.com/luwaidev'>
                        <Icon icon="ri:twitter-fill" color={colors.DARK_BLUE} fontSize={size} />
                    </IconLinks>
                    <IconLinks href='https://github.com'>
                        <Icon icon="mdi:github" color={colors.DARK_BLUE} fontSize={size} />
                    </IconLinks>
                    
                    <IconLinks href='https://www.instagram.com/luwaidev/'>
                        <Icon icon="ri:instagram-line" color={colors.DARK_BLUE} fontSize={size} />
                    </IconLinks>
                    
                    <IconLinks href='https://www.linkedin.com/in/lu-wai-wong-27a2661b7/'>
                        <Icon icon="mdi:linkedin" color={colors.DARK_BLUE} fontSize={size} />    
                    </IconLinks>
                </IconBackground>
                
                
            </IconContainer>
            
        </div>
    );
};

export default Links;