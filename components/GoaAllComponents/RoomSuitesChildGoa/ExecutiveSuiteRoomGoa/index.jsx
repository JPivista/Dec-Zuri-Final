import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import ExecutiveSuiteRoomGoaBanner from './ExecutiveSuiteRoomGoaBanner'
import ExecutiveSuiteRoomGoaContent from './ExecutiveSuiteRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Executive Suites in Goa - Zuri Hotels & Resorts";
const description = "Revel in a luxurious dose of the perfect Goan beach, the Varca beach. The Zuri Executive Suites are as just as luxurious and come with irresistible comforts.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/rooms-suites/executive-suite/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedRoomSuitesGoaHeader />
      <ExecutiveSuiteRoomGoaBanner />
      <ExecutiveSuiteRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index