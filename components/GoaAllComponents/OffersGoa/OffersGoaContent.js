import React from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import Link from 'next/link'


const OffersGoaContent = () => {
    return (
        <>
            {/* Desktop View */}
            <Container className='p-0 py-5 text-center d-lg-block d-none'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>BENEFIT FROM OUR SPECIAL OFFERS IN GOA</h6>

                <h6 className='mt-4 pb-0'>STAY OFFERS</h6>
                <Col>
                    <div className='underline'></div>
                </Col>

                <Col className='d-lg-flex flex-column d-none mt-5'>
                    {/* <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>WINTER GETAWAY PACKAGE ON AP</h6>
                            </Col>
                            <p>
                                Package Valid from 1st Oct 2023 to 31 March 2024
                            </p>
                            <Col className='d-flex justify-md-content-center justify-content-end align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/winter-getaway-package-on-ap/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/all_package_img/winter_package_ap_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col> */}


                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/all_package_img/winter_package_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    WINTER GETAWAY PACKAGE ON MAP
                                </h6>
                            </Col>
                            <p>
                                Package Valid from 1st Oct 2023 to 31 March 2024
                            </p>
                            <Col className='d-flex justify-md-content-center  align-items-md-start p-0 pe-2'>
                                <Link href="/beach-resorts-in-goa/offers/winter-getaway-package-on-map/"
                                    className='bg-black text-center text-decoration-none btn-circle'
                                >
                                    <p className=' mb-0 font11px lh-sm text-white'
                                    >
                                        KNOW<br /> MORE
                                    </p>
                                </Link>
                            </Col>
                        </Col>
                    </Col>
                </Col>
            </Container>


            {/* Mobile View */}
            <Container className='d-flex flex-column d-lg-none'>
                {/* <Col className='d-flex flex-column mt-5 justify-content-center align-items-center'>
                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />

                    <Col className='d-inline-block'>
                        <h6 className='text-center'>WINTER GETAWAY PACKAGE ON AP</h6>
                    </Col>
                    <Col className='d-flex flex-wrap align-content-center '>
                        <Image src='/all_package_img/winter_package_ap_thumb.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                    </Col>
                    <Col md={7} className='text-md-end text-center mt-2'>
                        <p>
                            Package Valid from 1st Oct 2023 to 31 March 2024
                        </p>

                        <Col className='d-flex justify-content-center mt-2'>
                            <Link href="/beach-resorts-in-goa/offers/winter-getaway-package-on-ap/"
                                className='bg-black text-center text-decoration-none btn-circle'
                            >
                                <p className=' mb-0 font11px lh-sm text-white'
                                >
                                    KNOW<br /> MORE
                                </p>
                            </Link>
                        </Col>
                    </Col>
                </Col> */}


                <Col className='d-flex flex-column mt-5 justify-content-center align-items-center'>
                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />

                    <Col className='d-inline-block'>
                        <h6 className='text-center mt-2'>
                            WINTER GETAWAY PACKAGE ON MAP
                        </h6>
                    </Col>
                </Col>
                <Col className='d-flex flex-wrap justify-content-center align-content-center '>
                    <Image src='/all_package_img/winter_package_map_thumb.jpg' alt='' roundedCircle width={180} height={180}
                        className='rounded-circle kumarkom-image-overlay'
                    />
                </Col>
                <Col md={7} className='text-md-end text-center mt-2'>
                    <p>
                        Package Valid from 1st Oct 2023 to 31 March 2024
                    </p>

                    <Col className='d-flex justify-content-center mt-2'>
                        <Link href="/beach-resorts-in-goa/offers/winter-getaway-package-on-ap/"
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

            </Container >
        </>
    )
}

export default OffersGoaContent