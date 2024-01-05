import React from 'react'

import MayaSpaBangaluruHeader from './MayaSpaBangaluruHeader'
import MayaSpaBangaluruBanner from './MayaSpaBangaluruBanner'
import MayaSpaBangaluruContent from './MayaSpaBangaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
  return (
    <>
      <Header />
      <MayaSpaBangaluruHeader />
      <MayaSpaBangaluruBanner />
      <MayaSpaBangaluruContent />
      <Footer />
    </>
  )
}

export default index