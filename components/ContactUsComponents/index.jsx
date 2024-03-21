import React from 'react'

import Header from '../../components/Shared/Header'
import Footer from '../../components/Shared/Footer'
import ContactUsBanner from './ContactUsBanner'
import ContactUsTap from './ContactUsTap'
import ContactForm from './ContactForm'
import ContactWordpressFeedbackForm from './ContactWordpressFeedbackForm'

const index = () => {
    return (
        <>
            <Header />
            <ContactUsBanner />
            <ContactUsTap />
            {/* <ContactForm /> */}
            <ContactWordpressFeedbackForm />
            <Footer />
        </>
    )
}

export default index