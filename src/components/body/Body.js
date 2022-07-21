import React from 'react'
import Footer from '../footer/Footer'
import AboutSail from './AboutSail'
import Events from './Events'
import GroupedTabs from './GroupedTab'
import Programmes from './Programmes'
import Slider from './Slider'


const Body = () => {
  
    return (
    <div>
        <Slider/>
        <AboutSail />
        <Programmes/>
        <GroupedTabs/> 
        <Events/>
        <Footer/>
        
    </div>
  )
}

export default Body