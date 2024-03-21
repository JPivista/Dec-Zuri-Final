import React from 'react'
import ReviewList from './StarRating'
import review from './CustomerReviewList'
import { Container } from 'react-bootstrap'

const CustomerReview = () => {
    return (
        <Container className='custom-kumarkom-menu-container'>
            <h3 className='text-center py-md-4 text-custom-grey'>REVIEWS FROM OUR ESTEEMED GUESTS</h3>
            <ReviewList reviews={review} />
        </Container>

    )
}

export default CustomerReview