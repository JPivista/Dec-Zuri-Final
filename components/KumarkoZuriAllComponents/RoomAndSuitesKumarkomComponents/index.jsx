'use client'
import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import RoomsSuitsHeader from './RoomsSuitsHeader'
import RoomSuitesBanner from './RoomSuitesBanner'
import RoomsSuitsContent from './RoomsSuitsContent'
import RoomSuitesSlider from './RoomSuitesSlider'
import RoomSuitesDesktop from './RoomSuitesDesktop'
import NextSeo from '../../SeoComponents/Seo'

const title = "Room & Suites in luxury Resorts in Kumarakom - Zuri Kumarakom	";
const description = "Stay in one of the most exotic backwater destinations in Kerala. The Zuri Kumarakom, the most picturesque 5 start hotel and resort, offers a variety of luxury rooms.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/rooms-suites/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />


            <Header />
            <RoomsSuitsHeader />
            <RoomSuitesBanner />
            <RoomsSuitsContent />
            <RoomSuitesDesktop />
            <RoomSuitesSlider />
            <Footer />
        </>

    )
}

export default index