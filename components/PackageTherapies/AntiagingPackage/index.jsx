import React from 'react'

import AntiagingPackageBanner from './AntiagingPackageBanner'
import AntiagingPackageContent from './AntiagingPackageContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import AntiagingPackageContentWordpress from './AntiagingPackageContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = " Ayurvedic Insights into Anti-Aging with Rasayana - Nourishing the Body, Mind, and Soul 	";
const description = "Unlock the secrets of Ayurvedic anti-aging with Rasayana. Discover a holistic approach for mind and body harmony through nourishing diets, activities, and gentle herbs. Rejuvenate with Ayurvedic treatments and boost vitality with 'ojas'. Embrace balanced aging wisdom.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/antiaging-package/";
const metaImage = "/zuri_logo_social_media.png";


const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <AntiagingPackageBanner />
      {/* <AntiagingPackageContent /> */}
      <AntiagingPackageContentWordpress />
      <Footer />
    </>
  )
}

export default index