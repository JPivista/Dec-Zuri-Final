import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const WatarFallGoaContent = () => {
    return (
        <Container className='p-lg-0 p-2 px-lg-5 text-center'>
            <Col className='d-flex flex-column align-items-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>WATERFALL CAFE – MULTI-CUISINE RESTAURANT IN GOA</h6>
                <p>
                    Multi-cuisine dining at its best and all day long. The waterfront waterfall cafe at Zuri Goa offers a perfect concoction of food. Experience something offbeat as you discover live cooking stations serving street-food classics like vada pav or something as refreshing as pasta.
                </p>
            </Col>
        </Container>
    )
}

export default WatarFallGoaContent