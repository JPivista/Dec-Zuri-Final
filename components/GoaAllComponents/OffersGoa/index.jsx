import React from 'react'

import OffersGoaHeader from './OffersGoaHeader'
import OffersGoaBanner from './OffersGoaBanner'
import OffersGoaContent from './OffersGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

import Seo from '../../SeoComponents/Seo'


const title = "Goa Resort Offers | Hotel Deals in Goa | Offers & Packages at Zuri Whitesands";
const description = "Travel to one of the favourite holiday destinations in India, Goa. Explore our hotel & resort deals, offers and packages for our Goa beach hotel & resort.";
const path = "https://www.thezurihotels.com/beach-resorts-in-goa/offers/";
const metaImage = "/zuri_logo_social_media.png";

const index = () => {
    return (
        <>

            <Seo title={title} description={description} path={path} metaImage={metaImage} />
       
            <Header />
            <OffersGoaHeader />
            <OffersGoaBanner />
            <OffersGoaContent />
            <Footer />
        </>
    )
}

export default index