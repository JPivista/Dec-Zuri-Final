'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
import Carousel from 'react-multi-carousel'

const AboutUsContent = () => {

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3,
            slidesToSlide: 2 // optional, default to 1.
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
            <Container>
                <Col className='text-center mt-3'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center text-black'>
                        ABOUT US
                    </h6>
                </Col>

                <Col className='text-center'>
                    <p>
                        Rolling out the red carpet for guests from across the globe in its unique way, the Zuri Group has created a benchmark in the world of hospitality. Offering uncompromising luxury, best-in-class service and world-class amenities, each of the three properties under the Zuri Group promise a five star experience, in every sense.
                    </p>

                    <p>
                        The <Link href="/beach-resorts-in-goa" className='text-decoration-none text-black'>Zuri White Sands in Goa</Link> is an invitation to experience opulence right in the midst of sea, surf and sand. A contrast to the party-scene in Goa, the <Link href="/lake-resorts-in-kumarakom" className='text-decoration-none text-black'>Zuri Kumarakom, Kerala</Link> takes you on a satisfying journey of serenity and beauty, amidst the many hues of green. Offering luxury right in the middle of a bustling IT locale, the <Link href="/hotels-in-bengaluru" className='text-decoration-none text-black'>Zuri Whitefield in Bengaluru</Link>, is the perfect destination for those who mean business.
                    </p>

                    <p>
                        Welcome to one of the best 5 star hotels in India for an experience ‘far beyond expectations’. And discover the true meaning of ‘Zuri’.
                    </p>
                </Col>


                {/* Properties */}

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center text-black'>
                        PROPERTIES
                    </h6>
                </Col>


                <Col className='px-lg-5'>
                    <Carousel className=''
                        responsive={responsive}
                        removeArrowOnDeviceType={["tablet", "desktop"]}
                        swipeable={false}
                        draggable={false}
                        showDots={false}
                    >
                        <Col className='text-center d-flex flex-column align-items-center gap-4' >
                            <Image src='/footer/aboutus/kearala-properties.jpg' alt='' roundedCircle width={180} height={180} className='kumarkom-image-overlay' />

                            <Link
                                href="/lake-resorts-in-kumarakom/rooms-suites/zuri-room"
                                style={buttonHover}
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                                className='px-5 py-2 text-decoration-none w-100'
                            >
                                The Zuri Kumarakom, Kerala  <br />
                                Resort & Spa
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4 px-lg-1' >
                            <Image src='/footer/aboutus/whitesand-properties.jpg' alt='' roundedCircle width={180} height={180} className='kumarkom-image-overlay' />
                            <Link
                                href="/footer/aboutus/whitesand-properties.jpg"
                                style={buttonHover1}
                                onMouseEnter={handleMouseEnter1}
                                onMouseLeave={handleMouseLeave1}
                                className='px-5 py-2 text-decoration-none w-100'
                            >
                                The Zuri White Sands, Goa <br />
                                Resorts & Casino
                            </Link>
                        </Col>
                        <Col className='text-center d-flex flex-column align-items-center gap-4'>
                            <Image src='/footer/aboutus/whitefield-properties.jpg' alt='' roundedCircle width={180} height={180} className='kumarkom-image-overlay' />

                            <Link
                                href="/lake-resorts-in-kumarakom/rooms-suites/cottage"
                                style={buttonHover2}
                                onMouseEnter={handleMouseEnter2}
                                onMouseLeave={handleMouseLeave2}
                                className='px-5 py-2 text-decoration-none w-100'
                            >
                                The Zuri Whitefield, <br />
                                Bengaluru
                            </Link>
                        </Col>
                    </Carousel>
                </Col>


                {/* Certifition */}
                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center text-black'>
                        PROPERTIES
                    </h6>
                </Col>

                <Col className='text-center'>
                    <Image src='/footer/aboutus/certificate.jpg' alt='' className='img-fluid' />
                </Col>
            </Container>
        </>
    )
}

export default AboutUsContent