'use client'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'; // Import useEffect if needed

const Page = () => {
    const router = useRouter();

    useEffect(() => {
        // Redirect to /hotels-in-goa
        router.push('/beach-resorts-in-goa');
    }, []);

}

export default Page;
