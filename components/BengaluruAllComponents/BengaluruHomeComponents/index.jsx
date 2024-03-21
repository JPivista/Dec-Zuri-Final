import React from 'react'

import ZuriBengaluruHeader from './ZuriBengaluruHeader'
import ZuriBengaluruBanner from './ZuriBengaluruBanner'
import ZuriBengaluruContent from './ZuriBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'
import BengaluruGallery from './BengaluruGallery'


const title = "Luxury Hotels in Whitefield ,Bangalore India - Zuri";
const description = "Experience one of the finest luxury 5 star hotels in Whitefield Bengaluru. The Zuri Whitefield is a refreshing brand of hospitality and personalized services.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <ZuriBengaluruHeader />
      <ZuriBengaluruBanner />
      <ZuriBengaluruContent />
      <BengaluruGallery />
      <Footer />
    </>
  )
}

export default index