import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared//Footer'
import ComplimentaryAmenitiesHeader from './ComplimentaryAmenitiesHeader'
import ComplimentaryAmenitiesBanner from './ComplimentaryAmenitiesBanner'
import ComplimentaryAmenitiesSlider from './ComplimentaryAmenitiesSlider'
import ComplimentaryAmenitiesContent from './ComplimentaryAmenitiesContent'

import NextSeo from '../../SeoComponents/Seo'

import '../../StyledComponents'

const title = "Zuri Kumarakom - Kerala Resort & Spa - Complimentary Amenities	";
const description = "Zuri Kumarakom, Kerala Resort & Spa provide the amenities you expect and the extras you deserve are delivered with the highest quality standards.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/complimentary-amenities/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
  return (
    <>

      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />

      <ComplimentaryAmenitiesHeader />
      <ComplimentaryAmenitiesBanner />
      <ComplimentaryAmenitiesSlider />
      <ComplimentaryAmenitiesContent />

      <Footer />
    </>
  )
}

export default index