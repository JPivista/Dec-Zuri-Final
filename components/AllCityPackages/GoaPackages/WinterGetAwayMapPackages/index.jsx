import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import WinterGetAwayMapPackagesBanner from './WinterGetAwayMapPackagesBanner'
import WinterGetAwayMapContentWordpress from './WinterGetAwayMapContentWordpress'

const index = () => {
    return (
        <>
            <Header />

            <WinterGetAwayMapPackagesBanner />
            <WinterGetAwayMapContentWordpress />

            <Footer />
        </>
    )
}

export default index