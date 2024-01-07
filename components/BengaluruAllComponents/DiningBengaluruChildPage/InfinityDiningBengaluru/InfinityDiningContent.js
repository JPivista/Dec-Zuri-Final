import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const InfinityDiningContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2 px-md-5 text-center'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>INFINITY – THE POOLSIDE RESTAURANT IN BENGALURU</h6>
                    <p>
                        A modern, romantic open-air restaurant by the pool side, it is situated on the 2nd floor and offers a live barbeque counter and a bar counter. Choose from a broad range of tandoor and grilled food. Refreshing cocktails from the beverage menu will keep you company. The atmosphere is upbeat, welcoming and above all friendly. The staff has been specially trained to make sure no stone goes unturned in making sure you have a great time. Be thrilled, as the chef demonstrates sizzlers, on the live counter located towards the right side of the bar.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default InfinityDiningContent