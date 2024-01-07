import React from 'react'

import AyurvedaPackageBanner from './AyurvedaPackageBanner'
import AyurvedaPackageContent from './AyurvedaPackageContent'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'

import '../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <AyurvedaPackageBanner />
      <AyurvedaPackageContent />
      <Footer />
    </>
  )
}

export default index