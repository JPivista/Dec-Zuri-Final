import React from 'react'

// React Bootstrap and Bootstrap Icons
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

// React Multi Carousel
import 'react-multi-carousel/lib/styles.css';
import Script from 'next/script';

// Video React 
import "/node_modules/video-react/dist/video-react.css";

// React Tabs
import 'react-tabs/style/react-tabs.css';

// react-multiple-image-grid
// import MultipleGridImages from 'react-multiple-image-grid'


const index = () => {
    return (
        <>
            <Script
                src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
                crossorigin />

            <Script
                src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
                crossorigin />

            <Script
                src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
                crossorigin />

            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
                crossorigin="anonymous"
            />

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css" />
        </>
    )
}

export default index