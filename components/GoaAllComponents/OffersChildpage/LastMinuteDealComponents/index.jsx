import React from 'react'
import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import LastMinuteDealBanner from './LastMinuteDealBanner'
import LastMinuteWorpressPage from './LastMinuteWorpressPage'

const index = () => {
    return (
        <>
            <Header />

            <LastMinuteDealBanner />
            <LastMinuteWorpressPage />

            <Footer />
        </>
    )
}

export default index