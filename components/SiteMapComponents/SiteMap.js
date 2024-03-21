import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const SiteMap = () => {
    return (
        <>
            <Container className='custom-kumarkom-menu-container' style={{}}>
                <Col className='text-center pb-3'>
                    <h3 className='text-custom-grey'>
                        SITEMAP
                    </h3>
                </Col>

                <Row>
                    <Col className='border-1 border-end border-black border-opacity-25 px-5'>
                        <h5>
                            <Link href="/lake-resorts-in-kumarakom" className='text-decoration-none text-black'>KUMARAKOM </Link>
                        </h5>

                        {/* Room Suites */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/rooms-suites/" className='text-decoration-none text-black font12px'>ROOMS & SUITES</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/rooms-suites/zuri-room" className='text-decoration-none text-black font14px'>Zuri Room</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/rooms-suites/deluxe-room" className='text-decoration-none text-black font14px'>Zuri Deluxe Room</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/rooms-suites/cottage" className='text-decoration-none text-black font14px'>Zuri Cottage</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/rooms-suites/presidential-pool-villa" className='text-decoration-none text-black font14px'>Zuri Presidential Pool Villa</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* Dining */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/restaurants/" className='text-decoration-none text-black font12px'>DINING</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/restaurants/lime-tree" className='text-decoration-none text-black font14px'>Lime Tree</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/restaurants/the-trunk-call-bar" className='text-decoration-none text-black font14px'>The Trunk Call Bar</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/restaurants/laguna-bass" className='text-decoration-none text-black font14px'>Laguna Bass</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/restaurants/marquees" className='text-decoration-none text-black font14px'>Marquees</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* SPA */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/maya-spa/" className='text-decoration-none text-black font12px'>DINING</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="lake-resorts-in-kumarakom/maya-spa/ayurveda" className='text-decoration-none text-black font14px'>Ayurvedic Therapies</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/maya-spa/therapies" className='text-decoration-none text-black font14px'>Western And Oriental Therapies</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* EVENTS & WEDDING */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/events/" className='text-decoration-none text-black font12px'>EVENTS & WEDDING</Link>
                        </Col>

                        {/* GALLERY */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/gallery/" className='text-decoration-none text-black font12px'>GALLERY</Link>
                        </Col>

                        {/* OFFERS */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/offers/" className='text-decoration-none text-black font12px'>OFFERS</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/offers/well-in-advance-deal" className='text-decoration-none text-black font14px'>The Well-In-Advance Deal</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/offers/the-stay-back-deal" className='text-decoration-none text-black font14px'>The Stay Back Deal</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/offers/the-stay-longer-deal" className='text-decoration-none text-black font14px'>The Stay Longer Deal</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/offers/the-last-minute-deal" className='text-decoration-none text-black font14px'>The Last Minute Deal</Link>
                                </li>
                                <li>
                                    <Link href="/lake-resorts-in-kumarakom/offers/winter-package" className='text-decoration-none text-black font14px'>Winter Package</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* ABOUT KUMARAKOM */}
                        <Col className='ps-3'>
                            <Link href="/lake-resorts-in-kumarakom/destination" className='text-decoration-none text-black font12px'>ABOUT KUMARAKOM</Link>
                        </Col>
                    </Col>



                    {/* GOA */}
                    <Col className='border-1 border-end border-black border-opacity-25 px-5'>
                        <h5>
                            <Link href="/beach-resorts-in-goa" className='text-decoration-none text-black'>GOA</Link>
                        </h5>

                        {/* Room Suites */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/rooms-suites" className='text-decoration-none text-black font12px'>ROOMS & SUITES</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/beach-resorts-in-goa/rooms-suites/garden-view-room" className='text-decoration-none text-black font14px'>Garden View Room</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/rooms-suites/premium-room" className='text-decoration-none text-black font14px'>Premium Room</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/rooms-suites/deluxe-room" className='text-decoration-none text-black font14px'>Deluxe Room</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/rooms-suites/executive-suite" className='text-decoration-none text-black font14px'>Executive Suite</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/rooms-suites/zuri-suite" className='text-decoration-none text-black font14px'>Zuri Suite</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* DINING */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/rooms-suites" className='text-decoration-none text-black font12px'>DINING</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/beach-resorts-in-goa/restaurants/waterfall-cafe" className='text-decoration-none text-black font14px'>Waterfall Cafe</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/restaurants/tangerine" className='text-decoration-none text-black font14px'>Tangerine</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/restaurants/blue-lagoon" className='text-decoration-none text-black font14px'>Blue Lagoon</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/restaurants/fins-rambooze" className='text-decoration-none text-black font14px'>Fins Rambooze</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/restaurants/sake" className='text-decoration-none text-black font14px'>Sake</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* SPA  */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/rooms-suites" className='text-decoration-none text-black font12px'>SPA</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/beach-resorts-in-goa/maya-spa/maya-rituals" className='text-decoration-none text-black font14px'>Maya Rituals</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/maya-spa/ayurveda" className='text-decoration-none text-black font14px'>Ayurveda</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/maya-spa/holistic" className='text-decoration-none text-black font14px'>Holistic</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* EVENTS & WEDDING */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/events" className='text-decoration-none text-black font12px'>EVENTS & WEDDING</Link>
                        </Col>

                        {/* GALLERY */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/gallery" className='text-decoration-none text-black font12px'>GALLERY</Link>
                        </Col>

                        {/* OFFERS */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/offers" className='text-decoration-none text-black font12px'>OFFERS</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/beach-resorts-in-goa/offers/well-in-advance-deal" className='text-decoration-none text-black font14px'>The Well-In-Advance Deal</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/offers/stay-more-save-more" className='text-decoration-none text-black font14px'>Stay More, Save More</Link>
                                </li>
                                <li>
                                    <Link href="/beach-resorts-in-goa/offers/the-last-minute-deal" className='text-decoration-none text-black font14px'>The Last Minute Deal</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* ABOUT GOA */}
                        <Col className='ps-3'>
                            <Link href="/beach-resorts-in-goa/destination" className='text-decoration-none text-black font12px'>ABOUT GOA</Link>
                        </Col>
                    </Col>

                    {/* BENGALURU */}
                    <Col className='border-1 border-end border-black border-opacity-25 px-5'>
                        <h5>
                            <Link href="/hotels-in-bengaluru" className='text-decoration-none text-black'>BENGALURU</Link>
                        </h5>

                        {/* Room Suites */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/rooms-suites" className='text-decoration-none text-black font12px'>ROOMS & SUITES</Link>
                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/hotels-in-bengaluru/rooms-suites/zuri-room" className='text-decoration-none text-black font14px'>Zuri Room</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/rooms-suites/club-room" className='text-decoration-none text-black font14px'>Club Room</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/rooms-suites/junior-suite" className='text-decoration-none text-black font14px'>Junior Suite</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/rooms-suites/presidential-suite" className='text-decoration-none text-black font14px'>Zuri Presidential Suite</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* DINING */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/restaurants" className='text-decoration-none text-black font12px'>DINING</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/hotels-in-bengaluru/restaurants/karibu" className='text-decoration-none text-black font14px'>Karibu</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/restaurants/incanto" className='text-decoration-none text-black font14px'>Incanto</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/restaurants/sake" className='text-decoration-none text-black font14px'>Sake</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/restaurants/bling" className='text-decoration-none text-black font14px'>Bling</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/restaurants/infinity" className='text-decoration-none text-black font14px'>Infinity</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* SPA */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/maya-spa" className='text-decoration-none text-black font12px'>SPA</Link>
                        </Col>

                        {/* EVENTS & WEDDING */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/events" className='text-decoration-none text-black font12px'>EVENTS & WEDDING</Link>
                        </Col>

                        {/* GALLERY */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/gallery" className='text-decoration-none text-black font12px'>GALLERY</Link>
                        </Col>

                        {/* OFFERS */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/offers" className='text-decoration-none text-black font12px'>OFFERS</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/hotels-in-bengaluru/offers/preferred-advance-purchase" className='text-decoration-none text-black font14px'>Preferred Advance Purchase</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/offers/stay-more-save-more" className='text-decoration-none text-black font14px'>Stay More, Save More</Link>
                                </li>
                                <li>
                                    <Link href="/hotels-in-bengaluru/offers/last-minute-steal" className='text-decoration-none text-black font14px'>The Last Minute Steal</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* ABOUT BENGALURU */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/destination" className='text-decoration-none text-black font12px'>ABOUT BENGALURU</Link>
                        </Col>
                    </Col>

                    {/* ABOUT ZURI */}
                    <Col className='border-1 border-end border-black border-opacity-25 px-5'>
                        <h5>
                            <Link href="/about-us" className='text-decoration-none text-black'>BENGALURU</Link>
                        </h5>

                        {/* Room Suites */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/rooms-suites" className='text-decoration-none text-black font12px'>ABOUT ZURI</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="/awards" className='text-decoration-none text-black font14px'>Awards</Link>
                                </li>
                                <li>
                                    <Link href="/customer-review" className='text-decoration-none text-black font14px'>Review</Link>
                                </li>
                                <li>
                                    <Link href="/careers" className='text-decoration-none text-black font14px'>Careers</Link>
                                </li>
                                <li>
                                    <Link href="/contact-us" className='text-decoration-none text-black font14px'>Contact Us</Link>
                                </li>
                                <li>
                                    <Link href="/gallery" className='text-decoration-none text-black font14px'>Gallery</Link>
                                </li>
                            </ul>
                        </Col>

                        {/* CONNECT */}
                        <Col className='ps-3'>
                            <Link href="/hotels-in-bengaluru/destination" className='text-decoration-none text-black text-opacity-50 font12px'>CONNECT</Link>

                            <ul className='mt-0 mb-0'>
                                <li>
                                    <Link href="https://www.facebook.com/thezurihotels" className='text-decoration-none text-black font14px'>Facebook</Link>
                                </li>
                                <li>
                                    <Link href="https://twitter.com/zurihotels" className='text-decoration-none text-black font14px'>Twitter</Link>
                                </li>
                                <li>
                                    <Link href="https://www.youtube.com/user/ZuriPR" className='text-decoration-none text-black font14px'>Youtube</Link>
                                </li>
                                <li>
                                    <Link href="https://www.flickr.com/photos/zurihotels" className='text-decoration-none text-black font14px'>Flickr</Link>
                                </li>
                                <li>
                                    <Link href="https://www.pinterest.com/zurihotel/" className='text-decoration-none text-black font14px'>Pinterest</Link>
                                </li>
                                <li>
                                    <Link href="https://www.tripadvisor.in/Hotel_Review-g297628-d1230533-Reviews-The_Zuri_Whitefield-Bengaluru_Bangalore_District_Karnataka.html" className='text-decoration-none text-black font14px'>Tripadvisor</Link>
                                </li>
                            </ul>
                        </Col>
                    </Col>

                </Row>
            </Container>
        </>
    )
}

export default SiteMap