'use client'
import BannerAllPage from '@/components/BannerAllPage'
import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const AboutKumarkomBanner = () => {

    const backgroundImageUrl = '/kumarkom/about-kumarkokm/abt_kumarakom_banner.jpg';

    // const BannerImg = {
    //     backgroundImage: `url('/kumarkom/about-kumarkokm/abt_kumarakom_banner.jpg')`,
    //     height: 600,
    //     backgroundSize: 'cover'
    // }

    return (
        <>
            <Container className='p-0' style={{}}>
                <BannerAllPage backgroundImageUrl={backgroundImageUrl} />
                <Col className='d-flex flex-row flex-wrap p-0 align-items-center'>

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
                        <h6 className='text-custom-megenta font12px mb-0 breadcrumbs'> Destination</h6>
                    </Link>

                </Col>

            </Container >
        </>
    )
}

export default AboutKumarkomBanner
