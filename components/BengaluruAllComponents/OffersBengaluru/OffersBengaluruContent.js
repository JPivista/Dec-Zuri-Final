import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import Link from 'next/link'


const OffersBengaluruContent = () => {
    return (
        <>
            <Container className='p-0 py-5 text-center d-md-block d-none'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>BENEFIT FROM OUR SPECIAL OFFERS IN BENGALURU</h6>

                <h6 className='mt-4 d-inline-block border border-3 border-top-0 border-end-0 border-start-0 pb-2 '>STAY OFFERS</h6>

                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>PREFERRED ADVANCE PURCHASE</h6>
                            </Col>
                            <p>
                                Book your stay at the Zuri Whitefield, Bengaluru 30 Days (or more) in advance and get an exciting 30% off on Best Available Rates.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/offers/preferred-advance-purchase/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>

                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/offers/the_advance_deal_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>


                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/bengaluru/offers/stay_back_deal_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>STAY MORE, SAVE MORE</h6>
                            </Col>
                            <p>
                                Stay for 3 nights at the Zuri Whitefield, Bengaluru and enjoy 20% off your room.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/offers/stay-more-save-more/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row mt-5'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>LAST MINUTE STEAL</h6>
                            </Col>
                            <p>
                                Book your stay at the Whitefield, Bengaluru 0-7 days in advance and enjoy a 15% off your room.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/offers/last-minute-steal/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>

                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/offers/the_last_minute_deal_thumb_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>
                </Col>
            </Container>

            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none'>
                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center'>BENEFIT FROM OUR SPECIAL OFFERS IN BENGALURU</h6>
                </Col>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>PREFERRED ADVANCE PURCHASE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/offers/the_advance_deal_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Book your stay at the Zuri Whitefield, Bengaluru 30 Days (or more) in advance and get an exciting 30% off on Best Available Rates.
                        </p>
                        <Link href="/hotels-in-bengaluru/offers/preferred-advance-purchase/"
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p className=' mb-0 font11px lh-sm text-white'>

                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>STAY MORE, SAVE MORE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/offers/stay_back_deal_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Stay for 3 nights at the Zuri Whitefield, Bengaluru and enjoy 20% off your room.
                        </p>
                        <Link href="/hotels-in-bengaluru/offers/stay-more-save-more/"
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p className=' mb-0 font11px lh-sm text-white'>

                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>LAST MINUTE STEAL</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/offers/the_last_minute_deal_thumb_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Book your stay at the Whitefield, Bengaluru 0-7 days in advance and enjoy a 15% off your room.
                        </p>
                        <Link href="/hotels-in-bengaluru/offers/last-minute-steal/"
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p className=' mb-0 font11px lh-sm text-white'>

                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default OffersBengaluruContent