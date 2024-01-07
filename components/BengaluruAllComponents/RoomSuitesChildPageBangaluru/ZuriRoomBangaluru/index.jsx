import React from 'react'

import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import ZuriRoomBengaluruBanner from './ZuriRoomBengaluruBanner'
import ZuriRoomBengaluruContent from './ZuriRoomBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <ZuriRoomBengaluruBanner />
      <ZuriRoomBengaluruContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index