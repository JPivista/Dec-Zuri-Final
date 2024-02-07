import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import SharedHeader from '../SharedHeader'
import LimeTreeBanner from './LimeTreeBanner'
import LimeTreeContent from './LimeTreeContent'
import SharedSlider from '../SharedSlider'

import '../../../StyledComponents'
import NextSeo from '@/components/SeoComponents/Seo'

const title = "All-day Dining Restaurants in Kumarakom | Lime Tree Restaurant in Zuri Hotels & Resorts	";
const description = "Relish some of the regional classics and favourites at our all-day restaurant in Kumarakom. Facing the lagoon, Lime Tree is the ideal spot for a laid-back meal.		";
const path = "https://www.thezurihotels.com/lake-resorts-in-kumarakom/restaurants/lime-tree/		";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>
            <NextSeo title={title} description={description} path={path} metaImage={metaImage} />

            <Header />
            <SharedHeader />
            <LimeTreeBanner />
            <LimeTreeContent />
            <SharedSlider />
            <Footer />
        </>
    )
}

export default index