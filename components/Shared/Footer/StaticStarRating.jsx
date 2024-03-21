import React from 'react';

const StaticStarRating = ({ rating = 4 }) => {
    // Function to render filled, half-filled, or empty stars based on the rating
    const renderStars = () => {
        const stars = [];
        const filledStars = Math.floor(rating);
        const remainder = rating - filledStars;

        // Add filled stars
        for (let i = 0; i < filledStars; i++) {
            stars.push(<span key={i} className="star filled" style={{ color: '#fde16d', fontSize: '24px' }}>&#9733;</span>);
        }

        // Add half-filled star if remainder is greater than 0
        if (remainder > 0) {
            stars.push(<span key="half" className="star half" style={{ color: '#fde16d', fontSize: '24px' }}>&#9733;</span>);
        }

        // Add empty stars to fill up to 5
        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(<span key={`empty-${i}`} className="star bg-primary text-white">&#9733;</span>);
        }

        return stars;
    };

    return (
        <div className="static-star-rating">
            {renderStars()}
        </div>
    );
};

export default StaticStarRating;
