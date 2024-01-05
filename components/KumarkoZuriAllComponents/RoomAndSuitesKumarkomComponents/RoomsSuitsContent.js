import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const RoomsSuitsContent = () => {


    const AmitiesBg = {
        background: '#cab17b'
    }

    return (
        <>
            <Container className='p-0 py-4 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>HAVE A 5 STAR EXPERIENCE IN KUMARAKOM</h6>

                <Col className='px-5'>
                    <p>
                        While the views of serene backwaters and lush greenery is a treat to your eyes, our accommodation will be a treat to all your senses as well. Our collection of luxurious rooms, villas and cottages are aesthetically furnished and beautifully designed to offer you every comfort and luxury. Choose from our splendid lagoon facing rooms or luxurious villas that come with a private pool.
                    </p>

                    <p>
                        The Zuri five star deluxe Resort and <b>Spa in Kumarakom</b> offers 72 rooms which include 18 Zuri Rooms, 16 Zuri Deluxe Rooms, 28 Zuri Cottages and 10 Zuri Presidential Pool Villas, for a memorable stay.
                    </p>
                    <p>
                        Our luxury rooms in Kumarakom are ideal for both leisure seekers and business travellers.
                    </p>
                    <p>
                        The guests can check-in, at 15:00 hours and check-out, at 11:00 hours, based on the duration of their stay.
                    </p>

                    <p>
                        Note: The guests can check-in, at 15:00 hours and check-out, at 11:00 hours, based on the duration of their stay. Early check-in, and late check-out, can be facilitated, subject to availability.
                    </p>
                </Col>

                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        24-hour Room Service | 32″ LCD Television | Mini Bar | Wi-Fi Access | Air Conditioning | Tea and Coffee Maker |
                        <br />
                        Hair
                        <br />
                        Dryer | Bathtub | In-Room Safe | Complimentary Breakfast
                    </p>
                </Col>
                <Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>ROOM TYPES</h6>
                </Col>
            </Container>
        </>
    )
}

export default RoomsSuitsContent