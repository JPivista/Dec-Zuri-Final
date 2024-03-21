import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const WesternTherapiesContent = () => {
    return (
        <Container className='p-0 px-md-5 px-3 text-center'>
            <Image src='/cl.png' alt='' fluid />
            <h6 className='py-2 pt-4 text-center'>
                WESTERN AND ORIENTAL THERAPIES
            </h6>
            <p className='text-center'>
                Listen to the gentle lapping of the backwaters on the shores as you treat yourself to massages and other treatments chosen from a specially curated variety of Western and Oriental therapies.
            </p>

            <p>
                The <Link href="/lake-resorts-in-kumarakom/maya-spa/" className='text-decoration-none text-black fw-bolder'>
                    Maya Spa, Kumarakom
                </Link> offers the perfect natural setting to truly let go of your worries. Well-trained and certified masseurs help you relax, taking you on a lovely journey of rejuvenation & relaxation using therapies from across the globe.
            </p>
        </Container>
    )
}

export default WesternTherapiesContent
