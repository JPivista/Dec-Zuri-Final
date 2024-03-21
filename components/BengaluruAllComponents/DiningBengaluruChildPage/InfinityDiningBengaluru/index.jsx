import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import InfinityDiningBanner from './InfinityDiningBanner'
import InfinityDiningContent from './InfinityDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Poolside Restaurants in Whitefield, Bangalore | Infinity Restaurant in Zuri Whitefield";
const description = "Enjoy the sumptuous dishes whilst listening to the soothing music at the poolside restaurant, infinity, at The Zuri, Whitefield.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/restaurants/infinity/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningBengaluruHeader />
      <InfinityDiningBanner />
      <InfinityDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index