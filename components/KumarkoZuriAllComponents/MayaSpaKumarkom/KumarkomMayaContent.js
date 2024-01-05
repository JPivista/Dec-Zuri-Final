import Link from 'next/link'
import React from 'react'
import { Container, Image } from 'react-bootstrap'

const KumarkomMayaContent = () => {
    return (
        <>
            <Container className='p-0 px-md-5 px-3 text-center'>
                <Image src='/cl.png' alt='' fluid />
                <h6 className='py-2 pt-4 text-center'>MAYA SPA</h6>
                <p className='text-center'>
                    The word ‘Maya’ in Sanskrit stands for ‘Illusion’. Choose from a wide range of specialised treatments at Zuri’s very own spa range and watch all your tensions and worries melt away. From world famous <Link href="lake-resorts-in-kumarakom/maya-spa/therapies" className='text-decoration-none text-black'>
                        Ayurvedic treatments that Kerala
                    </Link>
                    is known for, to a wide variety of Western and Oriental therapies popular worldwide, Maya Spa at the Zuri Kumarakom offers you a world of luxury and healing.
                </p>
            </Container>
        </>
    )
}

export default KumarkomMayaContent
