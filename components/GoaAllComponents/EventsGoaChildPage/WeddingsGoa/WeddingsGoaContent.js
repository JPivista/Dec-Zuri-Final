import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const WeddingsGoaContent = () => {
    return (
        <Container className='p-0 px-lg-5 pt-5 position-relative px-2 text-center'>
            <Image src='/cl.png' alt='' fluid />
            <h4 className='py-2 pt-4 text-center'>
                DESTINATION WEDDING VENUE IN GOA
            </h4>
            <Col className='position-relative'>
                <div className='underline'>
                    <span className='down-arrow'></span>
                </div>
            </Col>
            <p className='mt-5'>
                A once-in-a-lifetime occasion deserves a fairy-tale location and the Zuri White Sands makes for the perfect destination wedding venue in Goa. Our expert team will cater to your every desire with special catering packages, decor & lighting and customised seating arrangements.
            </p>
        </Container>
    )
}

export default WeddingsGoaContent