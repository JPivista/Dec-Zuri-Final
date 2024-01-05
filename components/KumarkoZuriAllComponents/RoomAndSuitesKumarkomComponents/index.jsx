import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import RoomsSuitsHeader from './RoomsSuitsHeader'
import RoomSuitesBanner from './RoomSuitesBanner'
import RoomsSuitsContent from './RoomsSuitsContent'
import RoomSuitesSlider from './RoomSuitesSlider'
import RoomSuitesDesktop from './RoomSuitesDesktop'

const index = () => {
    return (
        <>
            <Header />

            <RoomsSuitsHeader />
            <RoomSuitesBanner />
            <RoomsSuitsContent />
            <RoomSuitesDesktop />
            <RoomSuitesSlider />

            <Footer />
        </>

    )
}

export default index