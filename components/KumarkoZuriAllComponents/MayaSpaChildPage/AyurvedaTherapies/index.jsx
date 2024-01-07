import React from 'react'
import SharedHeaderMayaSpaKumarkom from '../SharedHeaderMayaSpaKumarkom'
import AyurvedaMayaSpaKumakomBanner from './AyurvedaMayaSpaKumakomBanner'
import AyurvedaMayaSpaKumakomTab from './AyurvedaMayaSpaKumakomTab'
import SharedSliderMayaSpaKumarkom from '../SharedSliderMayaSpaKumarkom'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'


import '../../../StyledComponents'
import AyurvedaMayaSpaKumakomContent from './AyurvedaMayaSpaKumakomContent'

const index = () => {
  return (
    <>
      <Header />
      <SharedHeaderMayaSpaKumarkom />
      <AyurvedaMayaSpaKumakomBanner />
      <AyurvedaMayaSpaKumakomContent />
      <AyurvedaMayaSpaKumakomTab />
      <SharedSliderMayaSpaKumarkom />
      <Footer />
    </>
  )
}

export default index