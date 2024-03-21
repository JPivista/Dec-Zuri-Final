import React from 'react'

import SharedDiningGoaHeader from '../SharedDiningGoaHeader'
import FinsRamboozeGoaBanner from './FinsRamboozeGoaBanner'
import FinsRamboozeGoaContent from './FinsRamboozeGoaContent'
import SharedDiningGoaSlider from '../SharedDiningGoaSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Best Beach Restaurants in South Goa | Fins & Rambooze Resturant in Zuri Whitesands";
const description = "Indulgence in fresh seafood at our beach-front restaurant in south Goa. A Goan holiday is never complete without fine seafood delicacies.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/restaurants/fins-rambooze/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningGoaHeader />
      <FinsRamboozeGoaBanner />
      <FinsRamboozeGoaContent />
      <SharedDiningGoaSlider />
      <Footer />
    </>
  )
}

export default index