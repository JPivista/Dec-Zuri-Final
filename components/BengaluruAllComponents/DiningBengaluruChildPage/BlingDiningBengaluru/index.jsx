import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import BlingDiningBanner from './BlingDiningBanner'
import BlingDiningContent from './BlingDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'


const index = () => {
  return (
    <>
      <Header />
      <SharedDiningBengaluruHeader />
      <BlingDiningBanner />
      <BlingDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index