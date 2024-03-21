import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import WesternTherapiesBanner from './WesternTherapiesBanner'
import SharedHeaderMayaSpaKumarkom from '../SharedHeaderMayaSpaKumarkom'
import WesternTherapiesContent from './WesternTherapiesContent'
import WesternTherapiesTab from './WesternTherapiesTab'
import SharedSliderMayaSpaKumarkom from '../SharedSliderMayaSpaKumarkom'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "Spa Therapies/Treatments Resorts in Kumarakom, Kerala - Zuri Hotels & Resorts";
const description = "Indulge in luxury spa therapies at Zuri's certified and awarded resort spa in Kumarakom. The spa therapies and massages leave you stress-free and refreshed.";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/maya-spa/therapies/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />
            <SharedHeaderMayaSpaKumarkom />
            <WesternTherapiesBanner />
            <WesternTherapiesContent />
            <WesternTherapiesTab />
            <SharedSliderMayaSpaKumarkom />
            <Footer />
        </>

    )
}

export default index