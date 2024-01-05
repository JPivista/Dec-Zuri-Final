import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import '../../../app/globals.css'

const ComplimentaryAmenitiesHeader = () => {
    return (
        <>
            <Container className='custom-kumarkom-menu-container'>

                <h3 className='text-center py-md-2 text-custom-grey'>THE ZURI KUMARAKOM, KERALA RESORT & SPA</h3>

                <Col className='d-flex flex-row justify-content-center align-items-center py-3 d-md-flex d-none'>
                    <Link href="/lake-resorts-in-kumarakom"
                        className='text-decoration-none text-black '>
                        <h6 className='m-0'>Zuri Kumarakom</h6>
                    </Link> &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/rooms-suites"
                        className='text-decoration-none text-black '>
                        <h6 className='m-0 '>Room & Suites</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/complimentary-amenities"
                        className='text-decoration-none text-black kumarkom-active-menu'>
                        <h6 className='m-0'>Complimentary Amenities</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/restaurants"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Dining</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/maya-spa"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Maya Spa</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/events"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Events</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/gallery/"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Gallery</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/offers"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>Offers</h6>
                    </Link>
                    &nbsp; / &nbsp;

                    <Link href="/lake-resorts-in-kumarakom/destination"
                        className='text-decoration-none text-black'>
                        <h6 className='m-0'>About Kumarakom</h6>
                    </Link>
                </Col>

                {/* Mobile Menu */}

                <Col className='d-md-none d-block'>
                    <Row className='p-2s text-center d-flex flex-row'>
                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom"
                                className='text-decoration-none text-black '>
                                <h6 className='m-0 menu-font'>Zuri Kumarakom</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/rooms-suites"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Room & Suites</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/complimentary-amenities"
                                className='text-decoration-none text-black kumarkom-active-menu'>
                                <h6 className='m-0 menu-font '>Complimentary Amenities</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/restaurants"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font '>Dining</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/maya-spa"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Maya Spa</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/events"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Events</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/gallery/"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Gallery</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/offers"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>Offers</h6>
                            </Link>
                        </Col>

                        <Col xs={6}>
                            <Link href="/lake-resorts-in-kumarakom/destination"
                                className='text-decoration-none text-black'>
                                <h6 className='m-0 menu-font'>About Kumarakom</h6>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Container>
        </>
    )
}

export default ComplimentaryAmenitiesHeader