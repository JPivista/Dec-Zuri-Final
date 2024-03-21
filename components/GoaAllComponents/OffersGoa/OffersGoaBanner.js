'use client'
import { Col, Container, Image } from 'react-bootstrap'

import Carousel from 'react-bootstrap/Carousel';

import Link from 'next/link';


const OffersGoaBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/goa/offers/goa_the_stay_back_deal_slider_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <>
            <Container className='p-0 pt-4 text-center px-md-5'>
                <Carousel
                    style={{ height: 460 }}>
                    <Carousel.Item className='bg-black' style={BannerImg}>
                        <Carousel.Caption
                            className='p-0'>
                            <Col
                                className='bg-opacity-50 bg-black float-end offers-slider-bgcustom d-flex flex-column align-items-start justify-content-center ps-5'
                                md={4} style={{ height: 460 }}>
                                <h5 className='text-white'>STAY MORE, SAVE MORE</h5>
                                <span className='border border-1 w-100 my-2'></span>
                                <p className='text-white'>Up to 15% on Spa treatments</p>
                                <p className='text-white'>Up to 15% on Food & Soft beverages</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    {/* <Carousel.Item className='bg-danger' style={BannerImg1} >
                        <Carousel.Caption>
                            <Col
                                className='bg-opacity-50 bg-black float-end offers-slider-bgcustom d-flex flex-column align-items-start justify-content-center ps-5'
                                md={4} style={{ height: 460 }}>
                                <h5 className='text-white'>THE LAST MINUTE DEAL</h5>
                                <span className='border border-1 w-100 my-2'></span>
                                <p className='text-white'>15% OFF On BAR Rates</p>
                                <p className='text-white'>15% Discount on Spa treatment</p>
                                <p className='text-white'>15% on Food & Soft Beverages</p>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item> */}
                </Carousel>

                <Col className='d-flex flex-row flex-wrap pt-1 align-items-center' >

                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 font12px'>Home</h6>
                    </Link>
                    /
                    <Link href="/beach-resorts-in-goa/"
                        className='text-decoration-none mb-0'>
                        <h6 className='font12px mb-0 text-black'>Beach Resorts In Goa </h6>
                    </Link>
                    /
                    <Link href=""
                        className='text-decoration-none mb-0'>
                        <h6 className='text-custom-megenta font12px mb-0'>Offers</h6>
                    </Link>
                </Col>
            </Container>
        </>
    )
}

export default OffersGoaBanner