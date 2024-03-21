import React from 'react'

import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import AyurvedaGoaBanner from './AyurvedaGoaBanner'
import AyurvedaGoaContent from './AyurvedaGoaContent'
import AyurvedaGoaSlider from './AyurvedaGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Ayurvedic Spa Resort in Goa | Ayurveda Treatment Packages in Goa India - Zuri Hotels & Resorts";
const description = "The Maya Spa is a premium luxury Ayurvedic Spa Resort in Goa. With pampering of the body as well as the soul, it?s the perfect choice for anyone looking for rejuvenation.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/maya-spa/ayurveda/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedMayaSpaGoaHeader />
      <AyurvedaGoaBanner />
      <AyurvedaGoaContent />
      <AyurvedaGoaSlider />
      <Footer />
    </>
  )
}

export default index