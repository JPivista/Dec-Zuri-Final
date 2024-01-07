import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import DeluxeRoomGoaBanner from './DeluxeRoomGoaBanner'
import DeluxeRoomGoaContent from './DeluxeRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedRoomSuitesGoaHeader />
      <DeluxeRoomGoaBanner />
      <DeluxeRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index