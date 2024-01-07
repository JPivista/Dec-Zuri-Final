import React from 'react'
import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import HolisticGoaBanner from './HolisticGoaBanner'
import HolisticContent from './HolisticContent'
import HolisticSlider from './HolisticSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedMayaSpaGoaHeader />
      <HolisticGoaBanner />
      <HolisticContent />
      <HolisticSlider />
      <Footer />
    </>
  )
}

export default index