import React from 'react'

import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import ZuriRoomBengaluruBanner from './ZuriRoomBengaluruBanner'
import ZuriRoomBengaluruContent from './ZuriRoomBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Luxury Zuri Room in Whitefield, Bangalore | Hotel Accommodation in Zuri Whitefield	";
const description = "Discover an abundance of services and amenities at The Zuri, Whitefield?s luxury rooms. Whether on business or leisure, your stay with us will be memorable.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/rooms-suites/zuri-room/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <ZuriRoomBengaluruBanner />
      <ZuriRoomBengaluruContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index