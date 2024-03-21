import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'


const PoolVillaContent = () => {
    const AmitiesBg = {
        background: '#cab17b'
    }

    const bookNow = {
        background: 'purple'
    }

    return (
        <>
            <Container className='p-0 py-4 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>INDULGE AT THE PRIVATE POOL VILLAS</h6>

                <Col className='px-5'>
                    <p>
                        The Zuri prides itself on being one of the few resorts with private pool villas in Kumarakom, Kerala. Spread out over 70 square metres, the Presidential Villa comprises of a living and dining room, master bedroom, semi-outdoor bathroom and a private garden overlooking an independent pool. Make memories with your loved ones while surrounded by the pristine beauty of <Link href="/lake-resorts-in-kumarakom/" className='text-black text-decoration-none'>Kerala’s backwaters</Link> and the absolute privacy that Zuri gives you.
                    </p>

                    <p>
                        Note: The guests can Check-in at 3:00PM and Check-out at 11:00AM based on the duration of their stay.
                    </p>
                </Col>

                <Col className='my-5 py-5' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        International Direct Dialling | 24-hour Room Service | 32″ LCD Television | Complimentary Breakfast | Mini Bar
                        <br />
                        | Wi-Fi Access | Air Conditioning | Tea and Coffee Maker | Hair Dryer | Bathtub | Iron and Ironing Board
                        <br />
                        | In-Room Safe | Daily Newspaper


                    </p>
                    <Link
                        href="https://be.synxis.com/?_ga=2.56530732.62180047.1693482265-2038087003.1664255723&_gac=1.161572430.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-02&chain=17869&child=0&currency=INR&depart=2023-09-03&hotel=64786&level=hotel&locale=en-US&rooms=1"
                        target='_blank'
                        className='text-decoration-none'
                    >
                        <p className='text-white d-inline-block px-3 py-2' style={bookNow}>
                            Book Now
                        </p>

                    </Link>
                </Col>
                <Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>ROOM TYPES</h6>

                </Col>
            </Container>
        </>
    )
}

export default PoolVillaContent