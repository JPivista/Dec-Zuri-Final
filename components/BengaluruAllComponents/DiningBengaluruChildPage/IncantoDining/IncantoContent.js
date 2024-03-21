import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const IncantoContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2 px-md-5 text-center'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>INCANTO – THE ITALIAN RESTAURANT IN BENGALURU</h6>
                    <p>
                        Get transported straight to Rome, when you visit Incanto, one of the best known Italian <Link href="/hotels-in-bengaluru/restaurants/" className='text-decoration-none text-black'>restaurants in Whitefield</Link>, Bengaluru. The word Incanto means ‘enchantment’, and true to its name, soft lighting and wall frescos set the mood for an authentic Italian dinner. Our elaborate a-la-carte menu has authentic Italian staples like spaghetti, and exotic dishes like the Grilled Lobster with Butter Garlic Sauce. Wash it down with one of the many wines you can procure from the wall-mounted wine-chiller. A gastronomic experience you will never forget.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default IncantoContent