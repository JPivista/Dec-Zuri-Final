import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import '../StyledComponents'

import StayOffersBanner from './StayOffersBanner'
import KumarkomStayOffers from './KumarkomStayOffers'
import GoaStayOffers from './GoaStayOffers'
import BengaluruStayOffers from './BengaluruStayOffers'

const index = () => {
    return (
        <>

            <Header />
            <StayOffersBanner />
            <KumarkomStayOffers />
            <GoaStayOffers />
            <BengaluruStayOffers />
            <Footer />

        </>
    )
}

export default index