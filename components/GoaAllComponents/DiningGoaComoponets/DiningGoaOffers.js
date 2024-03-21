import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const DiningGoaOffers = () => {
    return (
        <>
            <Container className='p-0 mt-5 text-center'>
                <h6 className='pt-4 pb-0 mb-0'>DINING OFFERS</h6>

                <Col className='underline'>
                </Col>
            </Container>

            <Col className='position-relative'>
                <span className='underline-custom'></span>
            </Col>

            <Container className='p-0'>
                <Col className='d-md-flex flex-column d-none mt-5'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-2 pb-md-3' />
                                <h6 className='text-center'>SAKE</h6>
                            </Col>
                            <p>
                                Avail 01 portion of Dimsums (06 pieces) cooked in steam baskets and 01 Pint of chilled Kingfisher beer.
                                <br />
                                Price: Rs. 500 (Vegetarian) / INR 700 ( Non Vegetarian) per person (inclusive of tax).
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/goa/dining/sake_circle_6.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/goa/dining/blue_lagoon_circle_7.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className='text-center'>BLUE LAGOON</h6>
                            </Col>
                            <p>
                                Avail 10inch Pizza of your choice with a complimentary pint of Kingfisher beer.
                                <br />
                                Price: Rs. 550 per person (inclusive of tax).
                            </p>
                        </Col>
                    </Col>
                </Col>
            </Container>


            <Container className='p-0 d-flex flex-column d-md-none'>
                <Col className='p-2 mt-4'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>SAKE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/dining/sake_circle_6.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Avail 01 portion of Dimsums (06 pieces) cooked in steam baskets and 01 Pint of chilled Kingfisher beer.
                            Price: Rs. 500 (Vegetarian) / INR 700 ( Non Vegetarian) per person (inclusive of tax).
                        </p>

                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>BLUE LAGOON</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/goa/dining/blue_lagoon_circle_7.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Avail 10inch Pizza of your choice with a complimentary pint of Kingfisher beer.
                            Price: Rs. 550 per person (inclusive of tax).
                        </p>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default DiningGoaOffers