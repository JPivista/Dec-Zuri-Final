import React from 'react'

import SharedMayaSpaGoaHeader from '../SharedMayaSpaGoaHeader'
import MayaRitualsGoaBanner from './MayaRitualsGoaBanner'
import MayaRitualsGoaContent from './MayaRitualsGoaContent'
import MayaRitualsGoaSlider from './MayaRitualsGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedMayaSpaGoaHeader />
      <MayaRitualsGoaBanner />
      <MayaRitualsGoaContent />
      <MayaRitualsGoaSlider />
      <Footer />
    </>
  )
}

export default index