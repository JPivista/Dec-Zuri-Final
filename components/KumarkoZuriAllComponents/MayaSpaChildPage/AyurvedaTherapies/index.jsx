import React from 'react'
import SharedHeaderMayaSpaKumarkom from '../SharedHeaderMayaSpaKumarkom'
import AyurvedaMayaSpaKumakomBanner from './AyurvedaMayaSpaKumakomBanner'
import AyurvedaMayaSpaKumakomTab from './AyurvedaMayaSpaKumakomTab'
import SharedSliderMayaSpaKumarkom from '../SharedSliderMayaSpaKumarkom'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'


import '../../../StyledComponents'
import AyurvedaMayaSpaKumakomContent from './AyurvedaMayaSpaKumakomContent'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Ayruvedic Resorts in Kerala | Ayurveda Hotel Near Kumarakom - Zuri Hotels & Resorts	";
const description = "Treat yourself at Zuri's certified Ayurvedic spa, Maya Spa at the spa resort in Kumarakom. Soak in the true spirit of Kerala with an array of wellness therapies.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/maya-spa/ayurveda/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <SharedHeaderMayaSpaKumarkom />
      <AyurvedaMayaSpaKumakomBanner />
      <AyurvedaMayaSpaKumakomContent />
      <AyurvedaMayaSpaKumakomTab />
      <SharedSliderMayaSpaKumarkom />
      <Footer />
    </>
  )
}

export default index