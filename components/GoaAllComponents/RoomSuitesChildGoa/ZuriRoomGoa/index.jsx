import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import ZuriRoomGoaBanner from './ZuriRoomGoaBanner'
import ZuriRoomGoaContent from './ZuriRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Luxury Suites in Goa - Zuri Hotels & Resorts";
const description = "Stay at the well-appointed Zuri Luxury Suite in south Goa, for an unforgettable experience of the finest of services and amenities. Soak in the Goan spirit.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/rooms-suites/zuri-suite/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedRoomSuitesGoaHeader />
      <ZuriRoomGoaBanner />
      <ZuriRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index