import React from 'react'

import ComplAmenitiesBengaluruHeader from './ComplAmenitiesBengaluruHeader'
import ComplAmenitiesBengaluruBanner from './ComplAmenitiesBengaluruBanner'
import ComplAmenitiesBengaluruContent from './ComplAmenitiesBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <ComplAmenitiesBengaluruHeader />
      <ComplAmenitiesBengaluruBanner />
      <ComplAmenitiesBengaluruContent />
      <Footer />
    </>
  )
}

export default index