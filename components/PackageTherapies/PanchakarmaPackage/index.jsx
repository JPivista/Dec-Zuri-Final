import React from 'react'

import PanchakarmaPackageBanner from './PanchakarmaPackageBanner'
import PanchakarmaPackageContent from './PanchakarmaPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import PanchamaPackageContentWordpress from './PanchamaPackageContentWordpress'

const index = () => {
  return (
    <>
      <Header />
      <PanchakarmaPackageBanner />
      {/* <PanchakarmaPackageContent /> */}
      <PanchamaPackageContentWordpress />
      <Footer />
    </>
  )
}

export default index