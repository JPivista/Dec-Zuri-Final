import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import KumarkomDiningHeader from './KumarkomDiningHeader'
import KumarkomDiningBanner from './KumarkomDiningBanner'
import KumarkomDiningSlider from './KumarkomDiningSlider'

import '../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Luxury 5 Star Restaurants Near Kottayam, Kerala - Zuri Resorts	";
const description = "Luxury 5 Star Restaurants Near Kottayam, Kerala - Zuri Resorts		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/restaurants/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <KumarkomDiningHeader />
      <KumarkomDiningBanner />
      <KumarkomDiningSlider />
      <Footer />
    </>
  )
}

export default index