
import React from 'react'
import SharedHeader from '../SharedHeader'
import TrunkBarBanner from './TrunkBarBanner'
import TrunkBarContent from './TrunkBarContent'
import SharedSlider from '../SharedSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'


const title = "Cocktails & Local Cuisine Restaurants in Kumarakom | the Trunk Call Bar in Zuri Hotels & Resorts	";
const description = "Kick back with a perfectly blended cocktail at our cocktail bar in Kumarakom. Soak in the beauty of the spectacular Kumarakom backwaters.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/restaurants/the-trunk-call-bar/		";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SharedHeader />
      <TrunkBarBanner />
      <TrunkBarContent />
      <SharedSlider />
      <Footer />
    </>
  )
}

export default index