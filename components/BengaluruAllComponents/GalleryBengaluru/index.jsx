import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import GalleryBengaluruAlbum from './GalleryBengaluruAlbum'
import GalleryBengaluruConent from './GalleryBengaluruConent'

const index = () => {
    return (
        <>
            <Header />
            <GalleryBengaluruConent />
            <GalleryBengaluruAlbum />
            <Footer />
        </>
    )
}

export default index