import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import BackWaterBanner from './BackWaterBanner'
import BackWaterKumarkomComponents from './BackWaterKumarkomComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Backwater Bliss: Explore Tranquility with Our Exclusive Backwater Package";
const description = "";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/offers/backwater-package/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />

            <BackWaterBanner />
            <BackWaterKumarkomComponents />

            <Footer />
        </>
    )
}

export default index