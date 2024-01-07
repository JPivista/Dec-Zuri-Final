import React from 'react'

import WaterFallGoaBanner from './WaterFallGoaBanner'
import WatarFallGoaContent from './WatarFallGoaContent'
import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningGoaHeader />
      <WaterFallGoaBanner />
      <WatarFallGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index