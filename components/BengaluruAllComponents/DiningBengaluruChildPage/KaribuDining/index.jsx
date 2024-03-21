import React from 'react'

import SharedDiningBengaluruHeader from '../SharedDiningBengaluruHeader'
import KaribuDiningBanner from './KaribuDiningBanner'
import KaribuDiningContent from './KaribuDiningContent'
import SharedDiningBengaluruSlider from '../SharedDiningBengaluruSlider'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import '../../../StyledComponents'

import Seo from '../../../SeoComponents/Seo'


const title = "Best Multi-cuisine Restaurants in Whitefield, Bangalore | Karibu Restaurant in Zuri Hotels & Resorts";
const description = "Fine dining in Bengaluru will never be the same. Karibu, a multi cuisine restaurant in the Zuri Whitefield, offers a luxury dining experience like no other, by way of a wide selection of Italian delicacies and Pan-Asian cuisine.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/restaurants/karibu/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <SharedDiningBengaluruHeader />
      <KaribuDiningBanner />
      <KaribuDiningContent />
      <SharedDiningBengaluruSlider />
      <Footer />
    </>
  )
}

export default index