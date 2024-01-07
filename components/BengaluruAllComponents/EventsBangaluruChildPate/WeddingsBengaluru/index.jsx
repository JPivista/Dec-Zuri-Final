import React from 'react'

import WeddingsBengaluruBanner from './WeddingsBengaluruBanner'
import WeddingsBengaluruContent from './WeddingsBengaluruContent'
import SharedEventsBengaluruHeader from '../SharedEventsBengaluruHeader'
import WeddingsBengaluruForm from './WeddingsBengaluruForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

const index = () => {
  return (
    <>
      <Header />
      <SharedEventsBengaluruHeader />
      <WeddingsBengaluruBanner />
      <WeddingsBengaluruContent />
      <WeddingsBengaluruForm />
      <Footer />
    </>
  )
}

export default index