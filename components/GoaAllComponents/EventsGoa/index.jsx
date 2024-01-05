import React from 'react'
import EventsGoaHeader from './EventsGoaHeader'
import EventsGoaBanner from './EventsGoaBanner'
import EventsGoaSlider from './EventsGoaSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <EventsGoaHeader />
      <EventsGoaBanner />
      <EventsGoaSlider />
      <Footer />
    </>
  )
}

export default index