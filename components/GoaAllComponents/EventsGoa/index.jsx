import React from 'react'
import EventsGoaHeader from './EventsGoaHeader'
import EventsGoaBanner from './EventsGoaBanner'
import EventsGoaSlider from './EventsGoaSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Events, Venues & Function in South Goa Beach- Zuri White Sands";
const description = "Zuri White Sands - As one of the best event venues in Goa, our resort comes with the right amenities to make your stay a remarkable one. Inquire for the best package.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/events/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <EventsGoaHeader />
      <EventsGoaBanner />
      <EventsGoaSlider />
      <Footer />
    </>
  )
}

export default index