'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';


const EventsSliderKumarkom = () => {
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
                <Col className=''>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center'>BEST EVENT VENUE IN KUMARAKOM</h6>
                    <p className='p-2  p-lg-0'>
                        Nestled on the serene backwaters of Kerala, the Zuri Kumarakom is the ideal destination for events or weddings. Say your vows against a magical backdrop of lush greenery, calm flowing waters and make memories that you will treasure forever. Meetings in our magical venue offers the perfect mix of business and pleasure. With access to every modern amenity like high-speed internet and the beautiful surroundings, you are
                        certain to impress.
                    </p>

                    <Carousel className=''
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop"]}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                    >
                        <Col className='text-center d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5' >
                            <Image src='/kumarkom/events/kumarakom_wedding_img.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                            <Link
                                href="/lake-resorts-in-kumarakom/events/weddings/"
                                style={buttonHover}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className='px-5 py-2  text-decoration-none'
                            >
                                Weddings
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5' >
                            <Image src='/kumarkom/events/kumarakom_meeting_img.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                            <Link
                                href="/lake-resorts-in-kumarakom/events/meetings/"
                                style={buttonHover1}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                                className='px-5 py-2 text-decoration-none'
                            >
                                Meetings and Events
                            </Link>
                        </Col>
                    </Carousel>
                </Col>
            </Container>

            <Container fluid className='text-center py-5' style={bgBusinessFacilities} >
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center text-black'>BUSINESS FACILITIES</h6>
                <p className='text-black'>Internet Cafe | Wi-Fi | Fax | Photocopier | Scanner | Secretarial Service | Laser Printer | Binding Facility | LCD Projector with drop-down screen</p>
            </Container>
        </>
    )
}

export default EventsSliderKumarkom