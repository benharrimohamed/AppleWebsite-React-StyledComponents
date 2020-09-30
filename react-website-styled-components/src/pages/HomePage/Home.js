import React from 'react'
import {LandingSection} from '../../components/LandingSection/LandingSection'
import MiddelSection from '../../components/LandingSection/MiddelSection'
import {HomeDataLandingSection,HomeDataMiddelSection,TipInf1} from './Data'
export const Home = () => {
    return (
        <React.Fragment>
           <LandingSection 
           TopLine={HomeDataLandingSection.TopLine}
           HeadLine={HomeDataLandingSection.Headline}
           Subtitle={HomeDataLandingSection.Subtitle}
           ImgURL={HomeDataLandingSection.ImgURL}
           ButtonLabel={HomeDataLandingSection.ButtonLabel}
           />
           <MiddelSection 
           ImgURL={TipInf1.Image}
           HeadLine={TipInf1.HeadLine}
           description={TipInf1.desc}
           />
           
        </React.Fragment>
    )
}
