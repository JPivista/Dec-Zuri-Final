import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const DiningGoaContent = () => {
    return (
        <Container className='p-lg-0 p-2 px-lg-5 text-center'>

            <Col className='d-flex flex-column align-items-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>BEST RESTAURANTS IN SOUTH GOA</h6>
                <p>
                    Love Asian food? Our speciality Asian restaurant and lounge will cater to your cravings! Or, you could always try the finest Pasta at the Swim-up Bar. Still unsatisfied? Check out the Authentic Goan Cuisine, at our other restaurants in the hotel, known for being the Finest Restaurants in South Goa. Savour our Chef’s creations, accompanied by exotic cocktails and live music. You can choose your ambience. Whether you want to be in an enclosed air-conditioned setting or an al- fresco lounge for a laid-back evening, a refreshing cafe facing the man-made cascade or the <Link href="/beach-resorts-in-goa/restaurants/fins-rambooze/" className="text-decoration-none text-black">beach-front seafood restaurant</Link>, with a backdrop of The Arabian Sea. At The Zuri White Sands, Goa Resort & Casino, the cuisine complements the view perfectly.
                </p>
            </Col>
        </Container>
    )
}

export default DiningGoaContent