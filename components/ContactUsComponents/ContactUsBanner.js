import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const ContactUsBanner = () => {

    const BannerImg = {
        backgroundImage: `url('/contact_us_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container fluid>
                <Container className='custom-kumarkom-menu-container'>
                    <h3 className='text-center py-md-4 text-custom-grey'>CONTACT US</h3>

                    <Col style={BannerImg}>
                    </Col>
                    <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >
                        <Link href="/"
                            className='text-decoration-none text-black m-0'>
                            <h6 className='mb-0 font12px'>Home</h6>
                        </Link>
                    </Col>
                </Container>
            </Container>
        </>
    )
}

export default ContactUsBanner