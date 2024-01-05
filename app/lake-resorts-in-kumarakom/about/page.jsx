import Breadcrumbs from '@/components/KumarkoZuriAllComponents/Breadcrumbs';
import React from 'react'

const page = () => {
    const breadcrumbItems = [{ label: 'Home', href: '/lake-resorts-in-kumarakom/home' }];

    return (
        <div>
            <Breadcrumbs items={breadcrumbItems} />
            <h1>Home Page Content Goes Here</h1>
        </div>
    )
}

export default page