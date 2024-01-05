import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const AboutGoaBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/goa/about_goa_banner.jpeg')`,
        height: 466,
        backgroundSize: 'cover'
    }
    return (
        <Container className='p-0' style={{}}>

            <Col className='p-0'
                // style={{ backgroundImage: "url(/kumarkom/room_suites_kumarkom_banner.jpg)", height: '460px', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
                style={BannerImg}
            >
            </Col>

            <Col className='d-flex flex-row flex-wrap p-0 align-items-center' >


                <Link href="/"
                    className='text-decoration-none text-black m-0'>
                    <h6 className='mb-0 font12px'>Home</h6>
                </Link>

                /

                <Link href="/beach-resorts-in-goa"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-black'>Beach Resorts In Goa</h6>
                </Link>


                /

                <Link href=""
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px text-custom-megenta m-0 text-black'> Destination</h6>
                </Link>
            </Col>

        </Container >
    )
}

export default AboutGoaBanner