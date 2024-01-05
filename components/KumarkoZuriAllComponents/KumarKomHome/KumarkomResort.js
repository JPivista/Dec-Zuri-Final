import React from 'react'

import { Container, Col, Row, Image } from 'react-bootstrap'

import Link from 'next/link'

const KumarkomResort = () => {

    return (
        <>
            <Container className='p-md-0 p-2'>
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid className='py-md-4 p-3' />
                    <h6 className='py-2 text-center'>THE ZURI KUMARAKOM, KERALA RESORT & SPA, A 5-STAR LUXURY RESORT</h6>
                </Col>

                <Col className='text-center'>
                    <p>
                        Offering breathtaking views of the serene backwaters of Kerala, The Zuri Kumarakom, Kerala Resort & Spa is situated on the shores of the Vembanad Lake, the longest backwater lake in Kerala. The fresh sea breeze, miles of serene backwaters and swaying coconut palms all welcome you to an unforgettable experience of luxury and peace. The dreamy state of Kerala, the southern tip of the Indian peninsula is often referred to as ‘God’s Own Country’ due to its pristine natural beauty.
                    </p>
                    <p>
                        At the Zuri Kumarakom, experience everything from the colourful local culture, the mouth-watering local cuisine and the rich repository of flora and fauna found here, while surrounded by luxury. The Maya Spa, Zuri’s very own spa chain gives you the chance to pamper yourself with a wide variety of spa treatments that will leave you glowing both inside and outside.
                    </p>
                    <p>
                        The plush interiors, impeccable service, world-class amenities and the finest restaurants make the Zuri Kumarakom one of the best resort and spa hotels in Kerala. A testament to this is the many awards that the hotel has won over the years. The hotel has been awarded the ‘Best Resort Spa Hotel’ in 2007 and 2008, the coveted ‘World Travel Award’ for being India’s leading resort in 2010 and the 2011 Traveller’s Choice Awards from TripAdvisor.
                    </p>
                    <p>
                        Come and experience the magic of Kerala at its very best, only at The Zuri Kumarakom, Kerala Resort & Spa.
                    </p>
                </Col>



                {/* Desktop View */}
                {/* Go Down and check mobile view code */}
                <Col className='d-md-flex flex-column d-none'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center pb-2'>ROOMS & SUITES</h6>
                            </Col>
                            <p>
                                While the views of serene backwaters and lush greenery is a treat to your eyes, our accommodation will be a treat to all your senses as well. Our collection of luxurious rooms, villas and cottages are aesthetically furnished and beautifully designed to offer you every comfort and luxury. Choose from our splendid lagoon facing rooms or luxurious villas that come with a private pool.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/rooms-suites"
                                    className='bg-black rounded-circle text-decoration-none d-flex flex-column justify-content-center align-items-center '>
                                    <p
                                        className='m-0 lh-sm text-white btn-circle text-center'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/kumarkom-home/kumarakom_rooms_suites_new.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/kumarkom-home/kumarakom_compliments_Amenties.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center pb-2'>COMPLIMENTARY AMENITIES</h6>
                            </Col>
                            <p>
                                The Zuri Kumarakom, Kerala Resort & Spa provides you with the finest quality of services whether you are on a family holiday, a personal retreat or conducting business. We ensure that your stay is comfortable and that all your needs, the amenities you expect and the extras you deserve are delivered with the highest quality standards.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/complimentary-amenities/"
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
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='pb-2'>DINING</h6>
                            </Col>
                            <p>
                                An experience of Kerala is never complete without sampling its exotic local cuisine. It’s seafood delicacies are famous worldwide for their incredible flavours and exotic seasoning. Treat your senses to the best of Kerala’s cuisine at Zuri’s fine-dining restaurants.
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/restaurants"
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
                            <Image src='/kumarkom/kumarkom-home/dining.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/kumarkom-home/maya_spa.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-4 pb-md-3' />
                                <h6 className='pb-2'>MAYA SPA</h6>
                            </Col>
                            <p>
                                Drowsy eyes? Tired limbs? Fatigued mind? Nothing soothes your mind and body like the beautiful Kerala does. Home to a plethora of Ayurvedic solutions and concepts like the Abhyangam massage, the Indian traditional oil massage , wellness takes a whole new meaning in God’s own country. Discover the best of wellness and treatments as you soak in an exclusive experience called ‘Maya’.
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/lake-resorts-in-kumarakom/maya-spa/"
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
                    </Col>
                </Col>
            </Container >

            {/* Mobile View  Destop view is hidded*/}
            <Container className='p-0 d-flex flex-column d-md-none'>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>ROOMS & SUITES</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/kumarkom-home/kumarakom_rooms_suites_new.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                        <p>
                            Our collection of luxurious rooms, villas and cottages are aesthetically furnished and beautifully designed to offer you every comfort and luxury. Choose from our splendid lagoon facing rooms or luxurious villas that come with a private pool.
                        </p>
                        <Link href=""
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p
                                className=' mb-0 font11px lh-sm text-white'
                            >
                                KNOW<br /> MORE
                            </p>
                        </Link>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>COMPLIMENTARY AMENITIES</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/kumarkom-home/kumarakom_compliments_Amenties.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                        <p>
                            The Zuri Kumarakom, Kerala Resort & Spa provides you with the finest quality of services whether you are on a family holiday, a personal retreat or conducting business. We ensure that your stay is comfortable and the amenities are of the highest quality standards.
                        </p>
                        <Link href=""
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p
                                className=' mb-0 font11px lh-sm text-white'
                            >
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
                            <Image src='/kumarkom/kumarkom-home/dining.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                        <p>
                            An experience of Kerala is never complete without sampling its exotic local cuisine. It’s seafood delicacies are famous worldwide for their incredible flavours and exotic seasoning. Treat your senses to the best of Kerala’s cuisine at Zuri’s fine-dining restaurants.
                        </p>
                        <Link href=""
                            className='bg-black text-center text-decoration-none btn-circle'
                        >
                            <p
                                className=' mb-0 font11px lh-sm text-white'
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
                            <Image src='/kumarkom/kumarkom-home/maya_spa.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                        </Col>
                        <p>
                            Home to a plethora of Ayurvedic solutions and concepts like the Abhyangam massage, the Indian traditional oil massage, wellness takes a whole new meaning in God’s own country—Kerala. Discover the best of wellness and treatments as you soak in an exclusive experience called ‘Maya’.
                        </p>
                        <Link href=""
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

                <Col className='d-flex flex-column align-items-center py-3'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center border border-bottom border-0 w-100'>OFFERS</h6>
                </Col>

                <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                        <Image src='/kumarkom/kumarkom-home/maya_spa.jpg' alt='' fluid className='rounded-circle kumarkom-image-overlay' />
                    </Col>
                    <p>
                        Book your stay at the The Zuri Kumarakom, Kerala Resort & Spa for 21 days or more, in advance and get an exciting 30% off on your room.
                    </p>
                    <Link href=""
                        className='bg-black text-center text-decoration-none btn-circle'
                    >
                        <p
                            className=' mb-0 font11px lh-sm text-white'
                        >
                            KNOW<br /> MORE
                        </p>
                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default KumarkomResort