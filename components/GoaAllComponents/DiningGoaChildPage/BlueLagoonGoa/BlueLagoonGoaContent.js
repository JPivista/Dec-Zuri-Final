import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const BlueLagoonGoaContent = () => {
    return (
        <Container className='p-lg-0 p-2 px-lg-5 text-center'>
            <Col className='d-flex flex-column align-items-center '>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 text-center'>BLUE LAGOON – AN ITALIAN RESTAURANT IN GOA</h6>
                <p>
                    The Blue Lagoon Pool Bar is perfect for late-evening lounging or an afternoon with cocktails at the swim-up bar. Team up our exotic cocktails with either Italian pasta and pizzas or our favourite ‘catch of the day,’ which is freshly caught local fish. There’s no better way to indulge if you’re looking for Italian <Link href="/beach-resorts-in-goa/restaurants/" className='text-decoration-none text-black'>restaurants in Goa</Link>.
                </p>
            </Col>
        </Container>
    )
}

export default BlueLagoonGoaContent