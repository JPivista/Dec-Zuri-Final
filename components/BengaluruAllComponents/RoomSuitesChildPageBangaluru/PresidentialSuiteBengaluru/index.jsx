import React from 'react'

import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import PresidentialSuiteBengaluruBanner from './PresidentialSuiteBengaluruBanner'
import PresidentialSuiteBengaluruContent from './PresidentialSuiteBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <PresidentialSuiteBengaluruBanner />
      <PresidentialSuiteBengaluruContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index