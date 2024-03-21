import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import GetAwayKumarkomComponents from './GetAwayKumarkomComponents'
import GetAwayPackageBanner from './GetAwayPackageBanner'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Unwind and Indulge with Our Exclusive Getaway Package";
const description = "";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/getaway-package/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />

            <GetAwayPackageBanner />
            <GetAwayKumarkomComponents />

            <Footer />
        </>
    )
}

export default index