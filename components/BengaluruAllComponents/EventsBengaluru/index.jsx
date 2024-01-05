import React from 'react'

import EventsBengaluruHeader from './EventsBengaluruHeader'
import EventsBengaluruBanner from './EventsBengaluruBanner'
import EventsBengaluruSlider from './EventsBengaluruSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <EventsBengaluruHeader />
      <EventsBengaluruBanner />
      <EventsBengaluruSlider />
      <Footer />
    </>
  )
}

export default index