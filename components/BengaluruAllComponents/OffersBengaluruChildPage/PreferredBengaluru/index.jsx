import React from 'react'

import PreferredBengaluruBanner from './PreferredBengaluruBanner'
import PreferrredBengaluruContent from './PreferrredBengaluruContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'


import Seo from '../../../SeoComponents/Seo'


const title = "Advance Booking Hotels Deals in Bangalore, ndia | Advance Booking Discounts at Zuri Whitefield";
const description = "Get Advance Booking deals in Bengaluru at the Zuri hotel in Bengaluru. Enjoy the chic blend of style, sophistication and comfort, offered at extraordinary prices.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/offers/preferred-advance-purchase/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <PreferredBengaluruBanner />
      <PreferrredBengaluruContent />
      <Footer />
    </>
  )
}

export default index