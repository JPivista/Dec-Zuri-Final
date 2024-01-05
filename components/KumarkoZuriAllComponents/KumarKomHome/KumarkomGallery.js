'use client'
import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'
// import { PhotoAlbum } from 'react-photo-album'
// import { Gallery } from 'react-grid-gallery'

// import Gallery from 'react-photo-gallery'


const KumarkomGallery = () => {

    const GalleryImages = [
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_1.jpg',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_2.jpg',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_3.jpg',
            width: 3,
            height: 4
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_4.jpg',
            width: 3,
            height: 4
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_5.jpg',
            width: 3,
            height: 4
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_6.jpg',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_7.jpg',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_8.png',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_9.png',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_10.jpg',
            width: 1,
            height: 1
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_11.jpg',
            width: 1,
            height: 1
        },
    ]
    return (
        <>
            <Container className='p-0 py-5'>
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>

                {/* <Gallery
                    onClick
                    columns={2}
                    photos={GalleryImages}
                /> */}


                <Col className='d-flex flex-column align-items-center py-4'>
                    <Col md={6} >
                        <Image src='/kumarkom/kumarkom-home/Gallery/zuri_hotel_fssai_certificate.jpeg' alt='' fluid />
                    </Col>
                </Col>


            </Container>
        </>
    )
}

export default KumarkomGallery