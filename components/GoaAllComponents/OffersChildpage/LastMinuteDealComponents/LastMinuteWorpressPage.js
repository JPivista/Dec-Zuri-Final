'use client'
import React, { useState, useEffect } from 'react'
import { Button, Col, Container } from 'react-bootstrap';

import DomainUrl from '../../../../config'


const LastMinuteWorpressPage = () => {
    const [pageContent, setPageContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const pageId = '1918'; // Replace with the actual page ID

    const siteUrl = DomainUrl.wpPageApi;

    useEffect(() => {
        const fetchPageContent = async () => {
            try {
                const response = await fetch(`https://beta.thezurihotels.com/wp-json/wp/v2/pages/${pageId}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch page content');
                }
                const data = await response.json();
                setPageContent(data.content.rendered);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPageContent();
    }, [pageId]);

    if (isLoading) {
        return (
            <div className='position-fixed start-0 end-0 top-0 bottom-0 bg-black bg-opacity-10 d-flex flex-column justify-content-center align-items-center'>
                <div className='text-white fs-3'>Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>

            <style>
                {`
            a {
                color: black;
                text-decoration: none;
            }
            `}
            </style>
            <Container className='mt-5'>
                <div dangerouslySetInnerHTML={{ __html: pageContent }} />

                <Col className="text-center">
                    <Button href='https://be.synxis.com/?_ga=2.151837241.1414549171.1709525308-2038087003.1664255723&adult=1&arrive=2024-03-07&chain=17869&child=0&currency=INR&depart=2024-03-08&hotel=64787&level=hotel&locale=en-US&rate=CP%20PROADV&rooms=1' className='bg-purple border-0 rounded-0 text-center font14px px-4 p-2' target='_blank'>
                        Book Now
                    </Button>
                </Col>
            </Container>
        </>
    )
}

export default LastMinuteWorpressPage