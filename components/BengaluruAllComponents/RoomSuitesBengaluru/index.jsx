import React from 'react'

import RoomSuitesBengaluruHeader from './RoomSuitesBengaluruHeader'
import RoomSuiteBengaluruBanner from './RoomSuiteBengaluruBanner'
import RoomSuiteBengaluruContent from './RoomSuiteBengaluruContent'
import RoomSuiteBengaluruSlider from './RoomSuiteBengaluruSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <RoomSuitesBengaluruHeader />
      <RoomSuiteBengaluruBanner />
      <RoomSuiteBengaluruContent />
      <RoomSuiteBengaluruSlider />
      <Footer />
    </>
  )
}

export default index