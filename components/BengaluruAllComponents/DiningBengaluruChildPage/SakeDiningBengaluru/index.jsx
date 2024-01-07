import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import SakeDiningBanner from './SakeDiningBanner'
import SakeDiningContent from './SakeDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningBengaluruHeader />
      <SakeDiningBanner />
      <SakeDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index