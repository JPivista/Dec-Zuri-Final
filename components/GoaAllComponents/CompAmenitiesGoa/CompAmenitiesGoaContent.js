import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'


const CompAmenitiesGoaContent = () => {
    return (
        <>

            <Container className='p-md-0 p-2'>
                <Col className='d-flex flex-column align-items-center pt-5'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>THE ZURI WHITE SANDS GOA RESORT & CASINO – COMPLIMENTARY AMENITIES</h6>
                    <p>
                        The Zuri White Sands Goa Resort & Casino provides you with the finest quality of services whether you are on a family holiday, a personal retreat or conducting business. We ensure that your stay is comfortable and that all your needs, the amenities you expect and the extras you deserve are delivered with the highest quality standards.
                    </p>
                </Col>

                <Col className='position-relative'>
                    <div className='underline'>
                        <span className='down-arrow'></span>
                    </div>
                </Col>
            </Container>

            {/* Desktop View */}
            <Container className='p-0 pt-5'>
                <Col className='d-md-flex flex-column d-none'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>THE ZURI DELUXE ROOM</h6>
                            </Col>
                            <p>
                                All of the 18 Zuri Deluxe rooms feature spacious accommodation stacked in luxury and comfort inside the room with all the modern amenities. Each room 48.8 square meters in size also enjoys panoramic views of landscaped hotel gardens.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/complimentary-amenities/goa-deluxe-room-circle-1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/goa/complimentary-amenities/executive-suite-new-2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>THE ZURI EXECUTIVE SUITES</h6>
                            </Col>
                            <p>
                                Built for efficiency and luxury, the two Zuri Executive Suites 73.62 square meters in size are impressive with two conjoining rooms, adjoining the meandering pool. Featuring a view of the lawns, with a living and dining area, luxurious bathrooms and much more to let our guests enjoy Goa the most comfortable and memorable way.
                            </p>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row mt-5'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>THE ZURI SUITE</h6>
                            </Col>
                            <p>
                                With a blend of classical and modern conveniences, a private bar, eager personal staff and more, the two Zuri Suite offers luxury that is beyond compare. These suites each 148.38 square meters in size have played host to some of the world’s most distinguished personalities over the years. We invite you to experience the luxury of its kinds at The Zuri White Sands, Goa.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/complimentary-amenities/goa-zuri-suite-circle-3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/goa/complimentary-amenities/goa-premium-room-circle-4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>THE ZURI PREMIUM ROOM</h6>
                            </Col>
                            <p>
                                Enjoy the view of the lawns from all of the 96 Zuri Premium rooms. Adjacent to the meandering pool all the rooms face the pool while the ground floor rooms open out directly to the pool. Each of the Zuri premium rooms 41 square meters in size are well tucked with all the modern amenities which are guests may need.
                            </p>
                        </Col>
                    </Col>
                    <Col className='d-flex flex-md-row mt-5'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>THE ZURI SUPERIOR ROOM</h6>
                            </Col>
                            <p>
                                Designed for efficiency and comfort each Zuri Superior room gives you a breathtaking view of the beautiful lawn. All the 36 Zuri superior rooms each 41 square meters in size face the garden while the ground floor rooms open out directly to the Garden. Each room has chic interiors with white textured walls and twin or double beds, a spacious wardrobe, a study table and a seating area with a coffee table along with other contemporary conveniences.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/complimentary-amenities/goa-superior-room-circle-5.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>
                </Col>
            </Container>





            {/* Mobile View */}
            <Container className='p-md-0 p-2 d-flex flex-column d-md-none'>

                <Col className='d-flex flex-column align-items-center '>
                    <h6 className='py-2 text-center border border-2 border-top-0 border-end-0 border-start-0'>STAY OFFERS</h6>
                </Col>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE ZURI DELUXE ROOM</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/complimentary-amenities/goa-deluxe-room-circle-1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            All of the 18 Zuri Deluxe rooms feature spacious accommodation stacked in luxury and comfort inside the room with all the modern amenities. Each room 48.8 square meters in size also enjoys panoramic views of landscaped hotel gardens.
                        </p>

                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE ZURI EXECUTIVE SUITES</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/complimentary-amenities/executive-suite-new-2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Built for efficiency and luxury, the two Zuri Executive Suites 73.62 square meters in size are impressive with two conjoining rooms, adjoining the meandering pool. Featuring a view of the lawns, with a living and dining area, luxurious bathrooms and much more to let our guests enjoy Goa the most comfortable and memorable way.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE ZURI SUITE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/complimentary-amenities/goa-zuri-suite-circle-3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            With a blend of classical and modern conveniences, a private bar, eager personal staff and more, the two Zuri Suite offers luxury that is beyond compare. These suites each 148.38 square meters in size have played host to some of the world’s most distinguished personalities over the years. We invite you to experience the luxury of its kinds at The Zuri White Sands, Goa.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE ZURI PREMIUM ROOM</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/complimentary-amenities/goa-premium-room-circle-4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Enjoy the view of the lawns from all of the 96 Zuri Premium rooms. Adjacent to the meandering pool all the rooms face the pool while the ground floor rooms open out directly to the pool. Each of the Zuri premium rooms 41 square meters in size are well tucked with all the modern amenities which are guests may need.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE ZURI SUPERIOR ROOM</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/complimentary-amenities/goa-superior-room-circle-5.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Designed for efficiency and comfort each Zuri Superior room gives you a breathtaking view of the beautiful lawn. All the 36 Zuri superior rooms each 41 square meters in size face the garden while the ground floor rooms open out directly to the Garden. Each room has chic interiors with white textured walls and twin or double beds, a spacious wardrobe, a study table and a seating area with a coffee table along with other contemporary conveniences.
                        </p>
                    </Col>
                </Col>
            </Container>

            {/* Desktop and Mobile View */}
            <Container className='p-0 py-4'>
                <Col className='text-center'>
                    <h5>IN-ROOM AMENITIES:</h5>
                </Col>

                <Col className='p-0'>
                    <ul>
                        <li>Complimentary broadband access</li>
                        <li>LCD TV</li>
                        <li>Fruit basket in room once during the stay</li>
                        <li>Satellite/cable TV</li>
                        <li>Daily newspaper</li>
                        <li>Executive writing desk</li>
                        <li>Telephone</li>
                        <li>Electronic safe</li>
                        <li>Daily complimentary water</li>
                        <li>Tea and coffee making facility</li>
                        <li>Mini-bar</li>
                        <li>Premium toiletries</li>
                        <li>Hair dryer</li>
                        <li>Shoeshine</li>
                        <li>Bath Tub</li>
                        <li>Health faucets</li>
                        <li>Rain shower cubicle*( Only for Deluxe, Premium and Superior room)</li>
                    </ul>
                </Col>
            </Container>
        </>
    )
}

export default CompAmenitiesGoaContent