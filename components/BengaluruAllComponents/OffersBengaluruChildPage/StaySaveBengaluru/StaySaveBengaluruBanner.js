import Link from 'next/link'
import React from 'react'
import { Container, Col } from 'react-bootstrap'

const StaySaveBengaluruBanner = () => {
    const BannerImg = {
        backgroundImage: `url('/bengaluru/offers/last_minute_deal_banner.jpg')`,
        height: 466,
        backgroundSize: 'cover'
    }
    return (
        <Container className='custom-kumarkom-menu-container' style={{}}>
            <Col className='pb-3'>
                <h3 className='text-center py-md-4 text-custom-grey'>STAY MORE, SAVE MORE</h3>
            </Col>

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

                <Link href="/hotels-in-bengaluru"
                    className='text-decoration-none mb-0'>
                    <h6 className=' font12px m-0 text-black'>Bengaluru</h6>
                </Link>
                /
                <Link href="/hotels-in-bengaluru/offers/"
                    className='text-decoration-none mb-0'>
                    <h6 className='text-custom-megenta font12px m-0'>Offers</h6>
                </Link>
            </Col>
        </Container>
    )
}

export default StaySaveBengaluruBanner