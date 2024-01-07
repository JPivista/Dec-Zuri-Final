import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import InfinityDiningBanner from './InfinityDiningBanner'
import InfinityDiningContent from './InfinityDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningBengaluruHeader />
      <InfinityDiningBanner />
      <InfinityDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index