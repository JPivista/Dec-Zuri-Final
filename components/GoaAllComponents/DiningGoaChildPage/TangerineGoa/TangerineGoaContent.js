import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const TangerineGoaContent = () => {
    return (
        <Container className='p-lg-0 p-2 px-lg-5 text-center'>
            <Col className='d-flex flex-column align-items-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>TANGERINE – COCKTAIL RESTAURANT IN GOA</h6>
                <p>
                    An al fresco lounge with a bar, Tangerine is the place to be if you love food, cocktails and sports. Serving exotic cocktails throughout the day, accompanied by live entertainment in the evening, the ambience at Tangerine is always vivid and lively.
                </p>

                <p>
                    Enthusiasm reaches its crescendo when football and cricket fans swing by to watch the screening of a football or cricket match.
                </p>
            </Col>
        </Container>
    )
}

export default TangerineGoaContent