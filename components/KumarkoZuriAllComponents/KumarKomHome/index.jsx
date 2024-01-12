'use client'
import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import KumarkomHomeHeader from './KumarkomHomeHeader'
import HomeHeroBanner from './HomeHeroBanner'
import KumarkomResort from './KumarkomResort'

import '../../StyledComponents'
import KumarkomGallery from './KumarkomGallery'
import KumarkomHomePopup from './KumarkomHomePopup'
import WhatsAppWidgetKumarkom from './WhatsappWidgetKumarkom'
import WhatsappWidgetKumarkom from './WhatsappWidgetKumarkom'
import { NextSeo } from 'next-seo'
import Head from 'next/head'


const index = () => {
    const title = "Luxury Backwater Resorts & Hotels in Kumarakom, Kerala - Zuri";
    const description =
        "Experience the backwaters of Kerala from Zuri's luxury hotel and Vembanad lake resort in Zuri Kumarakom Resorts. Revel in the beauty and splendor of Kumarakom, Kerala.";

    return (
        <>
            <NextSeo
                title={title}
                description={description}
                openGraph={{
                    url: 'https://www.url.ie/a',
                    title: title,
                    description: description,
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

            <KumarkomHomeHeader />
            <HomeHeroBanner />
            <KumarkomResort />
            <KumarkomGallery />
            <KumarkomHomePopup />
            <WhatsappWidgetKumarkom />

            <Footer />
        </>
    )
}

export default index