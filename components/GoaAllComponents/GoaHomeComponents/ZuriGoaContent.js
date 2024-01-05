import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'


const ZuriGoaContent = () => {
    return (
        <>
            <Container className='p-0'>

                <Col className='d-flex flex-column align-items-center px-2 px-md-0'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>BEST BEACH LUXURY RESORT IN GOA</h6>
                    <p>
                        The very mention of Goa, brings to mind serene beaches with the turquoise ocean water touching the shores lazily and also the Goan culture well known throughout the world. A land of rich and mystical heritage, Goa attracts people from all walks of life, be it the lone backpacker, the luxury vacationer or a businessman on a work trip. The sun-kissed beaches and the serene blue seas are only part of the Goan fable. Walk through the meandering lanes and you’ll see a vibrant way of life, colourful and carefree in its nature. Goa thrives year-round, attracting people from all around the world.
                    </p>

                    <p>
                        A reflection of everything Goan, The Zuri White Sands, Goa Resort & Casino is one of the ‘Best Beach Resorts in Goa’, A fact evident by the awards it has won, on account of being a much sought-after luxury beach resort. Varca, the picturesque beach on which the resort is located, is a place that offers privacy and solitude and an authentic Goan experience. Spread across 37 acres, the resort is indeed a paradise, replete with a long pool, spectacular sea-facing Goan-style luxury rooms and a wide gamut of cuisine, ranging from authentic Goan to European and Pan-Asian cuisine. Dunes, a favourite amongst our guests, has the distinction of being the only Resort in Goa.
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
                                Soak in the Goan spirit as you enjoy your stay in our luxury rooms at ‘The Zuri White Sands, Goa Resort & Casino in South Goa’. Let the lazy sea breeze waft into your room, drawing you out to explore the beach and its various attractions.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/rooms-suites"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p
                                        className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/goahome/goa_rooms_suits_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/goa/goahome/goa_dining_circle_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>DINING</h6>
                            </Col>
                            <p>
                                Six restaurants and bars make up the varied dining experience offered here, at ‘The Zuri White Sands, Goa Resort & Casino’.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/restaurants/"
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
                                A vacation isn’t complete without some much needed pampering! Be rest assured that at The Zuri White Sands, Goa Resort & Casino, the MAYA SPA (our very own signature line of spas) shall cater to all your spa-therapy needs.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/restaurants"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'>
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/goahome/goa_mayaspa_circle_3.jpg' alt='' roundedCircle width={180} height={180}
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
                            <Image src='/goa/goahome/goa_rooms_suits_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Soak in the Goan spirit as you enjoy your stay in our luxury rooms at ‘The Zuri White Sands, Goa Resort & Casino in South Goa’. Let the lazy sea breeze waft into your room, drawing you out to explore the beach and its various attractions.
                        </p>
                        <Link href="/beach-resorts-in-goa/rooms-suites"
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
                            <Image src='/goa/goahome/goa_dining_circle_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Six restaurants and bars make up the varied dining experience offered here, at ‘The Zuri White Sands, Goa Resort & Casino’.
                        </p>
                        <Link href="/beach-resorts-in-goa/restaurants"
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p className=' mb-0 font11px lh-sm text-white'
                            >
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
                            <Image src='/goa/goahome/goa_mayaspa_circle_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            A vacation isn’t complete without some much needed pampering! Be rest assured that at The Zuri White Sands, Goa Resort & Casino, the MAYA SPA (our very own signature line of spas) shall cater to all your spa-therapy needs.
                        </p>
                        <Link href="/beach-resorts-in-goa/maya-spa/"
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p className=' mb-0 font11px lh-sm text-white'>
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>
                </Col>
            </Container>

            <Container className='p-0 py-3'>
                <Image src='/goa/goahome/ev_charging_station_zuri.png' alt='' fluid />
            </Container>
        </>
    )
}

export default ZuriGoaContent