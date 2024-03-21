import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const CareersBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/career_banner.jpg')`,
        height: 460,
        backgroundSize: 'cover'
    }
    return (
        <>
            <Container className='custom-kumarkom-menu-container' style={{}}>

                <Col className='text-center pb-3'>
                    <h3 className='text-custom-grey'>
                        CAREERS
                    </h3>
                </Col>

                <Col className='p-0'
                    style={BannerImg}
                >
                </Col>

                <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 font12px'>Home</h6>
                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default CareersBanner