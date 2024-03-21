import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import DeluxeRoomGoaBanner from './DeluxeRoomGoaBanner'
import DeluxeRoomGoaContent from './DeluxeRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Deluxe Room in Goa Near Varca Beach - Zuri Hotels & Resorts";
const description = "Experience the spirit of Goa on the most serene beach in Goa, the Varca beach. Zuri's Deluxe Room in south Goa is just at breathtaking as the views from it.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/rooms-suites/deluxe-room/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedRoomSuitesGoaHeader />
      <DeluxeRoomGoaBanner />
      <DeluxeRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index