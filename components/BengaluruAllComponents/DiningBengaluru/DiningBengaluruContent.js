import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const DiningBengaluruContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2 text-center px-lg-5'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>RESTAURANTS AT THE ZURI WHITEFIELD</h6>
                    <p>
                        Journey into a world of myriad cuisines, when you dine at one of our restaurants, whose reputation of dishing out variety and surprises in equal doses is not without reason. Whether it is our all day multi-cuisine restaurant Karibu, or our authentic Italian restaurant Incanto, the Pan Asian Lounge Sake, or the Alfresco poolside bar and Indian restaurant Infinity, the only problem you’ll ever face is deciding where to eat, what and when. How much, will never be a problem, because you might never stop.
                    </p>

                    <p>
                        We know the pulse of luxury dining in Bengaluru, and we love catering to its palette. Those who love their cocktails can head to the happening Bling, where they can dance to a mix of the latest tunes our DJ plays.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default DiningBengaluruContent