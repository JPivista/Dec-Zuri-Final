'use client'
import Image from 'next/image';
import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const StarRating = ({ rating }) => {
    const maxRating = 5; // Maximum rating
    const filledStars = Math.floor(rating); // Number of filled stars
    const remainder = rating - filledStars; // Fractional part to determine half star

    // Function to generate stars based on rating
    const renderStars = () => {
        const stars = [];

        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(<span key={i} className="star filled" style={{ color: '#fde16d', fontSize: '25px' }}>&#9733;</span>);
        }

        // Add half star if remainder is greater than 0
        if (remainder > 0) {
            const halfStarWidth = `${remainder * 50}%`;
            stars.push(
                <span key="half" className="star half" style={{ color: '#fde16d', width: halfStarWidth, fontSize: '25px' }}>&#9733;</span>
            );
        }

        for (let i = stars.length; i < maxRating; i++) {
            stars.push(<span key={i} className="star" style={{ color: '#e0e0e0', fontSize: '25px' }}>&#9733;</span>);
        }
        return stars;
    };

    return (
        <div style={{ display: 'inline-block' }}>
            {renderStars()}
        </div>
    );
};

const ReviewList = ({ reviews }) => {

    const [showAll, setShowAll] = useState(false);

    const handleShowAll = () => {
        setShowAll(true);
    };

    const handleShowLess = () => {
        setShowAll(false);
    };

    return (
        <Container>
            {/* <div>
                {reviews.map((review, index) => (
                    <div key={index} className="review">
                        <h3>{review.name}</h3>
                        <p>{review.date}</p>
                        <p>{review.description}</p>
                        <StarRating rating={parseFloat(review.rating)} />
                    </div>
                ))}
            </div> */}

            <Col className='p-0' >
                {showAll
                    ? reviews.map((review, index) => (
                        <>
                            <Row className='px-lg-5 p-4 border-1 border-bottom' style={{ background: '#eee' }}>
                                <Col xs={2} className='text-center'>
                                    <Image src='/footer/male.jpg' alt='' height={100} width={100} className='rounded-circle img-fluid p-3' />
                                </Col>
                                <Col key={review.name}>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <p className='mb-0 text-black'>
                                                    {review.name}
                                                </p>
                                                <p className='text-black'>
                                                    {review.date}
                                                </p>
                                            </Col>
                                            <Col className='d-flex  justify-content-end'>
                                                <div >
                                                    <div className='bg-light d-inline-block h-auto p-1'>
                                                        <StarRating rating={parseFloat(review.rating)} />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Col>
                                            <p className='text-black'>&quot;{review.description}&quot;</p>
                                        </Col>
                                    </Col>
                                </Col>
                            </Row>
                        </>
                    ))
                    : reviews.slice(0, 5).map(review => (
                        <>
                            <Row className='px-lg-5 p-4 border-1 border-bottom' style={{ background: '#eee' }}>
                                <Col xs={2} className='text-center'>
                                    <Image src='/footer/male.jpg' alt='' height={100} width={100} className='rounded-circle img-fluid p-3' />
                                </Col>
                                <Col key={review.name}>
                                    <Col>
                                        <Row>
                                            <Col>
                                                <p className='mb-0'>
                                                    {review.name}
                                                </p>
                                                <p>{review.date}</p>
                                            </Col>
                                            <Col className='d-flex  justify-content-end'>
                                                <div >
                                                    <div className='bg-light d-inline-block h-auto p-1'>
                                                        <StarRating rating={parseFloat(review.rating)} />
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                        <Col>
                                            <p className='text-black'>&quot;{review.description}&quot;</p>
                                        </Col>
                                    </Col>
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
    );
};

export default ReviewList;
