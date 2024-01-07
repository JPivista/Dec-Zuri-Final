import React from 'react'

import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import ClubRoomBengalurBanner from './ClubRoomBengalurBanner'
import ClubRoomContent from './ClubRoomContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <ClubRoomBengalurBanner />
      <ClubRoomContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index