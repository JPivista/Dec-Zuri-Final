'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { Col, Container, Image, Row } from 'react-bootstrap'

import '../../../app/globals.css'
import DesktopHeaderForm from './DesktopHeaderForm'


const DesktopHeader = () => {

    const [isMakeReservation, setIsMakeReservation] = useState(true);

    const handleMakeReservation = () => {
        setIsMakeReservation(!isMakeReservation);
    }

    const handleFormClose = () => {
        setIsMakeReservation(false);
    };

    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;

            // You can adjust the threshold based on when you want the container to start hiding
            const threshold = 100;

            setIsHidden(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <Container fluid className='position-fixed d-lg-flex flex-column d-none border-bottom bg-white z-3 p-0' >

                <Container fluid className='z-3 bg-white m-0' style={{ zIndex: '100' }} >
                    <Container className='p-0'>
                        <Row>
                            <Col md={2} >
                                <Link href="/" className='text-decoration-none'>
                                    <Image src='/zuri_logo.png' alt='' fluid />
                                </Link>
                            </Col>

                            <Col className='d-flex flex-column p-0 pt-2'>
                                <Col className='d-flex flex-row align-items-start justify-content-end gap-4'>
                                    <Link href="tel:806 665 7272"
                                        className='text-decoration-none text-black font12px'
                                    >
                                        <h6>
                                            <Image src='/header/phone_final.svg' alt='' />
                                            +91 806 665 7272
                                        </h6>
                                    </Link>

                                    <Link
                                        href="https://www.facebook.com/thezurihotels"
                                        target='_blank'
                                        className='text-decoration-none text-black'
                                    >
                                        <Image src='/header/facebook_final.svg' alt='' />
                                    </Link>

                                    <Link
                                        href="https://twitter.com/zurihotels"
                                        target='_blank'
                                        className='text-decoration-none text-black'
                                    >
                                        <Image src='/header/twitter_final.svg' alt='' />
                                    </Link>

                                    <Link
                                        href="https://www.youtube.com/channel/UCXxjZ-f7LTEMchpvECctUKg?view_as=subscriber"
                                        target='_blank'
                                        className='text-decoration-none text-black'
                                    >
                                        <Image src='/header/youtube_final.svg' alt='' />
                                    </Link>

                                    <Link
                                        href="https://www.instagram.com/thezurihotels/"
                                        target='_blank'
                                        className='text-decoration-none text-black'
                                    >
                                        <Image src='/header/instafinal.svg' alt='' />
                                    </Link>

                                    <Link
                                        href="https://www.linkedin.com/company/the-zuri-hotels-&-resorts/"
                                        target='_blank'
                                        className='text-decoration-none text-black'
                                    >
                                        <Image src='/header/linked_in_final.svg' alt='' />
                                    </Link>
                                </Col>

                                <Col className='d-flex flex-row pb-3'>
                                    <Col className='d-flex flex-column align-items-center justify-content-center'>
                                        <div className='d-flex flex-row'>
                                            <div>
                                                <div className='px-4 py-4 after-header hover-to-show'>
                                                    <h6 className=' mb-0 custom-header'>
                                                        Hotels
                                                    </h6>
                                                </div>

                                                <Container fluid className='hotel-hidden z-1' >
                                                    <Container className='position-relative'>
                                                        <Col className='dimond-shap-1'>
                                                        </Col>
                                                        <Col className='nav-show d-flex gap-4 flex-row'>
                                                            <Link
                                                                href="/lake-resorts-in-kumarakom/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                                            </Link>

                                                            <Link
                                                                href="/beach-resorts-in-goa/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri White Sands, Goa Resort & Casino</h6>
                                                            </Link>

                                                            <Link
                                                                href="/hotels-in-bengaluru/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri Whitefield, Bengaluru</h6>
                                                            </Link>
                                                        </Col>
                                                    </Container>
                                                </Container>
                                            </div>

                                            <div>
                                                <div className='px-4 py-4 after-header events'>
                                                    <h6 className=' mb-0 custom-header'>
                                                        Events
                                                    </h6>
                                                </div>

                                                <Container fluid className='events-hidden z-1' >
                                                    <Container className='position-relative'>
                                                        <Col className='dimond-shap-2'>
                                                        </Col>
                                                        <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                            <Link
                                                                href="/lake-resorts-in-kumarakom/events/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                                            </Link>

                                                            <Link
                                                                href="/beach-resorts-in-goa/events/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri White Sands, Goa Resort & Casino</h6>
                                                            </Link>

                                                            <Link
                                                                href="/hotels-in-bengaluru/events/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri Whitefield, Bengaluru</h6>
                                                            </Link>
                                                        </Col>
                                                    </Container>
                                                </Container>
                                            </div>

                                            <div>
                                                <div className='px-4 py-4 after-header offers'>
                                                    <h6 className=' mb-0 custom-header'>
                                                        Offers
                                                    </h6>
                                                </div>

                                                <Container fluid className='offers-hidden z-1' >
                                                    <Container className='position-relative'>
                                                        <Col className='dimond-shap-3'>
                                                        </Col>
                                                        <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                            <Link
                                                                href="/offers/stay-offers/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>Stay Offers</h6>
                                                            </Link>

                                                            <Link
                                                                href="/offers/dining-offers/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>Dining Offers</h6>
                                                            </Link>

                                                            <Link
                                                                href="/offers/ayurveda-package"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>Ayurveda Packages</h6>
                                                            </Link>
                                                        </Col>
                                                    </Container>
                                                </Container>
                                            </div>

                                            <div>
                                                <div className='px-4 py-4 after-header mayaspa'>
                                                    <h6 className=' mb-0 custom-header'>
                                                        Maya Spa
                                                    </h6>
                                                </div>

                                                <Container fluid className='mayaspa-hidden z-1' >
                                                    <Container className='position-relative'>
                                                        <Col className='dimond-shap-4'>
                                                        </Col>
                                                        <Col className='d-flex flex-row flex-wrap gap-4 nav-show'>
                                                            <Link
                                                                href="/lake-resorts-in-kumarakom/maya-spa/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri Kumarakom, Kerala Resort & Spa</h6>
                                                            </Link>

                                                            <Link
                                                                href="/beach-resorts-in-goa/maya-spa/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri White Sands, Goa Resort & Casino</h6>
                                                            </Link>

                                                            <Link
                                                                href="/hotels-in-bengaluru/maya-spa/"
                                                                className='text-decoration-none text-white'
                                                            >
                                                                <h6 className='header-font'>The Zuri Whitefield, Bengaluru</h6>
                                                            </Link>
                                                        </Col>
                                                    </Container>
                                                </Container>
                                            </div>


                                            <div className='px-4 py-4 after-header'>
                                                <Link
                                                    href="/contact-us"
                                                    className='text-decoration-none text-black'
                                                >
                                                    <h6 className=' mb-0 header-font'>
                                                        Contact Us
                                                    </h6>
                                                </Link>
                                            </div>

                                            <div className='px-4 py-4 after-header'>
                                                <Link
                                                    href="/blog"
                                                    target='_blank'
                                                    className='text-decoration-none text-black'
                                                >
                                                    <h6 className='mb-0  header-font'>
                                                        Blog
                                                    </h6>
                                                </Link>
                                            </div>
                                        </div>
                                    </Col>
                                    <Col md={4} className='d-flex'>
                                        <Col className='d-flex flex-column align-items-end justify-content-center'>
                                            <Row className='d-flex flex-row flex-nowrap d-inline-block justify-content-center '>
                                                <Col className='d-flex flex-row '>
                                                    <input
                                                        type='text'
                                                        placeholder='search'
                                                        className='d-inline-block rounded-5 custom-search-input'
                                                    />
                                                    <button type="button"
                                                        className='d-inline-block bg-transparent border-0 cusrom-make-reservation-icon'
                                                    >
                                                        <Image src='/header/search_icon_final.svg'

                                                            alt='' height={15} />
                                                    </button>
                                                </Col>
                                                <Col
                                                    className='d-flex flex-column justify-content-center cusrom-make-reservation-btn'
                                                    md={7}
                                                    onClick={handleMakeReservation}
                                                >
                                                    <Col
                                                        className='dimond-shap-purple'
                                                    >
                                                    </Col>
                                                    <h6 className='mb-0 font12px text-center'>
                                                        MAKE A RESERVATION
                                                    </h6>
                                                </Col>
                                            </Row>
                                        </Col>
                                    </Col>
                                </Col>
                            </Col>
                        </Row>
                    </Container>
                </Container>

                {isMakeReservation && (
                    <Container fluid className={`header-container ${isHidden ? 'hidden' : ''}`} style={{ zIndex: '0' }}>
                        <Container className='z-1 p-0'>
                            <DesktopHeaderForm onClose={handleFormClose} />
                        </Container>
                    </Container>
                )}

            </Container>



        </>
    )
}

export default DesktopHeader