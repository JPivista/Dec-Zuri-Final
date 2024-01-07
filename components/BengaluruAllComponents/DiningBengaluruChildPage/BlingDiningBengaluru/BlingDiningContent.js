import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const BlingDiningContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2 px-md-5 text-center'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>BLING – THE LOUNGE BAR IN BENGALURU</h6>
                    <p>
                        Let your hair down while you party at Bling, a cozy hip lounge bar a unique ambience, courtesy plush couches, soft lighting, a chandelier draped ceiling and a dance floor with a DJ console. The menu offers a wide range of Indian and Continental appetizers.
                    </p>

                    <p>
                        Sit back, sip on your drink and relax. A relaxing lounge by the day, it transforms into a happening nightclub with ease. Nurse a drink in the best <Link href="/hotels-in-bengaluru/" className='text-black text-decoration-none'> luxury hotel in Bengaluru</Link>.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default BlingDiningContent