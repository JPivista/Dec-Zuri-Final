import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import SakeGoaBanner from './SakeGoaBanner'
import SakeGoaContent from './SakeGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Pan Asian Restaurants in South Goa | Sake Restaurant in Zuri Hotels & Resorts";
const description = "Explore the best of Pan Asian cuisine at The Zuri Whitesands in Goa. The restaurant in south Goa offers an exciting live Teppanyaki by the pool.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/restaurants/sake/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningGoaHeader />
      <SakeGoaBanner />
      <SakeGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index