import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'

import SharedSuites from '../SharedSuitesDesktop'

import '../../../StyledComponents'

import PoolVillaBanner from './PoolVillaBanner'
import PoolVillaContent from './PoolVillaContent'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Resorts With Private Pool in Kerala | Presidential Villa With Private Pool in Kumarakom - Zuri Hotels & Resorts	";
const description = "For a private garden shower and an independent pool, book your stay at the luxurious Presidential Pool Villa in Kumarakom. Kick back and soak in the true spirit of Kumarakom.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/rooms-suites/presidential-pool-villa/		";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <ZuriSharedHeader />
      <PoolVillaBanner />
      <PoolVillaContent />
      <SharedSuites />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index