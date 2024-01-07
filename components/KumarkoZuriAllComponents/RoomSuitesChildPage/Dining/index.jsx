import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import KumarkomDiningHeader from './KumarkomDiningHeader'
import KumarkomDiningBanner from './KumarkomDiningBanner'
import KumarkomDiningSlider from './KumarkomDiningSlider'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <KumarkomDiningHeader />
      <KumarkomDiningBanner />
      <KumarkomDiningSlider />
      <Footer />
    </>
  )
}

export default index