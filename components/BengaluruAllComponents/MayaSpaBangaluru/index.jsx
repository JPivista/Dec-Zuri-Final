import React from 'react'

import MayaSpaBangaluruHeader from './MayaSpaBangaluruHeader'
import MayaSpaBangaluruBanner from './MayaSpaBangaluruBanner'
import MayaSpaBangaluruContent from './MayaSpaBangaluruContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Luxury Spa Hotels in Whitefield, Bangalore | Maya Spa in Zuri Whitefield";
const description = "Relax & rejuvenate at The Zuri, a luxury 5 star spa hotel in Bengaluru. The Maya Spa by Zuri is sure to soothe your senses and uplift your soul.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/maya-spa/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
      <Header />
      <MayaSpaBangaluruHeader />
      <MayaSpaBangaluruBanner />
      <MayaSpaBangaluruContent />
      <Footer />
    </>
  )
}

export default index