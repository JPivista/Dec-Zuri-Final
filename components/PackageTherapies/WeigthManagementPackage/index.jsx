import React from 'react'

import WeigthManagementBanner from './WeigthManagementBanner'
import WeigthManagementContent from './WeigthManagementContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import WeigthManagementContentWordpress from './WeigthManagementContentWordpress'

const index = () => {
  return (
    <>
      <Header />
      <WeigthManagementBanner />
      {/* <WeigthManagementContent /> */}
      <WeigthManagementContentWordpress />
      <Footer />
    </>
  )
}

export default index