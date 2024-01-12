'use client'
import React from 'react'

import Header from '../Shared/HeaderHome'
import Footer from '../Shared/Footer'
import HomeSliderBanner from './HomeSliderBanner'
import PropertiesSlider from './PropertiesSlider'
import HomeOffers from './HomeOffers'
import Gallery from './Gallery'
import { NextSeo } from 'next-seo'

const index = () => {
    return (
        <>

            <NextSeo
                title="Luxury 5 Star Hotels & Resorts in India - Zuri Hotels & Resorts	"
                description="Welcome to one of the best Luxury 5 star hotels & resorts in India for an experience ‘far beyond expectations’. And discover the true meaning of ‘Zuri’."
                canonical="https://www.canonical.ie/"
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: 'Luxury 5 Star Hotels & Resorts in India - Zuri Hotels & Resorts	',
                    description: '',
                    images: [
                        {
                            url: '',
                            width: 800,
                            height: 600,
                            alt: 'What Drives Us',
                            type: 'image/jpeg',
                        },
                        {
                            url: '',
                            width: 900,
                            height: 800,
                            alt: 'What Drives Us',
                            type: 'image/jpeg',
                        },
                        { url: '' },
                        { url: '' },
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

            <HomeSliderBanner />
            <PropertiesSlider />
            <HomeOffers />
            <Gallery />

            <Footer />
        </>
    )
}

export default index