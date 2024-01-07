import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const AyurvedaMayaSpaKumakomContent = () => {
    return (
        <>
            <Container className='p-0 px-md-5 px-3 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>MAYA AYURVEDIC SPA</h6>
                <p className='text-center'>
                    The term ‘Ayurveda’ in Sanskrit means life-knowledge. Using the ancient knowledge that has been passed down over generations, our Ayurvedic treatments re-kindle the spark of vitality and life.
                </p>

                <p>
                    At The Zuri Maya Ayurvedic
                    <Link href="/lake-resorts-in-kumarakom/maya-spa/" className='text-decoration-none text-black'>
                        Spa Resort in Kumarakom
                    </Link>, we offer a range of traditional Ayurvedic treatments along with our other signature treatments. Whether you seek specialised treatments for illnesses or you wish to return home feeling completely rejuvenated, our Ayurvedic treatments cater to your every need. Choose from over 10 signature treatments and rejuvenate body, mind and soul.
                </p>
            </Container>
        </>
    )
}

export default AyurvedaMayaSpaKumakomContent