
import React from 'react'

import SharedHeader from '../SharedHeader'
import LagunaBassBanner from './LagunaBassBanner'
import LagunaBassContent from './LagunaBassContent'
import SharedSlider from '../SharedSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Seafood Restaurants in Kumarakom, Kerala | Laguna Bass Restaurant in Zuri Hotels & Resorts	";
const description = "Situated on the banks of the largest lake in Kerala, the Vembanad lake, The Zuri Kumarakom's seafood restaurant is the place to try authentic local cuisine.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/restaurants/laguna-bass/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SharedHeader />
      <LagunaBassBanner />
      <LagunaBassContent />
      <SharedSlider />
      <Footer />

    </>
  )
}

export default index