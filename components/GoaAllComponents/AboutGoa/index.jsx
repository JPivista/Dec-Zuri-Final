import React from 'react'

import AboutGoaBanner from './AboutGoaBanner'
import AboutGoaHeader from './AboutGoaHeader'
import AboutGoaContent from './AboutGoaContent'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'

import '../../StyledComponents'

const index = () => {
    return (
        <>
            <Header />
            <AboutGoaHeader />
            <AboutGoaBanner />
            <AboutGoaContent />
            <Footer />
        </>
    )
}

export default index