'use client'
import React, { useEffect, useState } from 'react'
import { Col, Container, Image } from 'react-bootstrap';

import config from '../../../config'

import '../../../components/StyledComponents'
import Link from 'next/link';

const Posts = ({ slug }) => {
    const [data, setData] = useState([])

    const siteUrl = config.apiUrl;

    const FetchPost = async () => {
        const URL_Fetchpost = `${siteUrl}/wp-json/wp/v2/posts?_embed&slug=${slug}`;
        let result = await fetch(URL_Fetchpost);
        result = await result.json();
        setData(result);
        console.log(result);
    }
    useEffect(() => {
        FetchPost();
    }, [])

    const formatPublishedDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    return (
        <>

            <Container className='custom-kumarkom-menu-container'>
                <Col md={8} className='d-flex flex-column gap-2'>

                    {data.map((items) => (
                        <div key={items.id}>
                            <Image
                                src={items.acf.image_for_post.url}
                                alt={items.title.rendered} fluid
                            />

                            <p
                                style={{ fontSize: '11px !important', color: '#126634' }}
                            >
                                <Link
                                    href="/"
                                    className='text-decoration-none text-black'
                                >
                                    Home
                                </Link> / {formatPublishedDate(items.date)}
                            </p>

                            <div
                                className='py-2'
                                style={{ color: '#913065' }}
                            >
                                <h4 dangerouslySetInnerHTML={{ __html: items.title.rendered }} />
                            </div>


                            {/* <p dangerouslySetInnerHTML={{ __html: items.content.rendered }} /> */}
                            {/* <div dangerouslySetInnerHTML={{ __html: items.content.rendered.replace(/http:\/\/localhost:3000/g, config.apiDomain) }} /> */}
                            <div dangerouslySetInnerHTML={{ __html: items.content.rendered }} />

                            <style>
                                {`
                                div h2 {
                                    color: #767676;;
                                }

                                a strong {
                                    color: black;
                                }

                                a {
                                    text-decoration: none;
                                }
                            `}
                            </style>
                        </div>
                    ))}
                </Col>

            </Container>
        </>
    )
}

export default Posts