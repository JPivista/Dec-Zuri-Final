'use client'
import BannerAllPage from '@/components/BannerAllPage'
import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'


const EventsGoaBanner = () => {

    const backgroundImageUrl = '/goa/events/goa_events_banner.jpg'

    const BannerImg = {
        backgroundImage: `url('/goa/events/goa_events_banner.jpg')`,
        height: 600,
        backgroundSize: 'cover'
    }
    return (
        <Container className='p-0' style={{}}>

            <BannerAllPage backgroundImageUrl={backgroundImageUrl} />

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >

                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='font12px mb-0 text-black breadcrumbs'>Beach Resorts In Goa</h6>
                </Link>
            </Col>

        </Container >
    )
}

export default EventsGoaBanner