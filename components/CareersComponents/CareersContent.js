import Link from 'next/link'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const CareersContent = () => {
    return (
        <>
            <Container>
                <Col className='text-center mt-3'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center text-black'>
                        WHY JOIN US
                    </h6>
                </Col>

                <Col className='text-center'>
                    <p>
                        The Zuri Brand is undoubtedly a powerful, bold and dynamic brand, on a robust growth curve. While the hospitality dynamics are changing, The Zuri brand is keeping pace in meeting the expectations of both internal and external customers.
                    </p>

                    <p>
                        If you’re passionate about your career “Come hop on to the Zuri Band wagon”.
                    </p>
                </Col>

                <Col className='text-center mt-3'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center text-black'>
                        CAREER FORM
                    </h6>
                </Col>
            </Container>
        </>
    )
}

export default CareersContent