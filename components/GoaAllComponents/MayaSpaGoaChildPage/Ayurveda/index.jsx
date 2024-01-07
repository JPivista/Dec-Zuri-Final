import React from 'react'

import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import AyurvedaGoaBanner from './AyurvedaGoaBanner'
import AyurvedaGoaContent from './AyurvedaGoaContent'
import AyurvedaGoaSlider from './AyurvedaGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedMayaSpaGoaHeader />
      <AyurvedaGoaBanner />
      <AyurvedaGoaContent />
      <AyurvedaGoaSlider />
      <Footer />
    </>
  )
}

export default index