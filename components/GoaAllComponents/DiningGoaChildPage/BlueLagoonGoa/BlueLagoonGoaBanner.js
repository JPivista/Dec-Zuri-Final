import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const BlueLagoonGoaBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/goa/dining/blue_lagoon_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }
    return (
        <Container className='p-0 pb-lg-5 pb-3' style={{}}>
            <Col className='p-0'
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

                <Link href="/beach-resorts-in-goa/restaurants/"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-black'>Restaurants</h6>
                </Link>
            </Col>
        </Container >
    )
}

export default BlueLagoonGoaBanner