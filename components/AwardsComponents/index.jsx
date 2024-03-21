import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'

import AwardsBanner from './AwardsBanner'
import AwarsContent from './AwarsContent'

const index = () => {
    return (
        <>
            <Header />
            <AwardsBanner />
            <AwarsContent />
            <Footer />
        </>
    )
}

export default index