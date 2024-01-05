import React from 'react'

import Header from '../Shared/HeaderHome'
import Footer from '../Shared/Footer'
import HomeSliderBanner from './HomeSliderBanner'
import PropertiesSlider from './PropertiesSlider'
import HomeOffers from './HomeOffers'
import Gallery from './Gallery'

const index = () => {
    return (
        <>
            <Header />

            <HomeSliderBanner />
            <PropertiesSlider />
            <HomeOffers />
            <Gallery />

            <Footer />
        </>
    )
}

export default index