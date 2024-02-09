import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import BlingDiningBanner from './BlingDiningBanner'
import BlingDiningContent from './BlingDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Lounge Bars Restaurants in Whitefield, Bangalore | Bling Restaurant in Zuri Hotels & Resorts";
const description = "Kick back with a cocktail or dance the night away at Bling, one of the hip and happening lounge bars in Bengaluru.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/restaurants/bling/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningBengaluruHeader />
      <BlingDiningBanner />
      <BlingDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index