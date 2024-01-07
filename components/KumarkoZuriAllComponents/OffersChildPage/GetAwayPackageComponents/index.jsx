import React from 'react'

import Header from '../../../Shared/Header'
import Footer from '../../../Shared/Footer'
import GetAwayKumarkomComponents from './GetAwayKumarkomComponents'
import GetAwayPackageBanner from './GetAwayPackageBanner'

const index = () => {
    return (
        <>
            <Header />

            <GetAwayPackageBanner />
            <GetAwayKumarkomComponents />

            <Footer />
        </>
    )
}

export default index