import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const StaySaveBengaluruContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2  text-center'>

                <Col className='py-4'>
                    <h6 className='text-black'>STAY MORE, SAVE MORE</h6>
                    <p>
                        Stay for 3 nights at the Zuri Whitefield, Bengaluru and enjoy 20% off your room.
                    </p>
                    <h6 className='text-custom-grey'>
                        STANDARD ROOM INCLUSIONS
                    </h6>
                    <p>
                        15% Discount on Food & Soft Beverages . Package Includes Buffet Breakfast & Wi-Fi
                    </p>
                    <h6 className='text-custom-grey'>
                        CLUB ROOM ADDITIONAL INCLUSIONS
                    </h6>
                    <p>
                        Cocktail Hours (60Min/Unlimited/IMFL)
                    </p>
                    <p>
                        2 piece laundry per day
                    </p>
                    <p>
                        20% Discount on Food & Soft Beverages , SPA & Laundry. Package Includes Buffet Breakfast, Wi-Fi, Cocktail Hours (60Min/Unlimited/IMFL), One Way Airport transfers.
                    </p>
                    <h6 className='text-custom-grey'>
                        Cancellation Policy:
                    </h6>
                    <p>
                        One night penalty charges for the cancellations within 48hrs from the arrival date and for the early departures as well.
                    </p>
                    <p>
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

export default StaySaveBengaluruContent