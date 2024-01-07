import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'
import ZuriRoomContent from './ZuriRoomContent'
import ZuriRoomBanner from './ZuriRoomBanner'

import SharedSuites from '../SharedSuitesDesktop'


import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <ZuriSharedHeader />
      <ZuriRoomBanner />
      <ZuriRoomContent />
      <SharedSuites />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index