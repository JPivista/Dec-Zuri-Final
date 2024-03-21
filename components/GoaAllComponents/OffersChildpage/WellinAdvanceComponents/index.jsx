import React from 'react'
import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import WellinAdvanceBanner from './WellinAdvanceBanner'
import WellinPackageWordpressApi from './WellinPackageWordpressApi'

const index = () => {
    return (
        <>
            <Header />

            <WellinAdvanceBanner />
            <WellinPackageWordpressApi />

            <Footer />
        </>
    )
}

export default index