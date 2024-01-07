import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import TangerineGoaBanner from './TangerineGoaBanner'
import TangerineGoaContent from './TangerineGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningGoaHeader />
      <TangerineGoaBanner />
      <TangerineGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index