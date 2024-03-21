import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const EventsWeddingContent = () => {


    return (
        <>
            <Container className='p-0 px-lg-5 pt-5 position-relative px-2 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h4 className='py-2 pt-4 text-center'>WEDDING VENUE IN KERALA</h4>
                <Col className='position-relative'>
                    <div className='underline'>
                        <span className='down-arrow'></span>
                    </div>
                </Col>
                <p className='mt-5'>
                    Allow us to take care of every small detail to ensure that your wedding is like the fairytale you dreamed it would be. The Zuri offers a magical wedding venue in Kumarakom, with beautiful views of Kerala’s backwaters and luxurious interiors. You can choose from a variety of themes for the decorations and we’ll make it picture perfect.
                </p>
            </Container>
        </>
    )
}

export default EventsWeddingContent