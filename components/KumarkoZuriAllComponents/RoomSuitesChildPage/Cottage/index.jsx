import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import ZuriSharedHeader from '../SharedHeader'
import ZuriSharedSlider from '../SharedSlider'

import '../../../StyledComponents'

import SharedSuites from '../SharedSuitesDesktop'

import CottageBanner from './CottageBanner'
import CottageContent from './CottageContent'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Luxury Cottage Resorts in Kumarakom, Kerala - Zuri Hotels & Resorts	";
const description = "The cottages in our resort in Kumarakom, Kerala, tuck-away in a lush corner, sit on the shores of a man-made lagoon and comes with soothing luxuries.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/rooms-suites/cottage/		";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <ZuriSharedHeader />
      <CottageBanner />
      <CottageContent />
      <SharedSuites />
      <ZuriSharedSlider />
      <Footer />
    </>
  )
}

export default index