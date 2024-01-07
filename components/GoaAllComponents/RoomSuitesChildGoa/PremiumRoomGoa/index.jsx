import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import PremiumRoomGoaBanner from './PremiumRoomGoaBanner'
import PremiumRoomGoaContent from './PremiumRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedRoomSuitesGoaHeader />
      <PremiumRoomGoaBanner />
      <PremiumRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index