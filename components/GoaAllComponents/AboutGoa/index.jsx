import React from 'react'

import AboutGoaBanner from './AboutGoaBanner'
import AboutGoaHeader from './AboutGoaHeader'
import AboutGoaContent from './AboutGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Holiday Destination & Tourist Places in Goa - Zuri Hotels & Resorts";
const description = "Looking for a place to visit Goa offers sun-kissed beaches and gorgeous meandering streets. Relax and unwind as you explore the various tourist destinations in Goa.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/destination/		";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <Seo title={title} description={description} path={path} metaImage={metaImage} />
            <Header />
            <AboutGoaHeader />
            <AboutGoaBanner />
            <AboutGoaContent />
            <Footer />
        </>
    )
}

export default index