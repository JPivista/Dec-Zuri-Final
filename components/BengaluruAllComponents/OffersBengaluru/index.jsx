import React from 'react'

import OffersBengaluruHeader from './OffersBengaluruHeader'
import OffersBengaluruBanner from './OffersBengaluruBanner'
import OffersBengaluruContent from './OffersBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Best Hotel Offers, Deals & Packages in Bangalore - Zuri Whitefield";
const description = "The Zuri Whitefield Bengaluru has an array of facilities, services and restaurants on offer. Try our hotel offers, deals and packages for the well-deserved holiday.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/offers/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <OffersBengaluruHeader />
      <OffersBengaluruBanner />
      <OffersBengaluruContent />
      <Footer />
    </>
  )
}

export default index