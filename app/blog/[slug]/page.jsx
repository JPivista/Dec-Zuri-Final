import React from 'react'

const page = ({ params }) => {
    return (
        <>
            {params.slug}
        </>
    )
}

export default page