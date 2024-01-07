import React from 'react'

import SharedRoomSuitesGoaHeader from '../SharedRoomSuitesGoaHeader'
import ExecutiveSuiteRoomGoaBanner from './ExecutiveSuiteRoomGoaBanner'
import ExecutiveSuiteRoomGoaContent from './ExecutiveSuiteRoomGoaContent'
import SharedRoomSuitesGoaSlider from '../SharedRoomSuitesGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedRoomSuitesGoaHeader />
      <ExecutiveSuiteRoomGoaBanner />
      <ExecutiveSuiteRoomGoaContent />
      <SharedRoomSuitesGoaSlider />
      <Footer />
    </>
  )
}

export default index