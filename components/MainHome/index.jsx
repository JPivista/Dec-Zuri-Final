import React from 'react'

import Header from '../Shared/HeaderHome'
import Footer from '../Shared/Footer'
import HomeSliderBanner from './HomeSliderBanner'
import PropertiesSlider from './PropertiesSlider'
import HomeOffers from './HomeOffers'
import Gallery from './Gallery'

import NextSeo from '../SeoComponents/Seo'

const title = "Luxury 5 Star Hotels & Resorts in India - Zuri Hotels & Resorts	";
const description = "Welcome to one of the best Luxury 5 star hotels & resorts in India for an experience ‘far beyond expectations’. And discover the true meaning of ‘Zuri’.		";
const path = "https://www.thezurihotels.com/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />


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