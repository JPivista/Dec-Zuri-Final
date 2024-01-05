import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <Container className='p-0 mt-5' style={{ background: '#eee' }}>
                <Row className='p-3'>
                    <Col md={4} className='text-center'>
                        <h4 className='text-black '>Guest Reviews</h4>
                    </Col>

                    <Col md={4}>
                        <p>
                            4.5 out of 5.0 (47 Reviews)
                        </p>
                    </Col>

                    <Col md={4}>
                        <h5>
                            99% of guests recommend this hotel
                        </h5>
                        <p>
                            Here&apos;s what our guests have to say about their stay at the hotel. Read More
                        </p>
                    </Col>
                </Row>
            </Container>

            <Container className='p-md-0 p-3'>
                <hr />


                <Row className='d-flex flex-row flex-wrap'>
                    <Col md={3} xs={6}>
                        <ul className='footer-ul'>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Awards
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Sitemap
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Classification
                                </Link>
                            </li>
                        </ul>

                    </Col>
                    <Col md={3} xs={6}>
                        <ul className='footer-ul'>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Careers
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Contact Us
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Review
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Gallery
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    Privacy policy
                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3} >
                        <ul className='footer-ul px-md-1'>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    The Zuri Kumarakom, Kerala Resort & Spa
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    The Zuri White Sands, Goa Resort & Casino
                                </Link>
                            </li>
                            <li>
                                <Link href=""
                                    className='text-black text-decoration-none'>
                                    The Zuri Whitefield, Bengaluru
                                </Link>
                            </li>
                            <li className='pt-3'>
                                <Link href="https://preferredhotels.com/hotels/india/zuri-whitefield-bengaluru"
                                    className='text-black text-decoration-none'
                                    target='_blank'
                                >
                                    <Image src="/footer/iprefer_logo_comp.jpg" alt="" />

                                </Link>
                            </li>
                        </ul>
                    </Col>
                    <Col md={3}>
                    </Col>
                </Row>
                <hr />

                E-brochures &gt; The Zuri Whitefield, Bengaluru / The Zuri Kumarakom, Kerala Resort & Spa / The Zuri White Sands, Goa Resort & Casino
            </Container>


            <Container fluid className='p-3 text-center bg-black'>
                <h6 className='text-white'>© 2023 ZURI HOTELS & RESORTS, All rights Reserved.</h6>
            </Container>
        </>
    )
}

export default Footer