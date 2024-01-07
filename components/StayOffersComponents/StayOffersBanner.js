import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

import '../../app/globals.css'

const StayOffersBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/stay_offers/stay_offers_banner.jpg')`,
        height: 500,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    }

    return (
        <>
            <Container className='custom-kumarkom-menu-container' style={{}}>

                <h3 className='text-center py-md-4 text-custom-grey'>
                    STAY OFFERS AT ZURI HOTELS & RESORTS
                </h3>

                <Col className='p-0'
                    style={BannerImg}
                >
                </Col>

                <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 font12px'>Home</h6>
                    </Link>
                    {/* /
                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='banner-breadcrumbs mb-0 text-black'>Lake Resorts In Kumarakom</h6>
                </Link> */}
                </Col>
            </Container >
        </>
    )
}

export default StayOffersBanner