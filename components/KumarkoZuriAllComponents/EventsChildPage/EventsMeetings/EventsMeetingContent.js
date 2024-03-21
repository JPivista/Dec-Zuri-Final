import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const EventsMeetingContent = () => {
    return (
        <>
            <Container className='p-0 px-lg-5 pt-5 position-relative px-2 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h4 className='py-2 pt-4 text-center'>BUSINESS HOTEL IN KERALA</h4>
                <Col className='position-relative'>
                    <div className='underline'>
                        <span className='down-arrow'></span>
                    </div>
                </Col>
                <p className='mt-5'>
                    With access to every modern amenity including high-speed internet, projectors and laser printers, the Zuri is one of the best hotels for meetings in Kumarakom. We know that every minute is important when it comes to conferences or business meetings. With sophisticated interiors and verdant green settings on the Vembanad Lake, the Zuri offers the best meeting facilities in Kumarakom.
                </p>
            </Container>
        </>
    )
}

export default EventsMeetingContent