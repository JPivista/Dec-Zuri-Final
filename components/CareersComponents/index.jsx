import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import CareersBanner from './CareersBanner'
import CareersContent from './CareersContent'
import CareerForm from '../Forms/CareerForm'

const index = () => {
    return (
        <>
            <Header />
            <CareersBanner />
            <CareersContent />
            <CareerForm />
            <Footer />
        </>
    )
}

export default index