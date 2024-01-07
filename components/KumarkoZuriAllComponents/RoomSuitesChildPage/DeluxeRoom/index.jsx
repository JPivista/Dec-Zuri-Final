import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'
import DeluxeRoomBanner from './DeluxeRoomBanner'
import DeluxeRoomContent from './DeluxeRoomContent'

import SharedSuites from '../SharedSuitesDesktop'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <ZuriSharedHeader />
      <DeluxeRoomBanner />
      <DeluxeRoomContent />
      <SharedSuites />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index