import React from 'react'

import OffersBengaluruHeader from './OffersBengaluruHeader'
import OffersBengaluruBanner from './OffersBengaluruBanner'
import OffersBengaluruContent from './OffersBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <OffersBengaluruHeader />
      <OffersBengaluruBanner />
      <OffersBengaluruContent />
      <Footer />
    </>
  )
}

export default index