
import React from 'react'

import SharedHeader from '../SharedHeader'
import LagunaBassBanner from './LagunaBassBanner'
import LagunaBassContent from './LagunaBassContent'
import SharedSlider from '../SharedSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedHeader />
      <LagunaBassBanner />
      <LagunaBassContent />
      <SharedSlider />
      <Footer />

    </>
  )
}

export default index