import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const TrunkBarContent = () => {
    return (
        <>
            <Container className='p-0 text-center pt-5 px-md-4'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>THE TRUNK CALL BAR</h6>
                <p className='text-center'>
                    Overlooking the lush green landscaped garden and the calm waters of the <Link href="/lake-resorts-in-kumarakom/restaurants" className='text-decoration-none text-black'>
                        Vembanad Lake, Zuri’s
                    </Link>Trunk Call Bar offers a quaint dining experience. Choose from the finest varieties of the local cuisine or your favourites from world cuisine and pair them up with exotic cocktails from the bar menu. Watch the sun paint the sky pink as you relax in the beautiful interiors of the Trunk Call Bar, one of the <Link href="/lake-resorts-in-kumarakom/restaurants" className='text-decoration-none text-black'>
                        best restaurants in Kumarakom.
                    </Link>
                </p>

                <p>
                    To complement your drinks there are exclusive delicacies from the finest five star restaurants in Kumarakom to satisfy your appetite.
                    <br />
                    Timing: 11:00hrs -22:00hrs
                </p>

            </Container>
        </>
    )
}

export default TrunkBarContent