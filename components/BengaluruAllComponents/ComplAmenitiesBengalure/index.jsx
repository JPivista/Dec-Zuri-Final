import React from 'react'

import ComplAmenitiesBengaluruHeader from './ComplAmenitiesBengaluruHeader'
import ComplAmenitiesBengaluruBanner from './ComplAmenitiesBengaluruBanner'
import ComplAmenitiesBengaluruContent from './ComplAmenitiesBengaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'


import Seo from '../../SeoComponents/Seo'


const title = "Best Complimentary Services in Hotel Zuri Whitefield, Bangalore";
const description = "The Zuri Whitefield - Bangalore offers a slew of complimentary services & amenities to make your stay all the more eventful. Satisfactory living experience, guaranteed!";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/complimentary-amenities/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <ComplAmenitiesBengaluruHeader />
      <ComplAmenitiesBengaluruBanner />
      <ComplAmenitiesBengaluruContent />
      <Footer />
    </>
  )
}

export default index