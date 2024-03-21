import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const DiningOffersAllContent = () => {
    return (
        <>
            <Container>
                <h3 className='text-center pt-4 text-black '>
                    SPECIAL DINING OFFERS
                </h3>

                <Col className="underline-center-all">
                </Col>

                <h3 className='text-center pt-5 text-black '>
                    GOA
                </h3>
                <Col className="underline-center-all">
                </Col>
            </Container>

            <Container className='p-0 text-center d-md-block d-none'>
                {/* Desktop View */}
                <Col className='d-md-flex flex-column d-none mt-5'>

                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    SAKE
                                </h6>
                            </Col>
                            <p>
                                Avail 01 portion of Dimsums (06 pieces) cooked in steam baskets and 01 Pint of chilled Kingfisher beer. <br />
                                Price: Rs. 500 (Vegetarian) / INR 700 ( Non Vegetarian) per person (inclusive of tax).
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/offers/sake_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/offers/blue_lagoon_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    BLUE LAGOON
                                </h6>
                            </Col>
                            <p>
                                Avail 10inch Pizza of your choice with a complimentary pint of Kingfisher beer. <br />
                                Price: Rs. 550 per person (inclusive of tax).
                            </p>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    FINS
                                </h6>
                            </Col>
                            <p>
                                Stop by at Fins, our seafood restaurant for a three-course meal served with a glass of house wine. On a <br />
                                minimum order of 4 covers you could chose a bottle of dark rum (IMFL) in lieu of house wine. Offer <br />
                                open on all days except Fridays between 11:00am to 10:30pm. <br />
                                Price: Rs.2000 per person (inclusive of tax). <br />
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/offers/fins_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row mt-5'>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/offers/tangrine_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    TANGERINE
                                </h6>
                            </Col>
                            <p>
                                Avail 03 pints of Kingfisher beer at just INR 300 (inclusive of tax).
                            </p>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>
                                    CELEBRATIONS
                                </h6>
                            </Col>
                            <p>
                                Gift your loved ones a bottle of sparkling wine (Sula Brut or Chandon Brut) for just Rs.3000 plus taxes & avail a complimentary half kg cake. Applicable for in-room dining on prior bookings.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/offers/celebrations_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>
                </Col>
            </Container>


            {/* Mobile View */}
            <Container className='p-0 d-flex flex-column d-md-none '>
                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>SAKE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/offers/sake_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
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
                            <h6 className='py-2 text-center'>
                                BLUE LAGOON
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/offers/blue_lagoon_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Avail 10inch Pizza of your choice with a complimentary pint of Kingfisher beer.
                            Price: Rs. 550 per person (inclusive of tax).
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                FINS
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/offers/fins_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Stop by at Fins, our seafood restaurant for a three-course meal served with a glass of house wine. On a minimum order of 4 covers you could chose a bottle of dark rum (IMFL) in lieu of house wine. Offer open on all days except Fridays between 11:00am to 10:30pm.
                            Price: Rs.2000 per person (inclusive of tax).
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                TANGERINE
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/offers/tangrine_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Avail 03 pints of Kingfisher beer at just INR 300 (inclusive of tax).
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>
                                CELEBRATIONS
                            </h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/offers/celebrations_offers_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Gift your loved ones a bottle of sparkling wine (Sula Brut or Chandon Brut) for just Rs.3000 plus taxes & avail a complimentary half kg cake. Applicable for in-room dining on prior bookings.
                        </p>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default DiningOffersAllContent