import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const KaribuDiningContent = () => {
    return (
        <>
            <Container className='p-md-0 p-2 text-center'>
                <Col className='d-flex flex-column align-items-center '>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>KARIBU – THE MULTI-CUISINE RESTAURANT IN BENGALURU</h6>
                    <p>
                        Dine at one of the most loved all-day-dining, global-cuisine restaurants in Bengaluru – Karibu. A live pizza oven, an elaborate buffet spread for breakfast, lunch and dinner and a special brunch on weekends, Karibu pulls out all stops to make sure our esteemed guests feel extra-special.

                    </p>

                    <p>
                        Whether you like Indian or Continental cuisine, you will never be short of options. The restaurant has its own signature cocktails as well. The antique finish wall lights add class to the interior decor.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default KaribuDiningContent