import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared//Footer'
import ComplimentaryAmenitiesHeader from './ComplimentaryAmenitiesHeader'
import ComplimentaryAmenitiesBanner from './ComplimentaryAmenitiesBanner'
import ComplimentaryAmenitiesSlider from './ComplimentaryAmenitiesSlider'
import ComplimentaryAmenitiesContent from './ComplimentaryAmenitiesContent'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />

      <ComplimentaryAmenitiesHeader />
      <ComplimentaryAmenitiesBanner />
      <ComplimentaryAmenitiesSlider />
      <ComplimentaryAmenitiesContent />

      <Footer />
    </>
  )
}

export default index