import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import GalleryGoaAlbum from './GalleryGoaAlbum'
import GalleryGoaContent from './GalleryGoaContent'

import Seo from '../../SeoComponents/Seo'


const title = "Photo Gallery - Zuri White Sands, Goa Resort & Casino";
const description = "Our photo gallery of Zuri whitesands, Goa showcases beautiful stories and reveal breathtaking adventures of our guests. Head on there to be blown away.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/gallery/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
      <Seo title={title} description={description} path={path} metaImage={metaImage} />
            <Header />
            <GalleryGoaContent />
            <GalleryGoaAlbum />
            <Footer />
        </>
    )
}

export default index