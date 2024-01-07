import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import IncantoBanner from './IncantoBanner'
import IncantoContent from './IncantoContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningBengaluruHeader />
      <IncantoBanner />
      <IncantoContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index