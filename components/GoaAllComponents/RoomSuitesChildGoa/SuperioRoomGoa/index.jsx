import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import SuperiorRoomGoaBanner from './SuperiorRoomGoaBanner'
import SuperiorRoomGoaContent from './SuperiorRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Garden View Rooms in Goa | Hotel With Garden View Room in Goa - Zuri Hotels & Resorts";
const description = "The Garden View Rooms in the Zuri Goa resort offers spectacular views of the ocean, and are ideal for the perfect vacation. Enjoy the evening beach-walks.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/rooms-suites/garden-view-room/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedRoomSuitesGoaHeader />
      <SuperiorRoomGoaBanner />
      <SuperiorRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index