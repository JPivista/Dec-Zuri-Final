import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const LagunaBassContent = () => {
    return (
        <>
            <Container className='p-0 text-center pt-4 px-md-4'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>LAGUNA BASS – ENTICING SEAFOOD RESTAURANT IN KUMARAKOM</h6>
                <p className='text-center'>
                    Experience the rich flavours and fragrance of Kerala’s sea food at Laguna Bass with an innovative interactive kitchen. You can even choose from the freshest live catch of the day! The Laguna Bass is the perfect setting for a formal dinner or even a business meeting. Experience the authentic flavours of Kerala’s seafood at The Laguna Bass, one the most sought-after fine dining  <Link href="/lake-resorts-in-kumarakom/restaurants" className='text-decoration-none text-black'>
                        restaurants in Kumarakom
                    </Link>.
                </p>

                <p>
                    Open Hours:
                    <br />
                    Lunch: 12:30hrs- 15:00hrs
                    <br />
                    Dinner:1930 hours to 22:00 hours
                </p>
                <Link
                    href="/kumarkom/restarents/pdf/laguna-bass-menu.pdf"
                    target='_blank'>
                    <p className='bg-purple px-5 py-2 rounded-4 d-inline-block text-white'>
                        Menu
                    </p>
                </Link>
            </Container>
        </>
    )
}

export default LagunaBassContent
