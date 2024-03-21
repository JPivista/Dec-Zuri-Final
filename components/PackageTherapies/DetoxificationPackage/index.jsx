import React from 'react'

import DetoxificationPackageBanner from './DetoxificationPackageBanner'
import DetoxificationPackageContent from './DetoxificationPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import DetoxificationPackageContentWordpress from './DetoxificationPackageContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Detox Package: Resorts With Detox Program in Kerala, India -  Zuri Hotels & Resorts";
const description = "Get into the best detox program in Kerala at Zuri Hotels & Resorts. We offer an excellent range of associated services that is suited to correct the blunders done by your busy lifestyle. Get rid of all the toxins in your system and renew your commitment to a healthy lifestyle.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/detoxification-programme/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <DetoxificationPackageBanner />
      {/* <DetoxificationPackageContent /> */}
      <DetoxificationPackageContentWordpress />
      <Footer />
    </>
  )
}

export default index