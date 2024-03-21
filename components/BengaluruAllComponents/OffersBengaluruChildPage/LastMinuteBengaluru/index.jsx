import React from 'react'

import LastMinuteBengaluruBanner from './LastMinuteBengaluruBanner'
import LastMinuteBengaluruContent from './LastMinuteBengaluruContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Last Minute Hotel Deals, Discounts & Offers in Banagalore, India - Zuri Whitefield";
const description = "With the Last Minute Deals in Bengaluru, Zuri Whitefield offers you a chance to explore the vibrant, young and trendy city, also known as India?s Silicon Valley.		";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/offers/last-minute-steal/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <LastMinuteBengaluruBanner />
      <LastMinuteBengaluruContent />
      <Footer />
    </>
  )
}

export default index