import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../gStyles'
import {
    SectionRoot,
    SectionRow,
    SectionColumn,
    PanelTips,
    PanelTipsDescription,
    PanelTipsHeadLine,
    Img
    } from './LandingSection.elements'
import {Container} from '../../gStyles'
    
const MiddelSection = (props) => {
    return (
        <React.Fragment>
            <SectionRoot>
                <Container>
                  <SectionRow imgStart={true}>
                    <SectionColumn>
                        <PanelTips>
                            <img scr={props.ImgURL} width="100px" height="100px"/>
                        <PanelTipsDescription>
                        <PanelTipsHeadLine>{props.HeadLine}</PanelTipsHeadLine>
                        </PanelTipsDescription>
                        </PanelTips>
                    </SectionColumn>
                    <SectionColumn>
                    </SectionColumn>
                    <SectionColumn>
                    </SectionColumn>
                  </SectionRow>
                </Container>
            </SectionRoot>
        </React.Fragment>
    )
}

export default MiddelSection
