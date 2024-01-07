import React from 'react'

import RejuvenationPackageBanner from './RejuvenationPackageBanner'
import RejuvenationPackageContent from './RejuvenationPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import RejuvenationPackageContentWordpress from './RejuvenationPackageContentWordpress'

const index = () => {
  return (
    <>
      <Header />
      <RejuvenationPackageBanner />
      {/* <RejuvenationPackageContent /> */}
      <RejuvenationPackageContentWordpress />
      <Footer />
    </>
  )
}

export default index