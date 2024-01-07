import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const MeetingBengaluruContent = () => {
    return (
        <>
            <Container className='p-0 px-lg-5 pt-5 position-relative px-2 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h4 className='py-2 pt-4 text-center'>BUSINESS HOTEL IN BANGALORE</h4>
                <Col className='position-relative'>
                    <div className='underline'>
                        <span className='down-arrow'></span>
                    </div>
                </Col>
                <p className='mt-5'>
                    An ideal location close to the IT hub in Bangalore, round-the-clock conference facilities, and a well equipped Business Centre make the Zuri one of the best hotels for meetings in Bangalore. Make the right impression by choosing the Zuri Whitefield for both formal and informal meetings or gatherings.


                </p>
            </Container >
        </>
    )
}

export default MeetingBengaluruContent