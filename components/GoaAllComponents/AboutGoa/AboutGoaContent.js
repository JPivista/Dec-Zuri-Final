import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const AboutGoaContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2'>
                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>ABOUT GOA</h6>
                    <p>
                        Originally a Portuguese colony, Goa is an ideal spot for those seeking to explore a region with a rich cultural heritage. Goa welcomes travellers from almost all walks of life. Everyone comes to Goa with more or less the same objective — to revel in the laid-back culture that has come to define Goa. Whether you like parties, music, or just want to sit by the beach and enjoy the sounds of nature, everything is possible thanks to the abundance of interesting tourist destinations in Goa. So go on, take your pick from the numerous sun-kissed beaches and spend a few days in the tropical destination of India — Goa!
                    </p>
                </Col>

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>CLIMATE</h6>
                    <p>
                        The ideal time to visit Goa would be immediately after summer, when the temperatures are relatively moderate. During the winter season, starting from November and going all the way to March, you will experience a much cooler GOA.
                    </p>
                    <p>
                        The Arabian Sea in this part of the country is a lot calmer, making it possible for tourists to enjoy water-sports or simply a dip in the ocean. Goa’s tour packages, suitable for every budget, are tailored to give you the most quintessential Goan experience.
                    </p>
                </Col>

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>FOOD</h6>
                    <p>
                        The traditional fish curry with rice might be the most recognizable Goan cuisine, but that is just the tip of the culinary iceberg. One visit to Goa might not be enough to sample everything it has to offer. Exotic curries like Ambot-tik (shark cooked in a red sauce with spices) to Sorpotel (fiery pork cooked in a clay pot on firewood) jostle for popularity amongst visitors and tourists here. Goan cuisines is tasty, flavourful and unique.
                    </p>
                </Col>

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>NEAREST AIRPORT</h6>
                    <p>
                        The Dabolim Airport is approximately 30 km (19 miles) from Varca Beach. Goa is well connected by road, rail and air to other parts of the country and the world.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default AboutGoaContent