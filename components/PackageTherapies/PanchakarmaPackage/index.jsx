import React from 'react'

import PanchakarmaPackageBanner from './PanchakarmaPackageBanner'
import PanchakarmaPackageContent from './PanchakarmaPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import PanchamaPackageContentWordpress from './PanchamaPackageContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Panchakarma Package: Resorts With Panchakarma Treatment Packages in Kerala, India -  Zuri Hotels & Resorts ( Title to long)";
const description = "Choose from a reliable panchakarma package in Kerala to get rid of the excess flab and regain the lost vigor of your body. This ancient form of weight loss program is a combination of various tried and tested ayurvedic treatment methods that assure positive results.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/panchakarma-programme/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <PanchakarmaPackageBanner />
      {/* <PanchakarmaPackageContent /> */}
      <PanchamaPackageContentWordpress />
      <Footer />
    </>
  )
}

export default index