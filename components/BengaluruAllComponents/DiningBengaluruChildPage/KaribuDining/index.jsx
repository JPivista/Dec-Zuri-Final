import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import KaribuDiningBanner from './KaribuDiningBanner'
import KaribuDiningContent from './KaribuDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningBengaluruHeader />
      <KaribuDiningBanner />
      <KaribuDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index