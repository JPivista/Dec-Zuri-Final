import React from 'react'

import StaySaveBengaluruBanner from './StaySaveBengaluruBanner'
import StaySaveBengaluruContent from './StaySaveBengaluruContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Stay Longer & Get 20% Discount at the Zuri Whitefield, Bangalore - Zuri Hotels & Resorts";
const description = "The perfect host for all occasions, Zuri gives you the Stay Longer offers in Bengaluru. Have an incomparable luxury experience at the Zuri Bengaluru, at exceptional prices.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/offers/stay-more-save-more/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <StaySaveBengaluruBanner />
      <StaySaveBengaluruContent />
      <Footer />
    </>
  )
}

export default index