'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'

import testmonial from './TestiMonialList'
import Image from 'next/image'

const Testimonial = () => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };


    return (
        <>
            <Container className='custom-kumarkom-menu-container'>
                <h3 className='text-center py-md-4 text-custom-grey'>TESTIMONIALS</h3>

                <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >
                    <Link href="/"
                        className='text-decoration-none text-black m-0'>
                        <h6 className='mb-0 font12px'>Home</h6>
                    </Link>
                </Col>

                <Col className='bg-black bg-opacity-75'>
                    {showAll
                        ? testmonial.map(item => (
                            <>
                                <Row className='px-lg-5 p-4 border-1 border-bottom'>
                                    <Col xs={2} className='text-center'>
                                        <Image src='/footer/male.jpg' alt='' height={100} width={100} className=' rounded-circle' />
                                        <Col key={item.name}>
                                            <p className='text-white pt-2'>{item.name}</p>
                                        </Col>
                                    </Col>
                                    <Col key={item.name} className='d-flex align-items-center' >
                                        <p className='text-white'>{item.description}</p>
                                    </Col>
                                </Row>
                            </>
                        ))
                        : testmonial.slice(0, 5).map(item => (
                            <>
                                <Row className='px-lg-5 p-4 border-1 border-bottom'>
                                    <Col xs={2} className='text-center'>
                                        <Image src='/footer/male.jpg' alt='' height={100} width={100} className='rounded-circle' />
                                        <Col key={item.name}>
                                            <p className='text-white pt-2'>{item.name}</p>
                                        </Col>
                                    </Col>
                                    <Col key={item.name} className='d-flex align-items-center' >
                                        <p className='text-white'>{item.description}</p>
                                    </Col>
                                </Row>
                            </>
                        ))}
                </Col>

                <Col className='text-center mt-3'>
                    {showAll ? (
                        <button onClick={handleShowLess} className='bg-transparent border-0'>
                            <p>VIEW LESS[-]</p>
                        </button>
                    ) : (
                        <button onClick={handleShowAll} className='bg-transparent border-0'>
                            <p>VIEW MORE[+]</p>
                        </button>
                    )}
                </Col>
            </Container>
        </>
    )
}

export default Testimonial