import React from 'react'

import RoomSuitesBengaluruHeader from './RoomSuitesBengaluruHeader'
import RoomSuiteBengaluruBanner from './RoomSuiteBengaluruBanner'
import RoomSuiteBengaluruContent from './RoomSuiteBengaluruContent'
import RoomSuiteBengaluruSlider from './RoomSuiteBengaluruSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "5 Star Hotels in Whitefield | Five Star Hotel in Bangalore, India - Zuri Whitefield";
const description = "One of the premier 5 star hotels in Whitefield, Bengaluru,the Zuri offers an unparalleled experience, for both business and pleasure travellers.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/rooms-suites/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <RoomSuitesBengaluruHeader />
      <RoomSuiteBengaluruBanner />
      <RoomSuiteBengaluruContent />
      <RoomSuiteBengaluruSlider />
      <Footer />
    </>
  )
}

export default index