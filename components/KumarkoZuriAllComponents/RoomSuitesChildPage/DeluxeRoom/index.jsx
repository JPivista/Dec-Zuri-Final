import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'
import DeluxeRoomBanner from './DeluxeRoomBanner'
import DeluxeRoomContent from './DeluxeRoomContent'

import SharedSuites from '../SharedSuitesDesktop'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Deluxe Rooms With Balcony in Kumarakom, Kerala - Zuri Hotels & Resorts	";
const description = "The Zuri's Deluxe Room in Kumarakom packs amenities and luxuries to pamper you through the stay. Experience the Kumarakom backwaters in ways you'll never forget.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/rooms-suites/deluxe-room/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <ZuriSharedHeader />
      <DeluxeRoomBanner />
      <DeluxeRoomContent />
      <SharedSuites />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index