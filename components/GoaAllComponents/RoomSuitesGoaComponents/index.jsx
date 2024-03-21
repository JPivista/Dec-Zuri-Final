import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import ZuriGoaRoomSuitesHeader from './ZuriGoaRoomSuitesHeader'
import ZuriGoaRoomSuitesBanner from './ZuriGoaRoomSuitesBanner'
import ZuriGoaRoomSuitesContent from './ZuriGoaRoomSuitesContent'
import ZuriGoaRoomSuitesSlider from './ZuriGoaRoomSuitesSlider'

import Seo from '../../SeoComponents/Seo'


const title = "5 Star Beach Resorts in South Goa, India - Zuri Whitesands";
const description = "A 5-star beach resort and hotel in south Goa offering luxury rooms and suites with breathtaking views of the Varca beach, truly a piece of paradise.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/rooms-suites/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <Seo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />

            <ZuriGoaRoomSuitesHeader />
            <ZuriGoaRoomSuitesBanner />
            <ZuriGoaRoomSuitesContent />
            <ZuriGoaRoomSuitesSlider />

            <Footer />
        </>
    )
}

export default index