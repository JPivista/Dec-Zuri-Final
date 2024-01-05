import React from 'react'

import ZuriBengaluruHeader from './ZuriBengaluruHeader'
import ZuriBengaluruBanner from './ZuriBengaluruBanner'
import ZuriBengaluruContent from './ZuriBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <ZuriBengaluruHeader />
      <ZuriBengaluruBanner />
      <ZuriBengaluruContent />
      <Footer />
    </>
  )
}

export default index