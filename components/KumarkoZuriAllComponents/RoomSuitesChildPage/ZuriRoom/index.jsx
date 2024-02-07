import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'
import ZuriRoomContent from './ZuriRoomContent'
import ZuriRoomBanner from './ZuriRoomBanner'

import SharedSuites from '../SharedSuitesDesktop'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Discover the beauty of the meandering Kumarakom backwaters at the The Zuri hotel and luxury lake resort. Wake up to spectacular views all around you.		";
const description = "Luxury Hotel Rooms & Accommodation in Kumarakom, Kerala - Zuri Hotels & Resorts	";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/rooms-suites/zuri-room/		";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <ZuriSharedHeader />
      <ZuriRoomBanner />
      <ZuriRoomContent />
      <SharedSuites />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index