import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import IncantoBanner from './IncantoBanner'
import IncantoContent from './IncantoContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Best Italian Restaurants in Whitefield, Bangalore | Incanto Restaurant in Zuri Hotels & Resorts";
const description = "Relish authentic Italian cuisine at one of the finest restaurants serving Italian cuisine in Whitefield, Bengaluru. Be transported to the land of spaghetti.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/restaurants/incanto/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningBengaluruHeader />
      <IncantoBanner />
      <IncantoContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index