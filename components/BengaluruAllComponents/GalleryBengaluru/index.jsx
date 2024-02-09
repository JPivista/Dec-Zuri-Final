import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import GalleryBengaluruAlbum from './GalleryBengaluruAlbum'
import GalleryBengaluruConent from './GalleryBengaluruConent'

import Seo from '../../SeoComponents/Seo'


const title = "Photo Gallery - The Zuri Whitefield, Bengaluru";
const description = "The Zuri whitefield, a five star hotel in Bengaluru is one of the best location for an ideal vacation. Check out the lavish treatment we give our guests.";
const path = "https://www.thezurihotels.com/hotels-in-bengaluru/gallery/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
            <Header />
            <GalleryBengaluruConent />
            <GalleryBengaluruAlbum />
            <Footer />
        </>
    )
}

export default index