'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Image, Row, Tab, Tabs } from 'react-bootstrap'


const ZuriBengaluruContent = () => {
    return (
        <>
            <Container className='p-0'>

                <Col className='d-flex flex-column align-items-center text-center p-2 p-lg-0'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>FINEST LUXURY HOTEL IN BENGALURU</h6>
                    <p>
                        Located in the midst of a bustling business locality yet far from the cacophony of a metropolis and just 45 minutes from the International Airport, The Zuri Whitefield is a chic business hotel that offers guests a refreshing brand of hospitality with style and sophistication. Located at the heart of Bengaluru in Whitefield, The Zuri Whitefield encapsulates the essence of this vibrant city with its young and trendy soul. Optimised to cater to the global business traveller as well as the leisure seeker, there’s everything to pamper guests and ensure that they are well attended to at all times, while they are at the city popularly known as India’s ‘Silicon Valley’.
                    </p>

                    <p>
                        Chic in decor and detail, every room at The Zuri Whitefield is designed to keep you comfortable in style. With a choice spanning the Zuri Room, the Zuri Club Room, the Junior Suite and the Presidential Suites, each room is well equipped with modern amenities like a multi-room entertainment system, a 32″ LCD television with satellite channels, an electronic safe, mini-bar, complimentary high-speed wireless internet and more.
                    </p>
                    <p>
                        Be it a business meeting, workshop, seminar, training session, wedding, social event or private dinner, there’s simply no occasion that The Zuri cannot play the perfect host to. Equipped with multiple halls that cater to different needs, it has facilities that can be customised to ensure that every experience is as unique as guests wish it to be. All backed by state-of-the-art communications systems, presentation facilities and banquet services.
                    </p>

                    <p>
                        To each one his own. That’s the delicious variety of cuisine one can indulge in at The Zuri. Start with a choice of five F&B outlets including an exquisite Pan-Asian restaurant and lounge, a poolside barbeque and even a Cigar Lounge. No matter what their tastes, guests can experience the most appetising spread, courtesy our team of renowned chefs.
                    </p>
                    <p>
                        Those who are looking to stay in a hotel in Bengaluru that provides an unparalleled luxury experience, should stay at the Zuri, one of the most premier luxury 5-star hotels in Bengaluru.
                    </p>
                </Col>

                <Col className='d-md-flex flex-column d-none'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>ROOMS & SUITES</h6>
                            </Col>
                            <p>
                                On a business trip, no compromise can be made on comfort and convenience. At the Zuri Whitefield, Bengaluru, we also believe in adding a healthy dose of sophistication to everything we do. Being one of the best luxury hotels in Whitefield, Bengaluru, we strive to provide to our dear patrons, every possible creature comfort, in an endeavour to make them feel right at home.
                            </p>
                            <p>
                                The Zuri Whitefield, is one of the few 5 star hotels in Bengaluru, with rooms that offer spectacular views of the surroundings, despite being situated in a city.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/rooms-suites/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/bangaluru-home/rooms_suites_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/bengaluru/bangaluru-home/dining_banglore_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>DINING</h6>
                            </Col>
                            <p>
                                Our platter of exotic dishes, is sure to take even the most seasoned gourmand, on a gastronomic adventure yet unexperienced. Some of the city’s top chefs call the Zuri home, providing, by way of its restaurants, international cuisine, from various corners of the world. Foodies with a penchant for trying new, delicious delicacies will have fun getting lost in the variety of offerings, at the Zuri’s restaurants-truly a benchmark for luxury dining in Bengaluru.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/restaurants/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className=''>MAYA SPA</h6>
                            </Col>
                            <p>
                                Rest, relaxation and rejuvenation. Extremely important to perform optimally throughout. Take a break from the fast paced life, and soak in the treatments offered at Maya Spa. Our classic and personalised therapies are especially engineered to make sure you feel refreshed to the core. Unwinding at one of the best luxury spa hotels in Bengaluru, will take your mind off everything stressful.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/hotels-in-bengaluru/maya-spa/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/bangaluru-home/banglore_mayaspa_thumb_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>
                </Col>
            </Container >


            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none'>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>ROOMS & SUITES</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/bangaluru-home/rooms_suites_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            On a business trip, no compromise can be made on comfort and convenience. At the Zuri Whitefield, Bengaluru, we also believe in adding a healthy dose of sophistication to everything we do. Being one of the best luxury hotels in Whitefield, Bengaluru, we strive to provide to our dear patrons, every possible creature comfort, in an endeavour to make them feel right at home.
                        </p>
                        <p>
                            The Zuri Whitefield, is one of the few 5 star hotels in Bengaluru, with rooms that offer spectacular views of the surroundings, despite being situated in a city.
                        </p>
                        <Link href="/hotels-in-bengaluru/rooms-suites"
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
                            <h6 className='py-2 text-center'>DINING</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/bangaluru-home/dining_banglore_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Our platter of exotic dishes, is sure to take even the most seasoned gourmand, on a gastronomic adventure yet unexperienced. Some of the city’s top chefs call the Zuri home, providing, by way of its restaurants, international cuisine, from various corners of the world. Foodies with a penchant for trying new, delicious delicacies will have fun getting lost in the variety of offerings, at the Zuri’s restaurants-truly a benchmark for luxury dining in Bengaluru.
                        </p>
                        <Link href="/hotels-in-bengaluru/restaurants"
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
                            <h6 className='py-2 text-center'>MAYA SPA</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/bangaluru-home/banglore_mayaspa_thumb_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Rest, relaxation and rejuvenation. Extremely important to perform optimally throughout. Take a break from the fast paced life, and soak in the treatments offered at Maya Spa. Our classic and personalised therapies are especially engineered to make sure you feel refreshed to the core. Unwinding at one of the best luxury spa hotels in Bengaluru, will take your mind off everything stressful.
                        </p>
                        <Link href="/hotels-in-bengaluru/maya-spa/"
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p className=' mb-0 font11px lh-sm text-white'>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container>



            {/* Tab Function */}
            {/* <Container className='p-0 py-5 d-md-flex flex-column d-none'>

                <Col className='d-flex flex-column align-items-center' md={6}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>OFFERS</h6>
                </Col>


                <Tabs
                    defaultActiveKey="home"
                    transition={true}
                    id="noanim-tab-example"
                    className="mb-3"
                >

                    <Tab eventKey="home" title="THE WELL IN-ADVANCE DEAL">
                        <Row>
                            <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={3}>
                                <Image src='/bengaluru/bangaluru-home/well_in_advance_thumb_4.jpg' alt='' roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                            <Col className='d-flex flex-column justify-content-end'>
                                <p>
                                    Book your stay at The Zuri Whitefield at least 15 nights in advance and get an exciting 25% off on your room, as well as complimentary breakfast and wi-fi access.
                                </p>
                                <Link href="/hotels-in-bengaluru/offers/"
                                    className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                                    <p
                                        className='m-0 lh-sm text-white '
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Row>
                    </Tab>

                    <Tab eventKey="profile" title="A WEEKEND AT OUR SIGNATURE SPA">
                        <Row>
                            <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={3}>
                                <Image src='/bengaluru/bangaluru-home/signaturespa_bengaluru_thumb_5.jpg' alt='' roundedCircle width={180} height={180}
                                    className='rounded-circle kumarkom-image-overlay'
                                />
                            </Col>
                            <Col className='d-flex flex-column justify-content-end'>
                                <p>
                                    Treat yourself or a loved one to a refreshing weekend at Zuri’s very own line of spas, the Maya Spa.
                                </p>
                                <Link href="/hotels-in-bengaluru/maya-spa/"
                                    className='bg-black text-center rounded-circle text-decoration-none btn-circle'>
                                    <p
                                        className='m-0 lh-sm text-white '
                                        style={{ fontSize: '11px' }}>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Row>
                    </Tab>
                </Tabs>
            </Container> */}

            {/* Gallery Need to be update here */}
            <Container className='p-0 text-center'>
                <h1 className='text-danger'>Gallery</h1>


                <Image src='/bengaluru/bangaluru-home/traveller_choice_img.jpg' alt='' />
            </Container>
        </>
    )
}

export default ZuriBengaluruContent