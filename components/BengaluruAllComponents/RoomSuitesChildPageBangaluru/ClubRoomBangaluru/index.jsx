import React from 'react'

import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import ClubRoomBengalurBanner from './ClubRoomBengalurBanner'
import ClubRoomContent from './ClubRoomContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Zuri Club Room in Whitefield, Bengaluru - Zuri Hotels & Resorts";
const description = "Spacious club rooms with opulent decor in Whitefield, Bengaluru. Stay at one of Bengaluru?s finest luxury hotels, located at a stone?s throw away from ITPL.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/rooms-suites/club-room/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <ClubRoomBengalurBanner />
      <ClubRoomContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index