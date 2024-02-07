'use client'
import React, { useEffect, useState } from 'react'


import DomainUrl from '../../../../config'
import { Container } from 'react-bootstrap';


const GetAwayKumarkomComponents = () => {
    const [pageContent, setPageContent] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const pageId = '7236'; // Replace with the actual page ID

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
            <div className='position-absolute start-0 end-0 top-0 bottom-0 bg-black bg-opacity-10 d-flex flex-column justify-content-center align-items-center'>
                <div className='text-white fs-3'>Loading...</div>
            </div>
        );
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <>
            <Container className='mt-5 overflow-x-hidden'>
                <div dangerouslySetInnerHTML={{ __html: pageContent }} />
            </Container>
        </>
    );

};


export default GetAwayKumarkomComponents
