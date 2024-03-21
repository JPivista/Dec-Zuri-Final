import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const ZuriGoaRoomSuitesContent = () => {

    const AmitiesBg = {
        background: '#cab17b'
    }

    return (
        <>
            <Container className='text-center pt-5'>
                <Col className='d-flex flex-column align-items-center px-md-5'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>GOA’S PREMIER 5 STAR BEACH RESORT</h6>
                    <p>
                        154 well-furnished, fully equipped and well-appointed rooms and 4 luxurious suites make up our 5-Star Resort in Goa. The elegantly furnished rooms with private balconies overlook beautiful surroundings including the pool and the lush gardens. The Zuri 5 star hotel in South Goa has luxurious and spacious suites with a spectacular view of the gardens and the sea hereby providing the perfect setting for your fairytale vacation.
                    </p>
                </Col>

                <Col className='my-5 py-5 text-center' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        Complimentary broadband access | LCD TV | Satellite/cable TV | Daily newspaper | Executive writing desk |
                        <br />
                        IDD Telephone | Electronic safe | Daily complimentary water | Tea and coffee making facilities |
                        <br />
                        Complimentary breakfast | Mini-bar | Premium toiletries | Hair dryer | Complimentary shoeshine service |
                        <br />
                        Bath tub
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default ZuriGoaRoomSuitesContent