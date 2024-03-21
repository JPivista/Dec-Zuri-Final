import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import GalleryKumarkomContent from './GalleryKumarkomContent'
import GallaryKumarkomAlbum from './GallaryKumarkomAlbum'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Photo Gallery - the Zuri Kumarakom,Kerala	";
const description = "If you are looking for a relaxing spa or a luxurious stay, choose The Zuri in Kumarakom . Have a look at the royal treatment we give our guests.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/gallery/";
const metaImage = "/zuri_logo_social_media.png";





const index = () => {
  return (
    <>
      <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

      <Header />

      <GalleryKumarkomContent />
      <GallaryKumarkomAlbum />

      <Footer />
    </>
  )
}

export default index