import React from 'react'

import MayaSpaGoaHeader from './MayaSpaGoaHeader'
import MayaSpaGoaBanner from './MayaSpaGoaBanner'
import MayaSpaGoaContenet from './MayaSpaGoaContenet'
import MayaSpaGoaSlider from './MayaSpaGoaSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />

      <MayaSpaGoaHeader />
      <MayaSpaGoaBanner />
      <MayaSpaGoaContenet />
      <MayaSpaGoaSlider />

      <Footer />
    </>
  )
}

export default index