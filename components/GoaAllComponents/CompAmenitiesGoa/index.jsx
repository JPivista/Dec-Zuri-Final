import React from 'react'

import CompAmenitiesGoaHeader from './CompAmenitiesGoaHeader'
import CompAmenitiesGoaBanner from './CompAmenitiesGoaBanner'
import CompAmenitiesGoaContent from './CompAmenitiesGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Complimentary Service & Amenities at the Zuri White Sands, Goa";
const description = "The Zuri White Sands Goa Resort &Casino offers more than just luxury living options. Enjoy our complimentary services & amenities to make your stay all the more eventful.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/complimentary-amenities/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />

      <CompAmenitiesGoaHeader />
      <CompAmenitiesGoaBanner />
      <CompAmenitiesGoaContent />

      <Footer />
    </>
  )
}

export default index