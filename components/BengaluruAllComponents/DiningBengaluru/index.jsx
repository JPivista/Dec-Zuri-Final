import React from 'react'

import DiningBengaluruHeader from './DiningBengaluruHeader'
import DiningBengalurBanner from './DiningBengalurBanner'
import DiningBengaluruContent from './DiningBengaluruContent'
import DiningBengaluruSlider from './DiningBengaluruSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Best Restaurants in Whitefield | Luxury 5 Star Restaurants in Bangalore - Zuri Hotels & Resorts";
const description = "The Zuri's selection of renowned restaurants in Bengaluru offer a variety of lip-smacking delicacies from tandoori to a variety of continental cuisines.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/restaurants/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <DiningBengaluruHeader />
      <DiningBengalurBanner />
      <DiningBengaluruContent />
      <DiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index