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
import Data from './Data'
import {Bounce} from 'react-reveal';

export const LandingSection = () => {
    
    return (
        <React.Fragment>
            <SectionRoot>
                <Container>
                  <SectionRow>
                    <SectionColumn>
                        <Bounce top>
                        <TextWarpper>
                            <HeadLine>{Data.HeadLine}</HeadLine>
                            <Subtitle>{Data.Subtitle}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig>
                                    {Data.ButtonLabel}
                                </Button>
                            </Link>
                        </TextWarpper> 
                        </Bounce> 
                    </SectionColumn>
                    <SectionColumn>
                        <Bounce right>
                        <ImgWarpper>
                        <Img src={Data.ImgURL} />
                        </ImgWarpper>
                        </Bounce>
                    </SectionColumn>
                  </SectionRow>
                </Container>
            </SectionRoot>
        </React.Fragment>
    )
}
