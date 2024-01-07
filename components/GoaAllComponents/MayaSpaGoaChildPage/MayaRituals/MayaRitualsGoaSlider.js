'use client'
import React, { useState } from 'react'
import { Button, Col, Container, Image } from 'react-bootstrap';
import Carousel from 'react-multi-carousel';

import Link from 'next/link';


const MayaRitualsGoaSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 0 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 0 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const [isHover1, setIsHover1] = useState(false);

    const [isHover2, setIsHover2] = useState(false);

    const handleMouseEnter1 = () => {
        setIsHover1(true);
    };

    const handleMouseLeave1 = () => {
        setIsHover1(false);
    };

    const handleMouseEnter2 = () => {
        setIsHover2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHover2(false);
    };

    const buttonHover1 = {
        backgroundColor: isHover1 ? 'black' : 'white',
        color: isHover1 ? 'white' : 'black',
        border: isHover1 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover2 = {
        backgroundColor: isHover2 ? 'black' : 'white',
        color: isHover2 ? 'white' : 'black',
        border: isHover2 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    return (

        <>
            <Container className='pt-4 px-md-5' style={{}}>
                <Col className='text-center pb-5'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>TREATMENTS & THERAPIES</h6>
                </Col>

                <Col className='d-flex flex-column d-md-none d-block'>
                    <Carousel className=''
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop"]}
                        swipeable={false}
                        draggable={false}
                        showDots={true}
                    >

                        <Col className='text-center d-flex flex-column align-items-center gap-4' >
                            <Image src='/goa/maya-spa/ayurveda_thumb_2.jpg' alt='' roundedCircle width={180} height={180} />
                            <Link
                                href="/beach-resorts-in-goa/maya-spa/ayurveda/"
                                style={buttonHover1}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                                className='px-5 py-2 text-decoration-none'
                            >
                                Ayurveda
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5'>
                            <Image src='/goa/maya-spa/holistic_thumb_3.jpg' alt='' roundedCircle width={180} height={180} />

                            <Link
                                href="/beach-resorts-in-goa/maya-spa/holistic/"
                                style={buttonHover2}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                                className='px-5 py-2 text-decoration-none'
                            >
                                Holistic
                            </Link>
                        </Col>
                    </Carousel>
                </Col>

                <Col className='d-md-flex flex-row align-items-center justify-content-center d-none'>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' md={4}>
                        <Image src='/goa/maya-spa/ayurveda_thumb_2.jpg' alt='' roundedCircle width={180} height={180} />
                        <Link
                            href="/beach-resorts-in-goa/maya-spa/ayurveda/"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Ayurveda
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' md={4}>
                        <Image src='/goa/maya-spa/holistic_thumb_3.jpg' alt='' roundedCircle width={180} height={180} />

                        <Link
                            href="/beach-resorts-in-goa/maya-spa/holistic/"
                            style={buttonHover2}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Holistic
                        </Link>
                    </Col>
                </Col>
            </Container>



        </>
    )
}

export default MayaRitualsGoaSlider