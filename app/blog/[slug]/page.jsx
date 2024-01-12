import React from 'react'
import { Container } from 'react-bootstrap'

import Posts from './Posts'

import Header from '../../../components/Shared/Header'
import Footer from '../../../components/Shared/Footer'

const page = ({ params }) => {
    return (
        <>
            <Header />
            <Container>
                <Posts slug={params.slug} />
            </Container>
            <Footer />
        </>
    )
}

export default page