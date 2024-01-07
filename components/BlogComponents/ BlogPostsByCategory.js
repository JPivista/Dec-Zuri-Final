'use client'
// BlogPostsByCategory.js

import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import DomainUrl from '../../config';

const BlogPostsByCategory = ({ categoryId }) => {
    const siteUrl = DomainUrl.wpApiUrl;
    const postsPerPage = 4;

    const [posts, setPosts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPostsByCategory = async () => {
            try {
                let endpoint;

                // Check if a category is selected
                if (categoryId !== null) {
                    endpoint = `${siteUrl}/posts?categories=${categoryId}&per_page=${postsPerPage}&page=${currentPage}`;
                } else {
                    // Fetch all posts when no category is selected
                    endpoint = `${siteUrl}/posts?per_page=${postsPerPage}&page=${currentPage}`;
                }

                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }

                const data = await response.json();
                setPosts(data);

                if (categoryId !== null) {
                    const totalPagesHeader = response.headers.get('X-WP-TotalPages');
                    setTotalPages(totalPagesHeader ? parseInt(totalPagesHeader, 10) : 1);
                }
            } catch (error) {
                setError(error.message);
            } finally {
                setIsLoading(false);
            }
        };

        fetchPostsByCategory();
    }, [categoryId, currentPage, isLoading]);


    const handlePageChange = (newPage) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
        }
    };

    const maxPagesToShow = 4; // Adjust the number of pages to show as needed

    const getPageRange = () => {
        if (totalPages <= maxPagesToShow) {
            return Array.from({ length: totalPages }, (_, index) => index + 1);
        }

        const startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
        const endPage = Math.min(totalPages, startPage + maxPagesToShow);

        if (endPage === totalPages) {
            return Array.from({ length: maxPagesToShow }, (_, index) => totalPages - maxPagesToShow + 1 + index);
        }

        return Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Container>
            <h1>Posts by Category</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>{post.title.rendered}</li>
                ))}
            </ul>
            {totalPages > 1 && ( // Check if there's more than one page
                <div>
                    {currentPage > 1 && (
                        <button onClick={() => handlePageChange(currentPage - 1)}>
                            Previous
                        </button>
                    )}
                    {getPageRange().map(page => (
                        <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            disabled={currentPage === page}
                        >
                            {page}
                        </button>
                    ))}
                    {currentPage < totalPages && (
                        <button onClick={() => handlePageChange(currentPage + 1)}>
                            Next
                        </button>
                    )}
                </div>
            )}
        </Container>
    );

};

export default BlogPostsByCategory;
