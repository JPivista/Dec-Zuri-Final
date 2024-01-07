import React from 'react'

import HoneyMoonBanner from './HoneyMoonBanner'
import HoneyMoonContent from './HoneyMoonContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <HoneyMoonBanner />
      <HoneyMoonContent />
      <Footer />
    </>
  )
}

export default index