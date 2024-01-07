import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const PreferrredBengaluruContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2  text-center'>

                <Col className='py-4'>
                    <h6 className='text-black'>PREFERRED ADVANCE PURCHASE</h6>
                    <p>
                        Book your stay at the <Link href="/hotels-in-bengaluru/" className='text-decoration-none text-black'>Zuri Whitefield, Bengaluru</Link> 30 Days (or more) in advance.
                    </p>
                    <p>
                        30 % Disc on Best Available Rates.
                    </p>

                    <h6>
                        BOOK A ZURI ROOM FOR THE BELOW INCLUSIONS:
                    </h6>

                    <p>
                        Breakfast
                    </p>

                    <h6>
                        BOOK A CLUB ROOM FOR BELOW ADDITIONAL INCLUSIONS:
                    </h6>

                    <p>
                        One Way Airport Transfer
                    </p>
                    <h6>
                        BOOK A ZURI ROOM FOR THE BELOW INCLUSIONS
                    </h6>
                    <p>
                        Breakfast
                        <br />
                        <br />
                        Wi-Fi
                        <br />
                        <br />
                        One Way Airport Transfers For Min 4 Nights Stay
                        <br />
                        <br />
                        15% Discount SPA Treatments & 20% Discount Food & Soft Beverages. Package Includes Buffet Breakfast & Wi-Fi.
                    </p>

                    <h6>
                        BOOK A CLUB ROOM FOR BELOW ADDITIONAL INCLUSIONS:-
                    </h6>
                    <p>
                        One Way Airport Transfer
                        <br />
                        <br />
                        Cocktail Hours (60Min/Unlimited/IMFL)
                        <br />
                        <br />
                        2 piece laundry per day
                        <br />
                        <br />
                        Fruit Platter
                        <br />
                        <br />
                        20% Discont on Food & Soft Beverages & SPA. Package Includes Buffet Breakfast, Wi-Fi, Cocktail Hours (60Min/Unlimited/IMFL), ONE Way Airport transfer & Cut Fruit Platter on Request.
                    </p>

                    <h6>
                        Cancellation Policy:
                    </h6>

                    <p>
                        ne night penalty charges for the cancellations within 48hrs from the arrival date and for the early departures as well.
                        <br />
                        <br />
                        All reservations must be guaranteed with a credit card.
                    </p>

                </Col>

                <Col>
                    <Link
                        href="https://be.synxis.com/?_ga=2.56530732.62180047.1693482265-2038087003.1664255723&_gac=1.161572430.1690453396.CjwKCAjwq4imBhBQEiwA9Nx1Bi6aiGcfgk-uDDRypiK5UqXgtik--oBXV3gga2OF4WXNJFxRCRxuCRoCl0wQAvD_BwE&adult=1&arrive=2023-09-02&chain=17869&child=0&currency=INR&depart=2023-09-03&hotel=64786&level=hotel&locale=en-US&rooms=1"
                        target='_blank'
                        className='text-decoration-none'
                    >
                        <p className='text-white d-inline-block px-3 py-2 text-purple'>
                            Book Now
                        </p>
                    </Link>
                </Col>

            </Container>
        </>
    )
}

export default PreferrredBengaluruContent