import React from 'react'

import DiningBengaluruHeader from './DiningBengaluruHeader'
import DiningBengalurBanner from './DiningBengalurBanner'
import DiningBengaluruContent from './DiningBengaluruContent'
import DiningBengaluruSlider from './DiningBengaluruSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <DiningBengaluruHeader />
      <DiningBengalurBanner />
      <DiningBengaluruContent />
      <DiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index