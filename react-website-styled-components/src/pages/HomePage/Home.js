import React from 'react'
import {LandingSection} from '../../components/LandingSection/LandingSection'
import {HomeDataLandingSection} from './Data'
export const Home = () => {
    return (
        <React.Fragment>
           <LandingSection 
           TopLine={HomeDataLandingSection.TopLine}
           HeadLine={HomeDataLandingSection.Headline}
           Subtitle={HomeDataLandingSection.Subtitle}
           ImgURL={HomeDataLandingSection.ImgURL}
           />
        </React.Fragment>
    )
}
