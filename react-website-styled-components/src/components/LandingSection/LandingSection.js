import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../gStyles'
import {
    SectionRoot,
    SectionRow,
    SectionColumn,
    TextWarpper,
    HeadLine,
    Subtitle,
    ImgWarpper,
    Img,
    PanelTips,
    PanelTipsDescription,
    PanelTipsHeadLine
    } from './LandingSection.elements'
import {Container} from '../../gStyles'


export const LandingSection = (props) => {
    
    return (
        <React.Fragment>
            <SectionRoot>
                <Container>
                  <SectionRow>
                    <SectionColumn>
                        <TextWarpper>
                            <HeadLine>{props.HeadLine}</HeadLine>
                            <Subtitle>{props.Subtitle}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig>
                                    {props.ButtonLabel}
                                </Button>
                            </Link>
                        </TextWarpper>  
                    </SectionColumn>
                    <SectionColumn>
                        <ImgWarpper>
                        <Img src={props.ImgURL} />
                        </ImgWarpper>
                    </SectionColumn>
                  </SectionRow>
                </Container>
            </SectionRoot>
        </React.Fragment>
    )
}
