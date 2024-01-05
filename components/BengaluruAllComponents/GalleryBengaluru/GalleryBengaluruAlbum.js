'use client'
import React, { useState, useEffect } from 'react'

import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import DomainUrl from '../../../config'

const GalleryBengaluruAlbum = () => {
    const [mediaData, setMediaData] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const siteUrl = DomainUrl.wpApiUrl;
    useEffect(() => {
        // console.log('Fetching media data for category:', selectedCategory);
        const fetchMediaData = async () => {
            try {
                const categoryMediaIds = getCategoryMediaIds(selectedCategory);
                const mediaPromises = categoryMediaIds.map(async (id) => {
                    const response = await fetch(`${siteUrl}/media/${id}`);
                    if (!response.ok) {
                        throw new Error(`Failed to fetch media with ID ${id}`);
                    }
                    return response.json();
                });

                const categoryMediaDetails = await Promise.all(mediaPromises);
                const flattenedMediaDetails = categoryMediaDetails.flat();
                setMediaData(flattenedMediaDetails);
            } catch (error) {
                console.error('Error fetching media data:', error);
            }
        };

        fetchMediaData();
    }, [siteUrl, selectedCategory]);

    const handleCategoryClick = (category) => {
        // console.log('Clicked category:', category);
        setSelectedCategory(category);
    };

    const getCategoryMediaIds = (category) => {
        switch (category) {
            case 'All':
                return [5155, 5154, 5153, 5152, 5151, 5150, 5149, 5148, 5147, 5146, 5145, 5144, 5143, 5142, 5141, 5140, 5139, 5138, 5137, 5136, 5135, 5134, 5133, 5132, 5131, 5130, 5129, 5128, 5127];
            case 'Room & Suites':
                return [5152, 5151, 5150, 5149, 5148, 5147, 5146, 5145];
            case 'Dining':
                return [5144, 5143, 5142, 5141, 5140, 5139, 5138, 5137, 5136, 5135];
            case 'Maya spa':
                return [5134, 5133, 5130];
            case 'Lifestyle':
                return [5131, 5130, 5129, 5128, 5127];
            // Add more cases for additional categories
            default:
                return [];
        }
    };

    return (
        <>
            <Container className='mt-5'>

                <Row>
                    <Col lg={2}>
                        <Row className='d-flex flex-column gap-2'>
                            {['All', 'Room & Suites', 'Dining', 'Maya spa', 'Lifestyle'].map((category) => (
                                <Button
                                    key={category}
                                    onClick={() => handleCategoryClick(category)}
                                    variant=""
                                    className='text-start'
                                    style={{
                                        color: selectedCategory === category ? '#80027f' : '#6c6e71'
                                    }}
                                >
                                    <h6>
                                        {category}
                                    </h6>
                                </Button>
                            ))}
                        </Row>
                    </Col>
                    <Col>
                        <Row className='d-flex  align-items-stretch'>
                            {/* Display fetched media data */}
                            {mediaData.map((media) => (
                                <Col key={media.id} md={4} className='p-0'>
                                    <Image
                                        src={media.source_url}
                                        alt={`Media with ID ${media.id}`}
                                        style={{ width: '100%', padding: '5px' }}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default GalleryBengaluruAlbum