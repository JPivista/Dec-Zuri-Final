import React from 'react'

import Header from '../../components/Shared/Header'
import Footer from '../../components/Shared/Footer'
import ContactUsBanner from './ContactUsBanner'
import ContactUsTap from './ContactUsTap'
import ContactForm from './ContactForm'

const index = () => {
    return (
        <>
            <Header />
            <ContactUsBanner />
            <ContactUsTap />
            <ContactForm />
            <Footer />
        </>
    )
}

export default index