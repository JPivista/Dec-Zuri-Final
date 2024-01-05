'use client'
import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

import { Player } from 'video-react'


const ZuriGoaBanner = () => {
    return (
        <Container className='p-0'>
            <Col>
                <Player
                    playsInline
                    poster="/assets/poster.png"
                    src="https://www.thezurihotels.com/wp-content/uploads/videos/the-zuri-goa-resort-casino.mp4"
                    muted
                    autoPlay
                />

                <Col className='d-flex flex-row flex-wrap p-0 align-items-center'>

                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 font12px'>Home</h6>
                    </Link>

                    &nbsp; / &nbsp;

                    <Link href=""
                        className='text-decoration-none mb-0'>
                        <h6 className='text-custom-megenta font12px m-0'>Beach Resorts In Goa</h6>
                    </Link>
                </Col>
            </Col>
        </Container>
    )
}

export default ZuriGoaBanner