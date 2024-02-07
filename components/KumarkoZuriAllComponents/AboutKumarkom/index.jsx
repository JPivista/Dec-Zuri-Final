import React from 'react'

import AboutKumarkomHeader from './AboutKumarkomHeader'
import AboutKumarkomBanner from './AboutKumarkomBanner'
import AboutKumarkomContent from './AboutKumarkomContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Holiday Destination & Tourist Places in Kumarakom, Kerala - Zuri Hotels & Resorts	";
const description = "Plan the perfect weekend getaway in a lush corner of Kerala. Explore the gorgeous town of Kumarakom, the most picturesque backwaters of Kerala and authentic local delicacies.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/destination/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />


      <Header />
      <AboutKumarkomHeader />
      <AboutKumarkomBanner />
      <AboutKumarkomContent />
      <Footer />
    </>
  )
}

export default index