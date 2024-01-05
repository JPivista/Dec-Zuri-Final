import React from 'react'

import EventsHeaderKumarkom from './EventsHeaderKumarkom'
import EventsBannerKumarkom from './EventsBannerKumarkom'
import EventsSliderKumarkom from './EventsSliderKumarkom'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <EventsHeaderKumarkom />
      <EventsBannerKumarkom />
      <EventsSliderKumarkom />
      <Footer />
    </>
  )
}

export default index