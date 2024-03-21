'use client'
import BannerAllPage from '@/components/BannerAllPage'
import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const CasinoBanner = () => {

    const backgroundImageUrl = '/goa/casino_banner.webp';

    // const BannerImg = {
    //     backgroundImage: `url('/goa/casino_banner.webp')`,
    //     height: 466,
    //     backgroundSize: 'cover'
    // }

    return (
        <Container className='p-0' style={{}}>

            <BannerAllPage backgroundImageUrl={backgroundImageUrl} />

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                <Link href="/beach-resorts-in-goa"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-black breadcrumbs'>Beach Resorts In Goa</h6>
                </Link>

                <Link href="/beach-resorts-in-goa"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-custom-megenta breadcrumbs'>Casino</h6>
                </Link>
            </Col>

        </Container >
    )
}

export default CasinoBanner