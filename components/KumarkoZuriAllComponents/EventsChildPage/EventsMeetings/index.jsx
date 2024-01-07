import React from 'react'

import SharedEventsHeader from '../SharedEventsHeader'
import EventsMeetingBanner from './EventsMeetingBanner'
import EventsMeetingContent from './EventsMeetingContent'
import EventsMeetingForm from './EventsMeetingForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
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