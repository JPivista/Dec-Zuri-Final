
import React from 'react'
import SharedHeader from '../SharedHeader'
import TrunkBarBanner from './TrunkBarBanner'
import TrunkBarContent from './TrunkBarContent'
import SharedSlider from '../SharedSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedHeader />
      <TrunkBarBanner />
      <TrunkBarContent />
      <SharedSlider />
      <Footer />
    </>
  )
}

export default index