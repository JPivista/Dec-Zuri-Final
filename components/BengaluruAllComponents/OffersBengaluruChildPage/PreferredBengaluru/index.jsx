import React from 'react'

import PreferredBengaluruBanner from './PreferredBengaluruBanner'
import PreferrredBengaluruContent from './PreferrredBengaluruContent'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'


const index = () => {
  return (
    <>
      <Header />
      <PreferredBengaluruBanner />
      <PreferrredBengaluruContent />
      <Footer />
    </>
  )
}

export default index