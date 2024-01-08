import EventsContactUsWordpressForm from '@/components/EventsForms/EventsContactUsWordpressForm'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const EventsWeddingForm = () => {

    const bgBusinessFacilities = {
        background: '#cab17b',
    }

    return (
        <>
            <Container className='p-0 border-2 border my-lg-5 p-lg-5 p-2'>
                <Col>
                    <h4 className='text-center'>CONNECT WITH US</h4>
                </Col>

                <Col>
                    <EventsContactUsWordpressForm />
                </Col>
            </Container>

            <Container fluid className='text-center py-5' style={bgBusinessFacilities} >
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center text-black'>BUSINESS FACILITIES</h6>
                <p className='text-black'>Internet Cafe | Wi-Fi | Fax | Photocopier | Scanner | Secretarial Service | Laser Printer | Binding Facility | LCD Projector with drop-down screen</p>
            </Container>
        </>
    )
}

export default EventsWeddingForm