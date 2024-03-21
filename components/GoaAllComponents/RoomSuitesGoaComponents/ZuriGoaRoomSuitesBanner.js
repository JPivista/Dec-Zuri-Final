'use client'
import BannerAllPage from '@/components/BannerAllPage'
import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const ZuriGoaRoomSuitesBanner = () => {

    const backgroundImageUrl = '/goa/room-suites/roomsandsuites_banner_goa.jpg';
    // const BannerImg = {
    //     backgroundImage: `url('/goa/room-suites/roomsandsuites_banner_goa.jpg')`,
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

                <Link href="/beach-resorts-in-goa/rooms-suites/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px m-0 breadcrumbs'> Rooms And Suites</h6>
                </Link>
            </Col>
        </Container>
    )
}

export default ZuriGoaRoomSuitesBanner