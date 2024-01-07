import React from 'react'

import MeetingsBengaluruBanner from './MeetingsBengaluruBanner'
import MeetingBengaluruContent from './MeetingBengaluruContent'
import MeetingsBengaluruForm from './MeetingsBengaluruForm'
import SharedEventsBengaluruHeader from '../SharedEventsBengaluruHeader'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <SharedEventsBengaluruHeader />
      <MeetingsBengaluruBanner />
      <MeetingBengaluruContent />
      <MeetingsBengaluruForm />
      <Footer />
    </>
  )
}

export default index