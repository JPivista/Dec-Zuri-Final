import React from 'react'

import SharedEventsHeader from '../SharedEventsHeader'
import EventsMeetingBanner from './EventsMeetingBanner'
import EventsMeetingContent from './EventsMeetingContent'
import EventsMeetingForm from './EventsMeetingForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Events, Meetings & Conferences at Zuri Kumarakom Lake Resorts";
const description = "Zuri Kerala offers the best corporate destinations that felicitate business meetings with a proficient finesse. Enquire today for the best deals.";
const path = "www.thezurihotels.com/lake-resorts-in-kumarakom/events/meetings/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SharedEventsHeader />
      <EventsMeetingBanner />
      <EventsMeetingContent />
      <EventsMeetingForm />
      <Footer />
    </>
  )
}

export default index