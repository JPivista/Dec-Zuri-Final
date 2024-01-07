import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const MeetingsGoaContent = () => {
    return (
        <Container className='p-0 px-lg-5 pt-5 position-relative px-2 text-center'>
            <Image src='/cl.png' alt='' fluid />
            <h4 className='py-2 pt-4 text-center'>
                BUSINESS RESORT IN GOA
            </h4>
            <Col className='position-relative'>
                <div className='underline'>
                    <span className='down-arrow'></span>
                </div>
            </Col>
            <p className='mt-5'>
                Our fully equipped Business Centre and state-of-the-art banquet halls make the Zuri the preferred choice when it comes to hotels for meetings and conferences in Goa. You can also choose the smaller meeting rooms or make use of private workstations that come equipped with every modern amenity you might require.
            </p>
        </Container>
    )
}

export default MeetingsGoaContent