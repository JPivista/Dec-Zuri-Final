import React from 'react'

import MentalWellnessBanner from './MentalWellnessBanner'
import MentalWellnessContent from './MentalWellnessContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import MentalWellnessContentWordpress from './MentalWellnessContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Balancing the Mind: Ayurvedic Insights into Mental Wellness and the Pursuit of Sattva";
const description = "Discover Ayurvedic secrets to mental wellness. Discover the balance of Tamas, Rajas, and Sattva in Ayurveda. Enhance Sattva for good mental health, happiness, and optimal performance. Break free from stigmas with gentle interventions.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/mental-wellness-package/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <MentalWellnessBanner />
      {/* <MentalWellnessContent /> */}
      <MentalWellnessContentWordpress />
      <Footer />
    </>
  )
}

export default index