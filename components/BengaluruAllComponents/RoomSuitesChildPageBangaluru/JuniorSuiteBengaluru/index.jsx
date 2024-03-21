import React from 'react'

import JuniorSuiteBengaluruBanner from './JuniorSuiteBengaluruBanner'
import JuniorSuiteBengaluruContent from './JuniorSuiteBengaluruContent'
import SharedZuriRoomBengaluruSlider from '../SharedZuriRoomBengaluruSlider'
import SharedZuriRoomBengaluruHeader from '../SharedZuriRoomBengaluruHeader'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'


import Seo from '../../../SeoComponents/Seo'


const title = "Luxury Suite Hotel in Bangalore | Junior Suites in Zuri Whitefield";
const description = "Revel in fine luxury, choose the Junior Suite at The Zuri Whitefield Bengaluru. Packed with luxuries, your stay at the Zuri is bound to be memorable and rejuvenating.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/rooms-suites/junior-suite/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedZuriRoomBengaluruHeader />
      <JuniorSuiteBengaluruBanner />
      <JuniorSuiteBengaluruContent />
      <SharedZuriRoomBengaluruSlider />
      <Footer />
    </>
  )
}

export default index