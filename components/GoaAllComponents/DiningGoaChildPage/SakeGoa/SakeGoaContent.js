import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const SakeGoaContent = () => {
    return (
        <Container className='p-lg-0 p-2 px-lg-5 text-center'>
            <Col className='d-flex flex-column align-items-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>SAKE – PAN ASIAN RESTAURANT IN GOA</h6>
                <p>
                    Sake offers Pan-Asian cuisine at its best, by the pool. For the first time in Goa, you can enjoy live Teppanyaki where your fare is cooked to perfection, right in front of you. Explore our a-la-carte menu and do try our specialities: Sushi, Thai curries and of course the live Teppanyaki. Stay for the weekend and you’re in for our entertaining barbecue and grill special teamed up with a performance from The Serenadors.
                </p>
            </Col>
        </Container>
    )
}

export default SakeGoaContent