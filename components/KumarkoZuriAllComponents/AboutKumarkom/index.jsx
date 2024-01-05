import React from 'react'

import AboutKumarkomHeader from './AboutKumarkomHeader'
import AboutKumarkomBanner from './AboutKumarkomBanner'
import AboutKumarkomContent from './AboutKumarkomContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <AboutKumarkomHeader />
      <AboutKumarkomBanner />
      <AboutKumarkomContent />
      <Footer />
    </>
  )
}

export default index