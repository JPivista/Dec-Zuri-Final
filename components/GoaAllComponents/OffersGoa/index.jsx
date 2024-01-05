import React from 'react'

import OffersGoaHeader from './OffersGoaHeader'
import OffersGoaBanner from './OffersGoaBanner'
import OffersGoaContent from './OffersGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
    return (
        <>
            <Header />
            <OffersGoaHeader />
            <OffersGoaBanner />
            <OffersGoaContent />
            <Footer />
        </>
    )
}

export default index