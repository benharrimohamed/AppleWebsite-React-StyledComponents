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


export const LandingSection = () => {
    
    return (
        <React.Fragment>
            <SectionRoot>
                <Container>
                  <SectionRow>
                    <SectionColumn>
                        <TextWarpper>
                            <HeadLine>{Data.HeadLine}</HeadLine>
                            <Subtitle>{Data.Subtitle}</Subtitle>
                            <Link to='/sign-up'>
                                <Button big fontBig>
                                    {Data.ButtonLabel}
                                </Button>
                            </Link>
                        </TextWarpper>  
                    </SectionColumn>
                    <SectionColumn>
                        <ImgWarpper>
                        <Img src={Data.ImgURL} />
                        </ImgWarpper>
                    </SectionColumn>
                  </SectionRow>
                </Container>
            </SectionRoot>
        </React.Fragment>
    )
}
