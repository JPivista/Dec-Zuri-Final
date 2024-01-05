'use client'
import React from 'react'


import { Col, Container, Row } from 'react-bootstrap'
import Link from 'next/link'
import { Player } from 'video-react'

const HomeHeroBanner = () => {
    return (
        <>
            <Container className=''>
                {/* Video */}
                <Col>
                    <Player
                        playsInline
                        poster="/assets/poster.png"
                        src="https://www.thezurihotels.com/wp-content/uploads/videos/the-zuri-kumarakom-kerala-resort-spa.mp4"
                        muted
                        autoPlay
                        width="100%"
                    />

                    <Col className='d-flex flex-row align-items-center'>

                        <Link href="/"
                            className='text-decoration-none text-black m-0'>
                            <h6 className='mb-0 font12px'>Home</h6>
                        </Link>

                        &nbsp; / &nbsp;

                        <Link href=""
                            className='text-decoration-none mb-0'>
                            <h6 className='text-custom-megenta font12px m-0'>Lake Resorts In Kumarakom</h6>
                        </Link>
                    </Col>
                </Col>
            </Container>
        </>
    )
}

export default HomeHeroBanner