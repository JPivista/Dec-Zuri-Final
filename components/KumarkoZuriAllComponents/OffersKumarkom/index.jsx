import React from 'react'
import OffersKumarkomHeader from './OffersKumarkomHeader'
import OffersKumarkomBannerSlider from './OffersKumarkomBannerSlider'
import OffersKumarkomComponent from './OffersKumarkomComponent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />

      <OffersKumarkomHeader />
      <OffersKumarkomBannerSlider />
      <OffersKumarkomComponent />

      <Footer />
    </>
  )
}

export default index