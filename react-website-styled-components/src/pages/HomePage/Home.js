import React from 'react'
import {LandingSection} from '../../components/LandingSection/LandingSection'
import MiddleSection from '../../components/MiddleSection/MiddleSection'
import {HomeDataLandingSection,HomeDataMiddelSection,TipInf1} from './Data'
export const Home = () => {
    return (
        <React.Fragment>
           <LandingSection/>
           <MiddleSection />
          </React.Fragment>
    )
}
