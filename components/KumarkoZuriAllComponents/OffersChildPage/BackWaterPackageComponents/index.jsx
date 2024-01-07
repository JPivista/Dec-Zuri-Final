import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import BackWaterBanner from './BackWaterBanner'
import BackWaterKumarkomComponents from './BackWaterKumarkomComponents'

const index = () => {
    return (
        <>
            <Header />

            <BackWaterBanner />
            <BackWaterKumarkomComponents />

            <Footer />
        </>
    )
}

export default index