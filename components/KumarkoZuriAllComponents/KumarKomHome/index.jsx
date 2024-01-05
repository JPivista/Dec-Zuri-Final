import React from 'react'

import Header from '../../Shared/Header'
import Footer from '../../Shared/Footer'
import KumarkomHomeHeader from './KumarkomHomeHeader'
import HomeHeroBanner from './HomeHeroBanner'
import KumarkomResort from './KumarkomResort'

import '../../StyledComponents'
import KumarkomGallery from './KumarkomGallery'
import KumarkomHomePopup from './KumarkomHomePopup'


const index = () => {
    return (
        <>
            <Header />

            <KumarkomHomeHeader />
            <HomeHeroBanner />
            <KumarkomResort />
            <KumarkomGallery />
            <KumarkomHomePopup />

            <Footer />
        </>
    )
}

export default index