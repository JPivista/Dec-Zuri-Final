import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'

const AboutKumarkomContent = () => {
    return (
        <>
            <Container className='p-0 pt-4 text-center px-md-5' style={{}}>
                <Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center'>ABOUT KUMARAKOM</h6>
                    <p className='text-center'>
                        Take a seat among the swaying coconut palms, to look out at the vast expanse of a huge lake. Every now and then, a heron flies by, creating a fluttering moment of activity in an otherwise calm atmosphere.
                    </p>
                    <p>
                        You will never get bored visiting the various tourist destinations in Kumarakom. The lush backdrop and the abundance of flora and fauna attract travellers from all over the world. What’s more, the area is part of a route that a lot of beautiful migratory birds take, thus making it a wonderful destination for all nature-enthusiasts.
                    </p>
                </Col>

                <Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center'>CLIMATE</h6>
                    <p className='text-center'>
                        Experiencing moderate climate all around the year, the town interestingly experiences two monsoons; the south-west and north-east monsoon. You can lie in your hammock all day, looking up at clouds forming interesting shapes in the sky. The rains bathe the town, and give it a fresh avatar. This destination is ideal for a getaway, and hence, it is little wonder that our Kerala honeymoon packages are highly popular, for luxury and leisure seekers as well as business travellers.
                    </p>
                </Col>


                <Col>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 pt-4 text-center'>FOOD</h6>
                    <p className='text-center'>
                        Gorge on freshwater fish, shrimps and crab. Prepared in delicious curries with coconut milk, these amazing delicacies will satisfy every craving you have. The shallow-fried Pearl Spot, known popularly as Karimeen, is something you must try when you visit Kumarakom. Doused in a delicately made batter with spices and fried in coconut oil, the Karimeen fry is the perfect representation of authentic local cuisine!
                    </p>
                </Col>
            </Container>





            {/* Desktop View */}
            <Container className='text-center'>
                <Col className='d-md-flex flex-column d-none'>
                    <h4 className='mt-4'>WHAT NOT TO MISS AT KUMARAKOM</h4>
                    <div className='underline position-relative mb-5'>
                        <span className='down-arrow'>
                        </span>
                    </div>
                </Col>

                <Col className='d-md-flex flex-column d-none'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>BOAT RIDE IN THE VEMBANAD LAKE</h6>
                            </Col>
                            <p>
                                Lie back and watch the palms lazily drift by, as you perch upon a Kettuvallam. Make your way through the network of backwaters that is so essentially Kerala. Watch the sun disappear into the horizon, sinking into the vast sea of ripples of the huge lake.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/about-kumarkokm/boat_ride_vembanad_lake_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/about-kumarkokm/midnight_sands_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>A VISIT TO MIDNIGHT SANDS</h6>
                            </Col>
                            <p>
                                The 40-minute boat ride to Pathiramanal (Midnight Sands) from Kumarakom is full of mystical natural beauty, courtesy the Vembanad Lake and its ecosystem. Once on the island, feast your eyes on the exquisite species of migratory birds, which Enhances the charm of the environment.
                            </p>
                            <p>
                                Spread over a huge expanse of 14 acres, the bird sanctuary is a favourite choice of hobbyist and professional ornithologists. From the majestic Siberian Stork to the enthusiastic egret, the ever-watchful Darter to the graceful herons, get ready to experience nature in all its glory, at this amazing resort.
                            </p>
                        </Col>
                    </Col>

                    <Col>
                        <h4 className='mt-4'>EVENTS</h4>

                        <div className='underline position-relative mb-5'>
                            <span className='down-arrow'>
                            </span>
                        </div>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className=''>VAIKATHASHTAMI</h6>
                            </Col>
                            <p>
                                One of the most important temple festivals of Kerala is celebrated in all its grandeur, with great pomp and splendour, at the Vaikom Mahadeva Temple. Legend says that Lord Shiva and his wife Parvathi Devi appeared to the Saint Vyagrahapada after long days of prayers. In the month of November or December (depending on the cultural Malayalam calendar), processions carrying grand statues of Lord Shiva flanked by elephants in their festive attire wind their way through town.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/about-kumarkokm/vaikathashtami_events_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/kumarkom/about-kumarkokm/erumeli_petta_thullal_events_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-4 pb-md-3' />
                                <h6 className=''>ERUMELI PETTA THULLAL</h6>
                            </Col>
                            <p>
                                Held in January, this grand festival is organized by the Sri Dharma Sastha Temple. While devotees perform various rituals to the Gods, temple elephants are also prepared. This festival provides a deep insight into Malayali Culture, through its performances.
                            </p>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className=''>ONAM</h6>
                            </Col>
                            <p>
                                Celebrated in August and September, Onam is a big deal not only in Kumarakom but all over Kerala. The interesting thing about Onam is that it is not a religious festival; which is why everyone, irrespective of caste and creed celebrates it, for it is a celebration of the land. Boat races and musical performances perfectly encapsulate the festive spirit. Indulge yourself into ‘Onam Sadya’, the traditional meal on this auspicious day, rounds off the festival.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/kumarkom/about-kumarkokm/onam_events_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>
                </Col>
                <Col className='text-center py-4'>
                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                    <h6>NEAREST AIRPORT</h6>
                    <p>
                        The Cochin International Airport is approximately 80 kilometers or 50 miles from the town.
                        <br />
                        Cochin and Kumarakom are very well connected by road and rail.
                    </p>
                </Col>
            </Container >


            {/* Mobile View */}
            <Container className='p-2 d-flex flex-column d-md-none'>

                <h4 className='my-5 pb-3 border border-2 border-top-0 border-end-0 border-start-0 d-inline-block'>WHAT NOT TO MISS AT KUMARAKOM</h4>

                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>BOAT RIDE IN THE VEMBANAD LAKE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/about-kumarkokm/boat_ride_vembanad_lake_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Lie back and watch the palms lazily drift by, as you perch upon a Kettuvallam. Make your way through the network of backwaters that is so essentially Kerala. Watch the sun disappear into the horizon, sinking into the vast sea of ripples of the huge lake.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>A VISIT TO MIDNIGHT SANDS</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/about-kumarkokm/midnight_sands_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            The 40-minute boat ride to Pathiramanal (Midnight Sands) from Kumarakom is full of mystical natural beauty, courtesy the Vembanad Lake and its ecosystem. Once on the island, feast your eyes on the exquisite species of migratory birds, which Enhances the charm of the environment.
                        </p>
                        <p>
                            Spread over a huge expanse of 14 acres, the bird sanctuary is a favourite choice of hobbyist and professional ornithologists. From the majestic Siberian Stork to the enthusiastic egret, the ever-watchful Darter to the graceful herons, get ready to experience nature in all its glory, at this amazing resort.
                        </p>
                    </Col>

                    <Col className='text-center'>
                        <h4 className='my-5 pb-3 border border-2 border-top-0 border-end-0 border-start-0 d-inline-block'>EVENTS</h4>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>VAIKATHASHTAMI</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/about-kumarkokm/vaikathashtami_events_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            One of the most important temple festivals of Kerala is celebrated in all its grandeur, with great pomp and splendour, at the Vaikom Mahadeva Temple. Legend says that Lord Shiva and his wife Parvathi Devi appeared to the Saint Vyagrahapada after long days of prayers. In the month of November or December (depending on the cultural Malayalam calendar), processions carrying grand statues of Lord Shiva flanked by elephants in their festive attire wind their way through town.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>ERUMELI PETTA THULLAL</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/kumarkom/about-kumarkokm/erumeli_petta_thullal_events_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Held in January, this grand festival is organized by the Sri Dharma Sastha Temple. While devotees perform various rituals to the Gods, temple elephants are also prepared. This festival provides a deep insight into Malayali Culture, through its performances.
                        </p>
                    </Col>
                </Col>

                <Col className='d-flex flex-column align-items-center py-3'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center border border-bottom border-0 w-100'>ONAM</h6>
                </Col>

                <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                        <Image src='/kumarkom/about-kumarkokm/onam_events_3.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                    </Col>
                    <p>
                        Celebrated in August and September, Onam is a big deal not only in Kumarakom but all over Kerala. The interesting thing about Onam is that it is not a religious festival; which is why everyone, irrespective of caste and creed celebrates it, for it is a celebration of the land. Boat races and musical performances perfectly encapsulate the festive spirit. Indulge yourself into ‘Onam Sadya’, the traditional meal on this auspicious day, rounds off the festival.
                    </p>
                </Col>
                <Col className='text-center py-3'>
                    <h6>NEAREST AIRPORT</h6>
                    <p>
                        The Cochin International Airport is approximately 80 kilometers or 50 miles from the town.
                        <br />
                        Cochin and Kumarakom are very well connected by road and rail.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default AboutKumarkomContent