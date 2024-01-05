import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import GalleryGoaAlbum from './GalleryGoaAlbum'
import GalleryGoaContent from './GalleryGoaContent'

const index = () => {
    return (
        <>
            <Header />
            <GalleryGoaContent />
            <GalleryGoaAlbum />
            <Footer />
        </>
    )
}

export default index