'use client'
import Link from 'next/link';
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel';

const KumarkomDiningSlider = () => {


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

    return (
        <>
            <Container className='p-0 text-center px-md-5' style={{}}>

                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>RESTAURANTS AT THE ZURI KUMARAKOM</h6>
                <p className='text-center'>
                    Be prepared for a quality dining experience, at The Zuri Kumarakom, <Link href="/lake-resorts-in-kumarakom" className='text-black text-decoration-none'>Kerala Resort</Link> and Spa. Mughlai, Malayali or Seafood delights, the resort offers it all. Our chefs know what it takes to tantalize your taste buds. Those who like their drinks, would love the ambience and service at the lake-front bar and the cigar lounge.
                </p>
                <Col className=''>
                    <Col className='py-5'>

                        <Image src='/cl.png' alt='' fluid />
                        <h6 className='py-2 pt-4 text-center'>RESTAURANTS</h6>
                    </Col>


                    <Carousel className=''
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop"]}
                        swipeable={false}
                        draggable={false}
                        showDots={false}

                    >
                        <Col className='text-center d-flex flex-column align-items-center gap-4' >
                            <Image src='/kumarkom/restarents/limetree_circle_img.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                            <Link
                                href="/lake-resorts-in-kumarakom/restaurants/lime-tree/"
                                style={buttonHover}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className='px-5 py-2  text-decoration-none'
                            >
                                Lime Tree
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4' >
                            <Image src='/kumarkom/restarents/trunkcall_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                            <Link
                                href="/lake-resorts-in-kumarakom/restaurants/the-trunk-call-bar"
                                style={buttonHover1}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                                className='px-5 py-2 text-decoration-none'
                            >
                                The Trunk Call Bar
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4'>
                            <Image src='/kumarkom/restarents/lagunabar_thumb.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                            <Link
                                href="/lake-resorts-in-kumarakom/restaurants/laguna-bass"
                                style={buttonHover2}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                                className='px-5 py-2 text-decoration-none'
                            >
                                Laguna Bass
                            </Link>
                        </Col>
                    </Carousel>
                </Col>
            </Container>
        </>
    )
}

export default KumarkomDiningSlider