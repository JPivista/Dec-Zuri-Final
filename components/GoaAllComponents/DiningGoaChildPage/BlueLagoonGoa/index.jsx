import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import BlueLagoonGoaBanner from './BlueLagoonGoaBanner'
import BlueLagoonGoaContent from './BlueLagoonGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Italian Poolside Restaurants in South Goa | Blue Lagoon Restaurant in Zuri Hotels & Resorts";
const description = "Travel to the land of spaghetti with the Italian classics served at our Italian, pool-side restaurant at The Zuri Whitesands in south Goa.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/restaurants/blue-lagoon/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningGoaHeader />
      <BlueLagoonGoaBanner />
      <BlueLagoonGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index