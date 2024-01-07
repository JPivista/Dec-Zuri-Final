'use client'// 'use client' import and other imports...

import React, { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import DomainUrl from '../../config';
import '../../app/globals.css';
import BlogPostsByCategory from './ BlogPostsByCategory';  // Import the new component

const BlogContentWordpress = () => {
    const siteUrl = DomainUrl.wpApiUrl;
    const postsPerPage = 4;

    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [allPosts, setAllPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllCategories = async () => {
            try {
                const response = await fetch(`${siteUrl}/categories?per_page=100`);
                if (!response.ok) {
                    throw new Error('Failed to fetch categories');
                }
                const data = await response.json();
                setCategories(data);
                console.log(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        const fetchAllPosts = async () => {
            try {
                const response = await fetch(`${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch all posts');
                }

                const data = await response.json();
                setAllPosts(data);

                const totalPagesHeader = response.headers.get('X-WP-TotalPages');
                setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchAllCategories();
        fetchAllPosts();
    }, [currentPage]);

    const handleCategoryClick = (categoryId) => {
        setSelectedCategory(categoryId);
        setCurrentPage(1); // Reset page when selecting a category
    };

    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    const maxPagesToShow = 4;

    const getVisiblePages = () => {
        const halfMaxPagesToShow = Math.floor(maxPagesToShow / 2);
        const firstVisiblePage = Math.max(1, currentPage - halfMaxPagesToShow);
        const lastVisiblePage = Math.min(totalPages, firstVisiblePage + maxPagesToShow - 1);

        return Array.from({ length: lastVisiblePage - firstVisiblePage + 1 }, (_, index) => firstVisiblePage + index);
    };

    return (
        <Container className='custom-kumarkom-menu-container'>
            <h1 className='text-center text-custom-grey p-5'>Blog</h1>
            <Row>
                <Col className='' lg={8}>
                    {selectedCategory ? (
                        <BlogPostsByCategory categoryId={selectedCategory} />
                    ) : (
                        <>
                            <h2>All Posts</h2>
                            <ul>
                                {allPosts.map(post => (
                                    <li key={post.id}>{post.title.rendered}

                                        <img
                                            src={post.acf?.image_for_post}
                                            alt={post.title.rendered}
                                        />
                                    </li>
                                ))}
                            </ul>
                            <div>
                                {currentPage !== 1 && (
                                    <button
                                        onClick={() => handlePageChange(currentPage - 1)}
                                        className='previous'
                                    >
                                        Previous
                                    </button>
                                )}
                                {getVisiblePages().map(pageNumber => (
                                    <button
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        disabled={currentPage === pageNumber}
                                        className={currentPage === pageNumber ? 'active' : ''}
                                    >
                                        {pageNumber}
                                    </button>
                                ))}
                                <button
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className={currentPage === totalPages ? 'disabled' : ''}
                                >
                                    Next
                                </button>
                            </div>
                        </>
                    )}
                </Col>
                <Col>
                    <h2>Categories</h2>
                    <ul>
                        {categories.map(category => (
                            <li key={category.id} onClick={() => handleCategoryClick(category.id)}>
                                {category.name}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Container>
    );
};

export default BlogContentWordpress;
