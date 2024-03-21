import React from 'react'

import Header from '../Shared/Header'
import Footer from '../Shared/Footer'
import BlogContentWordpress from './BlogContentWordpress'

import '../StyledComponents'

const index = () => {
    return (
        <>
            <Header />

            <BlogContentWordpress />

            <Footer />
        </>
    )
}

export default index