import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const LagunaBassBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/kumarkom/restarents/lagunabass_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <Container className='p-0' style={{}}>

            <Col className='p-0'
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 banner-breadcrumbs'>Home</h6>
                </Link>
                /
                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='banner-breadcrumbs mb-0 text-black'>Lake Resorts In Kumarakom</h6>
                </Link>
                /
                <Link href="/lake-resorts-in-kumarakom/restaurants/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta banner-breadcrumbs mb-0'>Restaurants, Kerala</h6>
                </Link>
            </Col>

        </Container >
    )
}

export default LagunaBassBanner