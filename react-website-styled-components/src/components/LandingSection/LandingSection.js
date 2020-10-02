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
    } from './LandingSection.elements'
import {Container} from '../../gStyles'
import {Bounce} from 'react-reveal';

export const LandingSection = (props) => {
    const {start,Landing} = props
    return (
        <React.Fragment>
            <SectionRoot>
                <Container>
                  <SectionRow start={start}>
                    <SectionColumn>
                        <Bounce top>
                        <TextWarpper>
                            <HeadLine>{Landing.HeadLine}</HeadLine>
                            <Subtitle>{Landing.Subtitle}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig display={Landing.ButtonDisplay}>
                                    {Landing.ButtonLabel}
                                </Button>
                            </Link>
                        </TextWarpper> 
                        </Bounce> 
                    </SectionColumn>
                    <SectionColumn>
                        <Bounce right>
                        <ImgWarpper start={start}>
                        <Img src={Landing.ImgURL} />
                        </ImgWarpper>
                        </Bounce>
                    </SectionColumn>
                  </SectionRow>
                </Container>
            </SectionRoot>
        </React.Fragment>
    )
}
