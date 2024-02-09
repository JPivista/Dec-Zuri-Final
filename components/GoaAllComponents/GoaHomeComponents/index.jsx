import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'
import ZuriGoaHomeHeader from './ZuriGoaHomeHeader'
import ZuriGoaBanner from './ZuriGoaBanner'
import ZuriGoaContent from './ZuriGoaContent'

import Seo from '../../SeoComponents/Seo'

const title = "Luxury Hotels & Beach Resorts in Goa, India - Zuri White Sands";
const description = "Holiday at a luxury hotel in south Goa. Soak in the sun at our beach resort in Goa that sits on the picturesque beach, Varca beach with Zuri White Sands		";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <Seo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />

            <ZuriGoaHomeHeader />
            <ZuriGoaBanner />
            <ZuriGoaContent />

            <Footer />
        </>
    )
}

export default index
