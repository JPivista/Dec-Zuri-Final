import React from 'react'

import WeddingsBengaluruBanner from './WeddingsBengaluruBanner'
import WeddingsBengaluruContent from './WeddingsBengaluruContent'
import SharedEventsBengaluruHeader from '../SharedEventsBengaluruHeader'
import WeddingsBengaluruForm from './WeddingsBengaluruForm'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import Seo from '../../../SeoComponents/Seo'


const title = "Wedding Venues,Partys & more in Whitefield, Bangalore - Zuri";
const description = "Zuri Whitefield is one of the best wedding & business hotels in Bangalore. One of the most exquisite wedding hotels where you can live out your fairytale wedding fantasy.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/events/weddings/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedEventsBengaluruHeader />
      <WeddingsBengaluruBanner />
      <WeddingsBengaluruContent />
      <WeddingsBengaluruForm />
      <Footer />
    </>
  )
}

export default index