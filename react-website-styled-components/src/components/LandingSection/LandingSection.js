import React from 'react'
import {Link} from 'react-router-dom'
import {Button} from '../../gStyles'
import {
    LandingSec,
    SectionRow,
    SectionColumn,
    TextWarpper,
    TopLine,
    HeadLine,
    Subtitle,
    AppleIcon
    } from './LandingSection.elements'
import {Container} from '../../gStyles'


export const LandingSection = (props) => {
    
    return (
        <React.Fragment>
            <LandingSec>
                <Container>
                  <SectionRow>
                      <SectionColumn>
                          <TextWarpper>
                              <TopLine>{props.TopLine}</TopLine>
                              <HeadLine>{props.HeadLine}</HeadLine>
                              <Subtitle>{props.Subtitle}</Subtitle>
                              <Link to='/sign-up'>
                                  <Button big fontBig >
                                      Sign Up
                                  </Button>
                              </Link>
                          </TextWarpper>    
                      </SectionColumn>
                  </SectionRow>
                </Container>
            </LandingSec>
        </React.Fragment>
    )
}
