import React from 'react'

import SharedEventsGoaHeader from '../SharedEventsGoaHeader'
import MeetingsGoaBanner from './MeetingsGoaBanner'
import MeetingsGoaContent from './MeetingsGoaContent'
import MeetingsGoaForm from './MeetingsGoaForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Conference-Ready Business Hotels in South Goa - Zuri";
const description = "The Zuri Whitesands is among the best business hotels in Goa. We are euipped with excellent conference rooms and associated facilities designed specifically for corporate events. Give your event a profesional flair at our hotel. Feel free to inquire for the best package.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/events/meetings/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedEventsGoaHeader />
      <MeetingsGoaBanner />
      <MeetingsGoaContent />
      <MeetingsGoaForm />
      <Footer />
    </>
  )
}

export default index