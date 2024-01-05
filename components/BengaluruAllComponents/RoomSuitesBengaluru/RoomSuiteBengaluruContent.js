import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const RoomSuiteBengaluruContent = () => {
    const AmitiesBg = {
        background: '#cab17b'
    }

    return (
        <>
            <Container className='p-0 text-center'>
                <Col className='d-flex flex-column align-items-center mt-lg-5 mt-3 p-2 p-lg-0'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>EXPERIENCE 5 STAR LUXURY IN BENGALURU</h6>
                    <p>
                        When you’re freshly off a long flight, all you crave is some quiet comfort. A soft bed to curl up in, dim lighting and a fresh beverage to get rid of the jet lag. After all, when you have a business meeting the next day, you cannot afford to be anything less than your 100%. Which is why, the Zuri Whitefield, one of the best 5-star hotels in Whitefield, Bengaluru, is an oasis of comfort.
                    </p>

                    <p>
                        5 minute’s drive from the ITPB, it has 156 spacious guest rooms, 2 Junior suites and 4 executive hotel suites in Bengaluru. Whether it’s business or leisure, our hotel has a variety of everything to make sure you have a great experience. We love attention to detail and this is reflected in our decor. Each guest room is designed to provide an extremely luxurious stay.
                    </p>
                    <p>
                        The Zuri Bengaluru is one of the few 5 star hotels in Whitefield, Bengaluru, that offers two easy access rooms, especially tailored to accommodate the differently abled and cater to all their requirements. Lower switch boards for ease of access, sliding wardrobe doors, handles by the WC and lowered wash basins are some of the advantages provided in these rooms.
                    </p>

                    <p>
                        Our laundry services include laundry, dry cleaning and pressing, to make your clothes look as good as new and feel fresher than ever.
                    </p>

                    <p>
                        Note: The guests can check-in at 1:00 PM and Check-out at 11:00 AM based on the duration of their stay.
                    </p>
                </Col>

                <Col className='my-5 py-5 px-lg-0 px-4' style={AmitiesBg}>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center'>AMENITIES</h6>

                    <p className='text-black'>
                        24-Hour room service | Multi-room entertainment system | 32″ LCD television | Electronic safe | Mini bar
                        <br />
                        (Services on request) | Complimentary WI-FI | International direct dialling | 24 Hour Coffee Shop |
                        <br />
                        Complimentary breakfast | Iron and Ironing Board on request | Baby Cot on request | Writing Table | Bathtub |
                        <br />
                        Coffee/Tea Amenities | Concierge services | Complimentary on-site and valet parking
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default RoomSuiteBengaluruContent