import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const BengaluruStayOffers = () => {
    return (
        <>
            <Container className='mt-5'>
                <h3 className='text-center pt-5 text-black '>
                    BENGALURU
                </h3>
                <Col className="underline-center-all">
                </Col>

            </Container>

            <Container className='d-md-flex flex-column d-none mt-3'>
                <Col >
                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/all_package_img/prefered_advnce_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    PREFERRED ADVANCE PURCHASE
                                </h6>
                            </Col>
                            <p>
                                Book your stay at the Zuri Whitefield, Bengaluru 30 Days (or more) in advance and get
                                an exciting 25% off on Best Available Rates.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/offers/preferred-advance-purchase/"
                                    className='bg-black text-center rounded-circle text-decoration-none p-1 '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>

                <Col className='d-flex flex-md-row '>
                    <Col md={7} className='text-md-end text-center pe-md-4'>
                        <Col className='d-inline-block'>
                            <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                            <h6 className='text-center'>
                                STAY MORE, SAVE MORE
                            </h6>
                        </Col>
                        <p>
                            Stay for 3 nights at the Zuri Whitefield, Bengaluru and enjoy 20% off your room.
                        </p>
                        <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                            <Link href="/hotels-in-bengaluru/offers/stay-more-save-more/"
                                className='bg-black text-center rounded-circle text-decoration-none p-1 '>
                                <p
                                    className='m-0 lh-sm text-white btn-circle'
                                    style={{ fontSize: '11px' }}>
                                    KNOW<br /> MORE
                                </p>
                            </Link>
                        </Col>
                    </Col>
                    <Col className='d-flex flex-wrap align-content-center '>
                        <Image src='/all_package_img/stay_more_save_more_thumb.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                    </Col>
                </Col>

                <Col >
                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/all_package_img/last_minute_steal.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    LAST MINUTE STEAL
                                </h6>
                            </Col>
                            <p>
                                Book your stay at the Whitefield, Bengaluru 0-7 days in advance and enjoy a 15% off
                                your room.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/offers/last-minute-steal/"
                                    className='bg-black text-center rounded-circle text-decoration-none p-1 '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle'
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Container>


            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none ' >
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>PREFERRED ADVANCE PURCHASE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/prefered_advnce_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Book your stay at the Zuri Whitefield, Bengaluru 30 Days (or more) in advance and get
                            an exciting 25% off on Best Available Rates.
                        </p>
                        <Link
                            href="/hotels-in-bengaluru/offers/preferred-advance-purchase/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>STAY MORE, SAVE MORE
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/stay_more_save_more_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Stay for 3 nights at the Zuri Whitefield, Bengaluru and enjoy 20% off your room.
                        </p>
                        <Link href="/hotels-in-bengaluru/offers/stay-more-save-more/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>


                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                LAST MINUTE STEAL
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/all_package_img/last_minute_steal.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Book your stay at the Whitefield, Bengaluru 0-7 days in advance and enjoy a 15% off
                            your room.
                        </p>
                        <Link href="/hotels-in-bengaluru/offers/last-minute-steal/"
                            className='bg-black text-center rounded-circle text-decoration-none p-1'>
                            <p
                                className='m-0 lh-sm text-white btn-circle'
                                style={{ fontSize: '11px' }}>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container >
        </>
    )
}

export default BengaluruStayOffers