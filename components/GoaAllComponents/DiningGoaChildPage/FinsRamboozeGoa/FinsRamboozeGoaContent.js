import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const FinsRamboozeGoaContent = () => {
    return (
        <Container className='p-lg-0 p-2 px-lg-5 text-center'>
            <Col className='d-flex flex-column align-items-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>FINS & RAMBOOZE – A BEACH RESTAURANT IN GOA</h6>
                <p>
                    Walk down towards the beach to Fins & Rambooze, the beach-front, restaurant and bar when in Goa. A must-do at The Zuri White Sands: a delectable dinner with champagne and grilled lobsters, usually served with a scenic sunset creating a rather romantic feel. Have fun with the a la carte menu as well us our Goan seafood speciality, especially the Ambotik and Goan fish curry rice.
                </p>
            </Col>
        </Container>
    )
}

export default FinsRamboozeGoaContent