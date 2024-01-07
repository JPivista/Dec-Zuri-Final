'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

const RoomSuitesDesktop = () => {

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
            <Container className='d-none d-lg-flex'>

                <Row className='d-flex flex-row gap-0 justify-content-center align-items-center w-100'>
                    <Col className='text-center d-flex flex-column align-items-center gap-4 ' lg={3}>
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

                    <Col className='text-center d-flex flex-column align-items-center gap-4' lg={3}>
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

                    <Col className='text-center d-flex flex-column align-items-center gap-4' lg={3}>
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

                    <Col className='text-center d-flex flex-column align-items-center gap-4 mt-5' lg={12}>
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
                </Row>

            </Container>
        </>
    )
}

export default RoomSuitesDesktop