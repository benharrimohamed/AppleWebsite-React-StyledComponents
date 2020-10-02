import React from 'react'
import {LandingSection} from '../../components/LandingSection/LandingSection'
import MiddleSection from '../../components/MiddleSection/MiddleSection'
import {ReactInf,Landing,tip1,tip2,tip3,tip4,tip5,tip6} from './Data'

export const Home = () => {
    return (
        <React.Fragment>
           <LandingSection start={false} Landing={Landing}/>
           <MiddleSection 
                tip1={tip1}
                tip2={tip2}
                tip3={tip3}
                tip4={tip4}
                tip5={tip5}
                tip6={tip6}
           />
            <LandingSection name='technologie' start={true} Landing={ReactInf}/>
          </React.Fragment>
    )
}
