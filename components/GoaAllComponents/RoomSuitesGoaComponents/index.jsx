import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import ZuriGoaRoomSuitesHeader from './ZuriGoaRoomSuitesHeader'
import ZuriGoaRoomSuitesBanner from './ZuriGoaRoomSuitesBanner'
import ZuriGoaRoomSuitesContent from './ZuriGoaRoomSuitesContent'
import ZuriGoaRoomSuitesSlider from './ZuriGoaRoomSuitesSlider'

const index = () => {
    return (
        <>

            <Header />

            <ZuriGoaRoomSuitesHeader />
            <ZuriGoaRoomSuitesBanner />
            <ZuriGoaRoomSuitesContent />
            <ZuriGoaRoomSuitesSlider />

            <Footer />
        </>
    )
}

export default index