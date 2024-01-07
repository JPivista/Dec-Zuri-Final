import React from 'react'

import KaraikadamAyurvedaBanner from './KaraikadamAyurvedaBanner'
import KaraikadamAyurvedaContent from './KaraikadamAyurvedaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import KaraikadamAyurvedaContentWordpress from './KaraikadamAyurvedaContentWordpress'

const index = () => {
  return (
    <>
      <Header />
      <KaraikadamAyurvedaBanner />
      {/* <KaraikadamAyurvedaContent /> */}
      <KaraikadamAyurvedaContentWordpress />
      <Footer />
    </>
  )
}

export default index