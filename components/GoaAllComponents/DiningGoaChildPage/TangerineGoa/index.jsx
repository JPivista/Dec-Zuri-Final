import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import TangerineGoaBanner from './TangerineGoaBanner'
import TangerineGoaContent from './TangerineGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Cocktail Restaurants in South Goa | Tangerine Restaurant in Zuri Hotels & Resorts";
const description = "Al fresco lounge and restaurant at our beach resort in south Goa is the ideal place to sit back and relax a perfectly blended cocktail with live entertainment.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/restaurants/tangerine/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningGoaHeader />
      <TangerineGoaBanner />
      <TangerineGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index