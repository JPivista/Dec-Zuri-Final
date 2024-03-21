import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const SakeDiningContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2 text-center px-md-5'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>SAKE: PAN ASIAN RESTAURANT AND LOUNGE</h6>
                    <p>
                        Situated on the rooftop of the property, with breathtaking panoramic views of the city, Sake, our Pan-Asian restaurant and bar, boasts of a private dining area with a Live Teppanyaki Grill Station and a Live Sushi-Bar & a Dim-Sum Station. Indulge in Japanese, Thai and Chinese delicacies, prepared especially by our expert team of chefs. A great selection of cuisines and an authentic ambience makes SAKE, one of the best Pan Asian <Link href="/hotels-in-bengaluru/restaurants/" className='text-decoration-none text-black'>restaurants in Whitefield, Bengaluru</Link>.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default SakeDiningContent