import React from 'react'

import KaraikadamAyurvedaBanner from './KaraikadamAyurvedaBanner'
import KaraikadamAyurvedaContent from './KaraikadamAyurvedaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import KaraikadamAyurvedaContentWordpress from './KaraikadamAyurvedaContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = " Revitalize with Karkidaka Chikitsa: Ayurvedic Monsoon Treatment for Holistic Wellbeing in Kerala";
const description = "Recharge mind, body, and soul with Ayurveda's Karkidaka Treatment, a monsoon tradition in Kerala. Embrace wellness with traditional therapies.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/karkidakam-ayurveda-treatment/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <KaraikadamAyurvedaBanner />
      {/* <KaraikadamAyurvedaContent /> */}
      <KaraikadamAyurvedaContentWordpress />
      <Footer />
    </>
  )
}

export default index