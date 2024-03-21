import React from 'react'
import Footer from '../Shared/Footer/Footer'

import Header from '../../components/Shared/Header'
import AboutUsBannerAndContent from './AboutUsBannerAndContent'
import AboutUsContent from './AboutUsContent'

const index = () => {
    return (
        <>
            <Header />
            <AboutUsBannerAndContent />
            <AboutUsContent />
            <Footer />
        </>
    )
}

export default index