'use client'
import React, { useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap'
// import { PhotoAlbum } from 'react-photo-album'
// import { Gallery } from 'react-grid-gallery'

// import Gallery from 'react-photo-gallery'


const KumarkomGallery = () => {

    const galleryItems = [
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_1.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_2.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_3.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_4.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_5.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_6.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_7.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_8.png',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_9.png',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_10.jpg',
        },
        {
            src: '/kumarkom/kumarkom-home/Gallery/img_11.jpg',
        },
    ]

    const [lightboxIsOpen, setLightboxIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);

    const openLightbox = (index) => {
        setCurrentImage(index);
        setLightboxIsOpen(true);
    };

    const closeLightbox = () => {
        setCurrentImage(0);
        setLightboxIsOpen(false);
    };

    return (
        <>
            <Container className='p-0 py-5'>
                <Col className='d-flex flex-column align-items-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2'>GALLERY</h6>
                </Col>


                <div className="masonry px-lg-0 px-5">
                    {galleryItems.map((item, index) => (
                        <div key={index} onClick={() => openLightbox(index)}>
                            <Image src={item.src} alt={item.alt} />
                        </div>
                    ))}
                </div>

                {lightboxIsOpen && (
                    <div className="lightbox" onClick={closeLightbox}>
                        <div className="lightbox-content">
                            <Image src={galleryItems[currentImage].src} alt={galleryItems[currentImage].alt} />
                        </div>
                    </div>
                )}



                <Col className='d-flex flex-column align-items-center py-4 p-2'>
                    <Col md={6} >
                        <Image src='/kumarkom/kumarkom-home/Gallery/zuri_hotel_fssai_certificate.jpeg' alt='' fluid />
                    </Col>
                </Col>


            </Container >
        </>
    )
}

export default KumarkomGallery