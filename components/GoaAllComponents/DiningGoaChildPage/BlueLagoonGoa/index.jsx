import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import BlueLagoonGoaBanner from './BlueLagoonGoaBanner'
import BlueLagoonGoaContent from './BlueLagoonGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedDiningGoaHeader />
      <BlueLagoonGoaBanner />
      <BlueLagoonGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index