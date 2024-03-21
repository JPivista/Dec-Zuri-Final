import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const MayaSpaGoaContenet = () => {
    return (
        <Container className='p-md-0 p-2 pt-5 '>

            <Col className='text-center pt-5 px-lg-5'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-4 text-center'>MAYA SPA</h6>
                <p>
                    Ayurveda lays down the basic foundations of good health — purity of the mind, body and soul. At The Zuri White Sands, Goa Resort & Casino, the MAYA SPA, a Premium Luxury Spa is the perfect destination for those looking for some much needed body and soul pampering. A wide range of Ayurveda massages, treatments and amenities like separate steam rooms, saunas and a jacuzzi (separate for men and women) make this spa an ideal choice for those looking for rejuvenation.
                </p>

                <p>
                    The MAYA Spa is Zuri’s own signature line of spas, whose sole aim is to refresh, rejuvenate and re-energize you. Our luxury spa hotel in Goa offers Ayurveda and Western style massages and treatments, designed to make you unwind, relax and to keep you in shape.
                </p>
            </Col>

            <Col className='text-center pt-5'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-4 text-center'>SPA TREATMENT</h6>
            </Col>

            <Row className='d-flex flex-md-row flex-column justify-content-center align-items-center' >
                <Col md={5}>
                    <ul>
                        <li>Maya Body Care</li>
                        <li>Maya Healing Therapies</li>
                    </ul>
                </Col>

                <Col md={3}>
                    <ul>
                        <li>Maya Signature Therapies</li>
                        <li>Maya Yoga Packages</li>
                    </ul>
                </Col>
            </Row>
        </Container >
    )
}

export default MayaSpaGoaContenet
