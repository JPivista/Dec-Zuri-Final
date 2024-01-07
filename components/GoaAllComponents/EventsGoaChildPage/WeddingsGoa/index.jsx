import React from 'react'

import SharedEventsGoaHeader from '../SharedEventsGoaHeader'
import WeddingsGoaBanner from './WeddingsGoaBanner'
import WeddingsGoaContent from './WeddingsGoaContent'
import WeddingsGoaForm from './WeddingsGoaForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedEventsGoaHeader />
      <WeddingsGoaBanner />
      <WeddingsGoaContent />
      <WeddingsGoaForm />
      <Footer />
    </>
  )
}

export default index