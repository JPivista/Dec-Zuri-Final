import React from 'react'

import EventsBengaluruHeader from './EventsBengaluruHeader'
import EventsBengaluruBanner from './EventsBengaluruBanner'
import EventsBengaluruSlider from './EventsBengaluruSlider'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Corporate Event & Function Space in Zuri Whitefield, Bengaluru";
const description = "The Zuri Whitefield is the corporate event you've been waiting for. As one of the most stylish event venues, we offer everything that a corporate event needs, & much more";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/events/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <EventsBengaluruHeader />
      <EventsBengaluruBanner />
      <EventsBengaluruSlider />
      <Footer />
    </>
  )
}

export default index