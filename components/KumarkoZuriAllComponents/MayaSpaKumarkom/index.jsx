import React from 'react'
import KumarkomMayaSpaHeader from './KumarkomMayaSpaHeader'
import KumarKomMayaSpaBanner from './KumarKomMayaSpaBanner'
import KumarkomMayaContent from './KumarkomMayaContent'
import MayaSpaSlider from './MayaSpaSlider'

import '../../StyledComponents'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Luxury Spa Hotels & Resorts | Maya Spa in Zuri Kumarakom	";
const description = "Certified for it's authentic Ayurvedic therapies and massages, the Maya Spa at Zuri, a luxury spa hotel in Kumarakom, is an a must-do holiday indulgence.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/maya-spa/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

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