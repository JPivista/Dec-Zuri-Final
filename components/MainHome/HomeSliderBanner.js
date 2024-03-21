'use client'

import React, { useRef, useEffect, useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';


const HomeSliderBanner = () => {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth < 768); // Adjust the width threshold as needed
        }
        // Initial call to set isMobile based on the current window width
        handleResize();
        // Event listener to update isMobile when the window is resized
        window.addEventListener('resize', handleResize);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty dependency array ensures that this effect runs only once on component mount

    const BannerImg = {
        backgroundImage: `url('/home/zuri_slider_banner_1.jpg')`,
        height: isMobile ? '60vh' : '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const BannerImg1 = {
        backgroundImage: `url('/home/zuri_slider_banner_2.jpg')`,
        height: isMobile ? '60vh' : '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const BannerImg2 = {
        backgroundImage: `url('/home/zuri_slider_banner_3.jpg')`,
        height: isMobile ? '60vh' : '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)',
    };

    const section2Ref = useRef(null);

    // useEffect(() => {
    //     const handleBounceClick = () => {
    //         section2Ref.current.scrollIntoView({ behavior: 'smooth' });
    //     };

    //     // Trigger the bounce animation after component mount
    //     handleBounceClick();
    // }, []);

    return (
        <>
            <Container fluid className='p-0 text-center z-0 position-relative' style={{ height: isMobile ? '60vh' : '100vh' }}>
                <Col
                    className='position-absolute bottom-0 end-0 start-0 z-1 mb-5 d-lg-flex d-none'
                >
                    <Col className='w-100 text-center'>
                        <Image
                            src='/mouse.png'
                            alt=''
                            fluid
                            onClick={() => window.location.reload()}
                        />
                    </Col>
                </Col>

                <Carousel>
                    <Carousel.Item className='bg-black' style={BannerImg}>
                        <Carousel.Caption className='p-0 position-absolute start-0 bottom-0 top-0 end-0'>
                            <Col className='text-center position-relative d-flex' style={{ height: isMobile ? '60vh' : '100vh' }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white custom-home-slider-text p-3'>
                                        TROPICAL DESTINATION
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 pb-0 bottom-0 end-0'>
                                    <h6 className='mb-0 p-2'>
                                        The Zuri White Sands, Goa Resort & Casino
                                    </h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-black ' style={BannerImg1}>
                        <Carousel.Caption className='p-0 position-absolute start-0 bottom-0 top-0 end-0'>
                            <Col className='text-center position-relative d-flex' style={{ height: isMobile ? '60vh' : '100vh', }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white custom-home-slider-text'>
                                        GOD’S OWN COUNTRY
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 bottom-0 end-0'>
                                    <h6 className='mb-0 p-2'>
                                        The Zuri Kumarakom, Kerala Resort & Spa
                                    </h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className='bg-black ' style={BannerImg2}>
                        <Carousel.Caption className='p-0 w-100 position-absolute start-0 bottom-0 top-0 end-0'>
                            <Col className='text-center position-relative d-flex' style={{ height: isMobile ? '60vh' : '100vh', }}>
                                <Col className='d-flex flex-column flex-wrap align-items-center justify-content-center align-content-center'>
                                    <h1 className='text-white custom-home-slider-text'>
                                        PREFERRED BUSINESS <br />
                                        DESTINATION
                                    </h1>
                                </Col>
                                <Col className='position-absolute bg-black bg-opacity-75 p-2 pb-0 bottom-0 end-0'>
                                    <h6 className='mb-0 p-2'>
                                        The Zuri Whitefield, Bengaluru
                                    </h6>
                                </Col>
                            </Col>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel >
            </Container >

            <div ref={section2Ref} />
        </>
    )
}

export default HomeSliderBanner