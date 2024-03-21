import EventsContactUsWordpressForm from '@/components/EventsForms/EventsContactUsWordpressForm'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const MeetingsBengaluruForm = () => {
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
        </>
    )
}

export default MeetingsBengaluruForm