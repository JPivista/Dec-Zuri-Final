'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';

const EventsGoaSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 2,
            slidesToSlide: 0 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 0 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    const bgBusinessFacilities = {
        background: '#cab17b',
    }

    const [isHover, setIsHover] = useState(false);
    const [isHover1, setIsHover1] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const handleMouseEnter1 = () => {
        setIsHover1(true);
    };
    const handleMouseLeave1 = () => {
        setIsHover1(false);
    };

    const buttonHover = {
        backgroundColor: isHover ? 'black' : 'white',
        color: isHover ? 'white' : 'black',
        border: isHover ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover1 = {
        backgroundColor: isHover1 ? 'black' : 'white',
        color: isHover1 ? 'white' : 'black',
        border: isHover1 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    return (
        <>
            <Container className='p-0 pt-4 py-5 text-center px-md-5' style={{}}>
                <Col className='p-1'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center'>BEST EVENT VENUE IN GOA</h6>
                    <p>
                        Spread across 37 acres of luxury on the popular Varca beach of Goa, The Zuri White Sands, Goa Resort & Casino is one of the best beach resorts in Goa. It is a true reflection of everything Goan, from the energetic party atmosphere, serene beaches to the delicious food. Choose the Zuri White Sands for your event and allow us to add a touch of luxury that the Zuri is known for.


                    </p>
                </Col>

                {/* Desktop View */}
                <Row className='d-md-flex flex-row align-items-center justify-content-center d-none pt-5'>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5' md={4}>
                        <Image src='/goa/events/goa_wedding_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/events/weddings/"
                            style={buttonHover}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className='px-5 py-2  text-decoration-none'
                        >
                            Weddings
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5' md={4}>
                        <Image src='/goa/events/meeting_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                        <Link
                            href="/beach-resorts-in-goa/events/meetings/"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Meetings and Events
                        </Link>
                    </Col>
                </Row>
            </Container >


            {/* Mobile View */}
            <Container className='d-flex d-md-none'>
                <Carousel
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                    swipeable={false}
                    draggable={false}
                    showDots={false}
                >
                    <Col className='text-center d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5' >
                        <Image src='/goa/events/goa_wedding_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />

                        <Link
                            href="/beach-resorts-in-goa/events/weddings/"
                            style={buttonHover}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className='px-5 py-2  text-decoration-none'
                        >
                            Weddings
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5' >
                        <Image src='/goa/events/meeting_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                        <Link
                            href="/beach-resorts-in-goa/events/meetings/"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Meetings and Events
                        </Link>
                    </Col>
                </Carousel>
            </Container >
        </>
    )
}

export default EventsGoaSlider