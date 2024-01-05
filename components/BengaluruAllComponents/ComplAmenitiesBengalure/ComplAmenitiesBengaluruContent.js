import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const ComplAmenitiesBengaluruContent = () => {
    return (
        <>
            <Container className='p-0 '>
                <Col className='d-flex flex-column align-items-center text-center p-2 p-lg-0'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>THE ZURI WHITEFIELD, BENGALURU – COMPLIMENTARY AMENITIES</h6>

                    <p>
                        The Zuri Whitefield Bengaluru provides you with the finest quality of services whether you are on a family holiday, a personal retreat or conducting business. We ensure that your stay is comfortable and that all your needs, the amenities you expect and the extras you deserve are delivered with the highest quality standards.
                    </p>
                </Col>
            </Container>


            {/* Desktop View */}
            <Container className='p-0 my-5'>
                <Col className='d-flex flex-column align-items-center '>
                    <h6 className='py-2 text-center'>OFFERS</h6>
                    <Col className='position-relative'>
                        <div className='underline'>
                            <span className='down-arrow'></span>
                        </div>
                    </Col>
                </Col>


                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>ZURI STANDARD ROOM</h6>
                            </Col>
                            <p>
                                Area – 325 sq. ft, 30.2 sq. mts.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/comp-amenities/zuri_room_thumb-1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/bengaluru/comp-amenities/club_room_thumb-2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>CLUB ROOM</h6>
                            </Col>
                            <p>
                                Area – 325 sq. ft, 30.2 sq. mts.
                            </p>
                        </Col>
                    </Col>
                </Col>

                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>JUNIOR SUITE</h6>
                            </Col>
                            <p>
                                Area – 686 sq. ft, 63.7 sq. mts.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/comp-amenities/junior_suite_thumb_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/bengaluru/comp-amenities/presidential_suite_thumb_4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>ZURI PRESIDENTIAL SUITE</h6>
                            </Col>
                            <p>
                                Area – 1236 sq. ft, 114.8 sq. mts.
                            </p>
                        </Col>
                    </Col>
                </Col>
            </Container>

            <Container className='p-0 d-flex flex-column d-md-none'>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>ZURI STANDARD ROOM</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/comp-amenities/zuri_room_thumb-1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Area – 325 sq. ft, 30.2 sq. mts.
                        </p>
                    </Col>
                </Col>

                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>CLUB ROOM</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/comp-amenities/club_room_thumb-2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Area – 325 sq. ft, 30.2 sq. mts.
                        </p>
                    </Col>
                </Col>

                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>JUNIOR SUITE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/comp-amenities/junior_suite_thumb_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Area – 686 sq. ft, 63.7 sq. mts.
                        </p>
                    </Col>
                </Col>

                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>ZURI PRESIDENTIAL SUITE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/comp-amenities/presidential_suite_thumb_4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>
                        <p>
                            Area – 1236 sq. ft, 114.8 sq. mts.
                        </p>
                    </Col>
                </Col>
            </Container>

            <Container className='p-md-0 p-2 py-4'>
                <Col>
                    <h4 className='text-black'>ADVANTAGE:</h4>
                    <ul>
                        <li>In room safe</li>
                        <li>Tea/coffee amenities</li>
                        <li>Hair Dryer</li>
                        <li>LCD TV</li>
                        <li>Mini Bar</li>
                        <li>02 water bottles</li>
                        <li>Access to Gym and Pool</li>
                        <li>Newspaper</li>
                        <li>DVD Player on request</li>
                        <li>Living cum Dining room *( Only for Junior Suite and Presidential Suite)</li>
                        <li>Terrace with Jacuzzi*( Only for Presidential Suite)</li>
                    </ul>
                </Col>

                <Col className='pt-5'>
                    <h4 className='text-black'>BENEFITS FOR ZURI STANDARD ROOM:</h4>

                    <ul>
                        <li>Comp B/fast</li>
                        <li>Comp Wi-Fi</li>
                    </ul>
                </Col>

                <Col className='pt-5'>
                    <h4 className='text-black'>BENEFITS FOR ZURI CLUB, JUNIOR SUITE, PRESIDENTIAL SUITE:</h4>

                    <ul>
                        <li>Comp B/fast</li>
                        <li>Comp Wi-Fi</li>
                        <li>1 way Airport transfer</li>
                        <li>Happy hours at Bling (1900 – 2030 Hrs.)</li>
                        <li>Cookies</li>
                        <li>Fruit Platter</li>
                        <li>01 Wine bottle (375 ml)</li>
                        <li>Chocolate Platter</li>
                        <li>2 way Airport transfers *( Only for Junior Suite and Presidential Suite)</li>
                        <li>15% dis on F&B and Laundry 25% on SPA*( Only for and Presidential Suite)</li>
                        <li>Exotic fruit Basket *( Only for Presidential Suite)</li>
                    </ul>
                </Col>

                <Col className='pt-5'>
                    <h4 className='text-black'>LONG STAY:</h4>
                    <ul>
                        <li>Fruit Platter and Cookies and Chocolate platter Once in 5 days *( NA to Junior Suite and Presidential Suite)</li>
                    </ul>
                </Col>

                <Col className='pt-5'>
                    <h4 className='text-black'>VIP:</h4>
                    <ul>
                        <li>
                            Exotic fruit basket, Cookies, Chocolate platter and 01 Wine bottle (375 ml) *( NA to Junior Suite and Presidential Suite)
                        </li>
                    </ul>
                </Col>

                <Col className='py-5'>
                    <h4 className='text-black'>REPEAT GUEST:</h4>
                    <ul>
                        <li>
                            Fruit Platter Cookies and Chocolate Platter *( NA to Junior Suite and Presidential Suite)
                        </li>
                    </ul>
                </Col>

            </Container>
        </>
    )
}

export default ComplAmenitiesBengaluruContent