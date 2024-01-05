import React from 'react'

import CompAmenitiesGoaHeader from './CompAmenitiesGoaHeader'
import CompAmenitiesGoaBanner from './CompAmenitiesGoaBanner'
import CompAmenitiesGoaContent from './CompAmenitiesGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />

      <CompAmenitiesGoaHeader />
      <CompAmenitiesGoaBanner />
      <CompAmenitiesGoaContent />

      <Footer />
    </>
  )
}

export default index