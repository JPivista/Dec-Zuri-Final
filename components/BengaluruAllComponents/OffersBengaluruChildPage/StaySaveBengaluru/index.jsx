import React from 'react'

import StaySaveBengaluruBanner from './StaySaveBengaluruBanner'
import StaySaveBengaluruContent from './StaySaveBengaluruContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <StaySaveBengaluruBanner />
      <StaySaveBengaluruContent />
      <Footer />
    </>
  )
}

export default index