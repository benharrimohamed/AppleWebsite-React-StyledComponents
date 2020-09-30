import React from 'react'
import {LandingSection} from '../../components/LandingSection/LandingSection'
import {HomeDataObj} from './Data'
export const Home = () => {
    return (
        <React.Fragment>
           <LandingSection 
           TopLine={HomeDataObj.TopLine}
           HeadLine={HomeDataObj.Headline}
           Subtitle={HomeDataObj.Subtitle}
           />
        </React.Fragment>
    )
}
