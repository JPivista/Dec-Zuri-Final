import React from 'react'

import SharedEventsGoaHeader from '../SharedEventsGoaHeader'
import MeetingsGoaBanner from './MeetingsGoaBanner'
import MeetingsGoaContent from './MeetingsGoaContent'
import MeetingsGoaForm from './MeetingsGoaForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedEventsGoaHeader />
      <MeetingsGoaBanner />
      <MeetingsGoaContent />
      <MeetingsGoaForm />
      <Footer />
    </>
  )
}

export default index