import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import SakeGoaBanner from './SakeGoaBanner'
import SakeGoaContent from './SakeGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningGoaHeader />
      <SakeGoaBanner />
      <SakeGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index