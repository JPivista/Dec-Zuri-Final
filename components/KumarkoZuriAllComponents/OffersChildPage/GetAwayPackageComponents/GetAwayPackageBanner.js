import Link from 'next/link'
import React from 'react'
import { Col, Container } from 'react-bootstrap'

const GetAwayPackageBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/kumarkom/offers/getway_package_banner_new.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }

    return (
        <Container className='custom-kumarkom-menu-container'>

            <h3 className='text-center py-md-4 text-custom-grey'>GETAWAY PACKAGE
            </h3>

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
                <Link href="/lake-resorts-in-kumarakom"
                    className='text-decoration-none mb-0'>
                    <h6 className='font12px mb-0 text-black'>Lake Resorts In Kumarakom</h6>
                </Link>
                /
                <Link href="/lake-resorts-in-kumarakom/offers/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px mb-0'>Offers</h6>
                </Link>
            </Col>
        </Container >
    )
}

export default GetAwayPackageBanner