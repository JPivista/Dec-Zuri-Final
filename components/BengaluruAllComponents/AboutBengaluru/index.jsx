import React from 'react'

import AboutBengaluruHeader from './AboutBengaluruHeader'
import AboutBengaluruBanner from './AboutBengaluruBanner'
import AboutBengaluruContent from './AboutBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Holiday Destination & Tourist Places in Bangalore - Zuri Hotels & Resorts";
const description = "Soak in the marvel of the various tourist destinations in Bengaluru. After a long day of exploring the city, retire in the comfort that Zuri provides.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/destination/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <AboutBengaluruHeader />
      <AboutBengaluruBanner />
      <AboutBengaluruContent />
      <Footer />
    </>
  )
}

export default index