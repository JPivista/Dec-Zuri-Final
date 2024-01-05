import React from 'react'

import CasinoHeader from './CasinoHeader'
import CasinoBanner from './CasinoBanner'
import CasinoContent from './CasinoContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <CasinoHeader />
      <CasinoBanner />
      <CasinoContent />
      <Footer />
    </>
  )
}

export default index