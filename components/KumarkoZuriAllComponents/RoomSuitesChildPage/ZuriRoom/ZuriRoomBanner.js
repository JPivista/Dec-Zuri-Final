'use client'
import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const ZuriRoomBanner = () => {

    const BannerImg = {
        backgroundImage: `url('/kumarkom/room-suites/zuri_room_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <Container className='p-0'>

            <Col className='p-0'
                // style={{ backgroundImage: "url(/kumarkom/room_suites_kumarkom_banner.jpg)", height: '460px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center pt-1 ps-lg-0 ps-1'>

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='font12px mb-0 text-black breadcrumbs'>Lake Resorts In Kumarakom</h6>
                </Link>

                <Link href=""
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px mb-0 breadcrumbs'>Rooms & Suites, Kerala</h6>
                </Link>
            </Col>


        </Container >
    )
}

export default ZuriRoomBanner
