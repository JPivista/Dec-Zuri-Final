import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import PremiumRoomGoaBanner from './PremiumRoomGoaBanner'
import PremiumRoomGoaContent from './PremiumRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'



import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Premium Rooms in Goa - Zuri Hotels & Resorts";
const description = "The long-awaited vacation needs to be planned perfectly. Check out the Premium Rooms at The Zuri?s Whitesands in Goa, packed with luxuries to pamper you.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/rooms-suites/premium-room/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
        <Seo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SharedRoomSuitesGoaHeader />
      <PremiumRoomGoaBanner />
      <PremiumRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index