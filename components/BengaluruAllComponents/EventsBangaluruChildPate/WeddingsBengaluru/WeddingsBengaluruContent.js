import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const WeddingsBengaluruContent = () => {
    return (
        <>
            <Container className='p-0 px-lg-5 pt-5 position-relative px-2 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h4 className='py-2 pt-4 text-center'>WEDDING HOTEL IN BANGALORE</h4>
                <Col className='position-relative'>
                    <div className='underline'>
                        <span className='down-arrow'></span>
                    </div>
                </Col>
                <p className='mt-5'>
                    The Phoenix Ballroom at the Zuri Whitefield makes for a fairytale venue for your special day. The ballroom can be divided into three venues depending on the number of guests you would like to invite. Customise the menu according to your tastes and let our Master Chef leave your guests spoilt for choice with luxury dining options. Choose the Zuri Whitefield, the best wedding venue in Bangalore.
                </p>
            </Container>
        </>
    )
}

export default WeddingsBengaluruContent