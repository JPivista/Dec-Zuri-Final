import React from 'react'

import SharedEventsGoaHeader from '../SharedEventsGoaHeader'
import WeddingsGoaBanner from './WeddingsGoaBanner'
import WeddingsGoaContent from './WeddingsGoaContent'
import WeddingsGoaForm from './WeddingsGoaForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "South Goa Beach Wedding Resorts by Zuri Hotels & Resorts";
const description = "Looking for the best wedding venues in South Goa? Your search ends here! A sprawling resort that allows for you and your guests to have an excellent time on your special day! It's all about making your special day all the more memorable, For more info. visit our website.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/events/weddings/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedEventsGoaHeader />
      <WeddingsGoaBanner />
      <WeddingsGoaContent />
      <WeddingsGoaForm />
      <Footer />
    </>
  )
}

export default index