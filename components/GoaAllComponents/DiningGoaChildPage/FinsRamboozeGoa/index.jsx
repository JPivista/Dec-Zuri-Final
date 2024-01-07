import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import FinsRamboozeGoaBanner from './FinsRamboozeGoaBanner'
import FinsRamboozeGoaContent from './FinsRamboozeGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningGoaHeader />
      <FinsRamboozeGoaBanner />
      <FinsRamboozeGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index