import React from 'react'

import AboutBengaluruHeader from './AboutBengaluruHeader'
import AboutBengaluruBanner from './AboutBengaluruBanner'
import AboutBengaluruContent from './AboutBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <AboutBengaluruHeader />
      <AboutBengaluruBanner />
      <AboutBengaluruContent />
      <Footer />
    </>
  )
}

export default index