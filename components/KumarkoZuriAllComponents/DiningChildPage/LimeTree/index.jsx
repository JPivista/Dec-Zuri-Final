import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'

import SharedHeader from '../SharedHeader'
import LimeTreeBanner from './LimeTreeBanner'
import LimeTreeContent from './LimeTreeContent'
import SharedSlider from '../SharedSlider'

import '../../../StyledComponents'

const index = () => {
    return (
        <>
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