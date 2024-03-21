import React from 'react'

import CasinoHeader from './CasinoHeader'
import CasinoBanner from './CasinoBanner'
import CasinoContent from './CasinoContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Goa Deltin Zuri Casino";
const description = "Immerse in luxury gaming at Deltin Zuri, South Goa's exclusive onshore casino. Poker, blackjack, roulette, and slot machines await at The Zuri White Sands Goa Resort & Casino for an unparalleled experience.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/casino/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <CasinoHeader />
      <CasinoBanner />
      <CasinoContent />
      <Footer />
    </>
  )
}

export default index