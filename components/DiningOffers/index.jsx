import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import DiningOffersAllBanner from './DiningOffersAllBanner'
import DiningOffersAllContent from './DiningOffersAllContent'

const index = () => {
    return (
        <>
            <Header />
            <DiningOffersAllBanner />
            <DiningOffersAllContent />
            <Footer />
        </>
    )
}

export default index