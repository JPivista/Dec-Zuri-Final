import React from 'react'

import JuniorSuiteBengaluruBanner from './JuniorSuiteBengaluruBanner'
import JuniorSuiteBengaluruContent from './JuniorSuiteBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'
import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <JuniorSuiteBengaluruBanner />
      <JuniorSuiteBengaluruContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index