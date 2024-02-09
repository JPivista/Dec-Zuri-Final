import React from 'react'

import WaterFallGoaBanner from './WaterFallGoaBanner'
import WatarFallGoaContent from './WatarFallGoaContent'
import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Multi Cuisine Dining Restaurants in Goa | Waterfall Cafe Restaurant in Zuri Hotels & Resorts";
const description = "Explore a range of cuisines at our multi-cuisine restaurant at The Zuri Whitesands in south Goa. Don't miss the Sunday brunch at this water-front restaurant.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/restaurants/waterfall-cafe/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningGoaHeader />
      <WaterFallGoaBanner />
      <WatarFallGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index