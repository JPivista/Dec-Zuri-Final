'use client'
import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import RoomsSuitsHeader from './RoomsSuitsHeader'
import RoomSuitesBanner from './RoomSuitesBanner'
import RoomsSuitsContent from './RoomsSuitsContent'
import RoomSuitesSlider from './RoomSuitesSlider'
import RoomSuitesDesktop from './RoomSuitesDesktop'
import { NextSeo } from 'next-seo'

const index = () => {
    return (
        <>

            <NextSeo
                title="Room & Suites in luxury Resorts in Kumarakom - Zuri Kumarakom"
                description="Stay in one of the most exotic backwater destinations in Kerala. The Zuri Kumarakom, the most picturesque 5 start hotel and resort, offers a variety of luxury rooms."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Room & Suites in luxury Resorts in Kumarakom - Zuri Kumarakom',
                    description: '',
                    images: [
                        {
                            url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png',
                            width: 800,
                            height: 600,
                            alt: 'What Drives Us',
                            type: 'image/jpeg',
                        },
                        {
                            url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png',
                            width: 900,
                            height: 800,
                            alt: 'What Drives Us',
                            type: 'image/jpeg',
                        },
                        { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png' },
                        { url: 'https://greenfoundation.in/wp-content/uploads/2023/02/Ecological_reasons.png' },
                    ],
                    siteName: 'SiteName',
                }}
                twitter={{
                    handle: '@handle',
                    site: '@site',
                    cardType: 'summary_large_image',
                }}
            />

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