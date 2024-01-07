import React from 'react'
import SharedEventsHeader from '../SharedEventsHeader'
import EventsWeddingBanner from './EventsWeddingBanner'
import EventsWeddingContent from './EventsWeddingContent'
import EventsWeddingForm from './EventsWeddingForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
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