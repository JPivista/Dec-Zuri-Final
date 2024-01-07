import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const WeddingsGoaBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/goa/events/goa_wedding_banner.jpg')`,
        height: 600,
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
                <Link href="/beach-resorts-in-goa/"
                    className='text-decoration-none mb-0'>
                    <h6 className='banner-breadcrumbs mb-0 text-black'>Beach Resorts In Goa</h6>
                </Link>

                /
                <Link href="/beach-resorts-in-goa/events/"
                    className='text-decoration-none mb-0'>
                    <h6 className='banner-breadcrumbs mb-0 text-black'>Events</h6>
                </Link>
            </Col>
        </Container>
    )
}

export default WeddingsGoaBanner