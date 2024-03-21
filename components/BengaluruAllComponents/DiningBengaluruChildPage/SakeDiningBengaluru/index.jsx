import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import SakeDiningBanner from './SakeDiningBanner'
import SakeDiningContent from './SakeDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Pan Asian Dining Restaurants in Bangalore | Sake Resturant in Zuri Whitefield";
const description = "Live Teppanyaki stations and an exciting Sushi bar-one of the many experiences you get if you dine at Sake, one of the best Pan Asian restaurants in Bengaluru.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/restaurants/sake/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningBengaluruHeader />
      <SakeDiningBanner />
      <SakeDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index