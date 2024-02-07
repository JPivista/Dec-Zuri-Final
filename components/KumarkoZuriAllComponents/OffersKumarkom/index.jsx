import React from 'react'
import OffersKumarkomHeader from './OffersKumarkomHeader'
import OffersKumarkomBannerSlider from './OffersKumarkomBannerSlider'
import OffersKumarkomComponent from './OffersKumarkomComponent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Hotel Deals in Kerala: Offers & Packages at Zuri Kumarakom Hotels & Resorts	";
const description = "Hotel/Resort Offers & Packages in Kumarakom, Kerala - Zuri Hotel & Resort";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />

      <OffersKumarkomHeader />
      <OffersKumarkomBannerSlider />
      <OffersKumarkomComponent />

      <Footer />
    </>
  )
}

export default index