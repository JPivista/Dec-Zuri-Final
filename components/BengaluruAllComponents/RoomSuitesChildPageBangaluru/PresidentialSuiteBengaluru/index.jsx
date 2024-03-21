import React from 'react'

import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'
import PresidentialSuiteBengaluruBanner from './PresidentialSuiteBengaluruBanner'
import PresidentialSuiteBengaluruContent from './PresidentialSuiteBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'


import Seo from '../../../SeoComponents/Seo'


const title = "Presidential Room Suites in Whitefield, Bangalore - Zuri Hotels & Resorts";
const description = "Delight in our five-star amenities & unmatched hospitality. The Zuri, Whitefield offers you exquisite Presidential Suites that are designed to please the most demanding of tastes.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/rooms-suites/presidential-suite/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <PresidentialSuiteBengaluruBanner />
      <PresidentialSuiteBengaluruContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index