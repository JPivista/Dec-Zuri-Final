import React from 'react'

import LastMinuteBengaluruBanner from './LastMinuteBengaluruBanner'
import LastMinuteBengaluruContent from './LastMinuteBengaluruContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <LastMinuteBengaluruBanner />
      <LastMinuteBengaluruContent />
      <Footer />
    </>
  )
}

export default index