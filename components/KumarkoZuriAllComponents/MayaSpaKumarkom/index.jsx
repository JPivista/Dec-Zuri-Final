import React from 'react'
import KumarkomMayaSpaHeader from './KumarkomMayaSpaHeader'
import KumarKomMayaSpaBanner from './KumarKomMayaSpaBanner'
import KumarkomMayaContent from './KumarkomMayaContent'
import MayaSpaSlider from './MayaSpaSlider'

import '../../StyledComponents'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

const index = () => {
  return (
    <>
      <Header />

      <KumarkomMayaSpaHeader />
      <KumarKomMayaSpaBanner />
      <KumarkomMayaContent />
      <MayaSpaSlider />

      <Footer />
    </>
  )
}

export default index