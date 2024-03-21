import React from 'react'

import WeigthManagementBanner from './WeigthManagementBanner'
import WeigthManagementContent from './WeigthManagementContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import WeigthManagementContentWordpress from './WeigthManagementContentWordpress'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Resorts With Weight Loss Management Program in Kerala, India -  Zuri Hotels & Resorts";
const description = "Zuri Hotels and Resorts is home to one of the best weightloss resorts in Kerala, where we offer a slew of weight loss programs. Our services are rooted in traditional Ayurvedic practices, which assures a rejuvenated outcome in a timely fashion.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/weight-management-programme/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />
      <WeigthManagementBanner />
      {/* <WeigthManagementContent /> */}
      <WeigthManagementContentWordpress />
      <Footer />
    </>
  )
}

export default index