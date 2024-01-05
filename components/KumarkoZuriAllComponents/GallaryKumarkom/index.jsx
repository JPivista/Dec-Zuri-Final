import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import GalleryKumarkomContent from './GalleryKumarkomContent'
import GallaryKumarkomAlbum from './GallaryKumarkomAlbum'


const index = () => {
  return (
    <>
      <Header />

      <GalleryKumarkomContent />
      <GallaryKumarkomAlbum />

      <Footer />
    </>
  )
}

export default index