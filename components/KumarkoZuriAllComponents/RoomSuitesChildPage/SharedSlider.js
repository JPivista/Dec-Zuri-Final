'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';

const SharedSlider = () => {


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

    const [isHover, setIsHover] = useState(false);

    const [isHover1, setIsHover1] = useState(false);

    const [isHover2, setIsHover2] = useState(false);

    const [isHover3, setIsHover3] = useState(false);




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

    const handleMouseEnter2 = () => {
        setIsHover2(true);
    };

    const handleMouseLeave2 = () => {
        setIsHover2(false);
    };

    const handleMouseEnter3 = () => {
        setIsHover3(true);
    };

    const handleMouseLeave3 = () => {
        setIsHover3(false);
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

    const buttonHover2 = {
        backgroundColor: isHover2 ? 'black' : 'white',
        color: isHover2 ? 'white' : 'black',
        border: isHover2 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }

    const buttonHover3 = {
        backgroundColor: isHover3 ? 'black' : 'white',
        color: isHover3 ? 'white' : 'black',
        border: isHover3 ? '1px solid black' : '1px solid silver',
        transition: '.5s ease-in',
        fontSize: '13px',
    }


    return (
        <>
            <Container className='p-0 px-md-5 pb-5 d-sm-flex d-lg-none' style={{}}>
                <Carousel className=''
                    responsive={responsive}
                    removeArrowOnDeviceType={["tablet", "desktop"]}
                    swipeable={false}
                    draggable={false}
                    showDots={true}

                >
                    <Col className='text-center d-flex flex-column align-items-center gap-4 ps-lg-5 ms-lg-5' >
                        <Image src='/kumarkom/room-suites/room_new_room_suites_1.jpg' alt='' roundedCircle width={180} height={180} />

                        <Link
                            href="/lake-resorts-in-kumarakom/rooms-suites/zuri-room"
                            style={buttonHover}
                            onMouseEnter={handleMouseEnter}
                            onMouseLeave={handleMouseLeave}
                            className='px-5 py-2  text-decoration-none'
                        >
                            Zuri Room
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4' >
                        <Image src='/kumarkom/room-suites/delux_new_room_suites_2.jpg' alt='' roundedCircle width={180} height={180} />
                        <Link
                            href="/lake-resorts-in-kumarakom/rooms-suites/deluxe-room"
                            style={buttonHover1}
                            onMouseEnter={handleMouseEnter1}
                            onMouseLeave={handleMouseLeave1}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Zuri Deluxe Room
                        </Link>
                    </Col>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 pe-lg-5 me-lg-5'>
                        <Image src='/kumarkom/room-suites/cottage_room_suites_3.jpg' alt='' roundedCircle width={180} height={180} />

                        <Link
                            href="/lake-resorts-in-kumarakom/rooms-suites/cottage"
                            style={buttonHover2}
                            onMouseEnter={handleMouseEnter2}
                            onMouseLeave={handleMouseLeave2}
                            className='px-5 py-2 text-decoration-none'
                        >
                            Zuri Cottage
                        </Link>
                    </Col>
                    <Col className='text-center pt-md-5 d-flex flex-column align-items-center gap-4'>
                        <Image src='/kumarkom/room-suites/pool_villa_room_suites_4.jpg' alt='' roundedCircle width={180} height={180} />

                        <Link
                            href="/lake-resorts-in-kumarakom/rooms-suites/presidential-pool-villa"
                            style={buttonHover3}
                            onMouseEnter={handleMouseEnter3}
                            onMouseLeave={handleMouseLeave3}
                            className='px-5 py-2 mb-5 mb-md-0 text-decoration-none'
                        >
                            Zuri Presidential Pool Villa
                        </Link>
                    </Col>
                </Carousel>
            </Container>
        </>
    )
}

export default SharedSlider