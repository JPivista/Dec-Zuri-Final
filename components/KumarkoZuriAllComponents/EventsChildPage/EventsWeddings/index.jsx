import React from 'react'
import SharedEventsHeader from '../SharedEventsHeader'
import EventsWeddingBanner from './EventsWeddingBanner'
import EventsWeddingContent from './EventsWeddingContent'
import EventsWeddingForm from './EventsWeddingForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Beach Wedding, Reception & Party Halls - Zuri Kumarakom, India";
const description = "Zuri Kumarakom - Kerala Resort & Spa, you get to experience a regal setting that suits your style.Going beyond a destination, we offer to create a memorable experience.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/events/weddings/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SharedEventsHeader />
      <EventsWeddingBanner />
      <EventsWeddingContent />
      <EventsWeddingForm />
      <Footer />
    </>
  )
}

export default index