import React from 'react'
import { Col, Container, Image } from 'react-bootstrap'


const AboutBengaluruContent = () => {
    return (
        <>
            <Container className='p-0'>
                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>ABOUT BENGALURU</h6>
                    <p>
                        Bustling with travellers from every corner of the world Bengaluru is one of the biggest cosmopolitan cities in India. Due to the abundance of tourist destinations in Bengaluru, people visit the city from all across the globe.Moreover, many M.N.C companies have their headquarters here, so there is always a steady influx of business travellers, as well. The city has a dual personality; known as the ‘Garden City’ due to its lush greenery and known as the ‘Silicon Valley of India’ due to the sheer number of top technology firms who have set up offices here. To sum it up, Bengaluru is a city that loves fine wining and dining, shopping and other leisure activities, and gets serious when it’s time for work.
                    </p>
                </Col>

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>CLIMATE</h6>
                    <p>
                        One of Bengaluru’s USP’s is the climate with its favourable temperature levels in the summer, unlike any other metro cities. Summers are moderately hot, monsoons pleasant and winters amazing. The weather is very conducive to just get out and take a walk around the city to explore it. Warm comfortable mornings give way to quiet afternoons and mildly cold evenings. The weather here is truly to die for!
                    </p>
                </Col>

                <Col className='text-center'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-3'>FOOD</h6>
                    <p>
                        Being a city inhabited by people from all over India and beyond, the variety of food available here is mind-bogging. You will find the staple food of the region, as well as exotic continental dishes. Step out on a whim, and you’ll be surprised to see the sheer number of restaurants and pubs this city has. Breweries have mushroomed all over, keeping city-dwellers busy all weekend. There is something for everyone, that every hotel offers in Bengaluru.
                    </p>
                </Col>
            </Container>



            {/* Desktop View */}
            <Container className='text-center'>
                <Col className='d-md-flex flex-column d-none my-5'>
                    <h4 className=''>WHAT NOT TO MISS AT BENGALURU</h4>

                    <Col className='position-relative'>
                        <span className='underline'></span>
                        <span className='down-arrow'></span>
                    </Col>

                </Col>

                <Col className='d-md-flex flex-column d-none'>
                    <Col className='d-flex flex-md-row '>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>A LAZY STROLL IN CUBBON PARK</h6>
                            </Col>
                            <p>
                                At the heart of the city, spread out over 120 hectares, is Cubbon Park, undoubtedly one of the most well-known tourist destinations in Bengaluru. Named after Mark Cubbon, this park attracts walkers, joggers and nature lovers who want to spend some quiet time in its leafy environs. Sunday afternoons are ideal for picnics here. Bookworms will naturally gravitate towards the red painted Gothic Style State Central Library located here.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/about-bengaluru/cubbon_park_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/bengaluru/about-bengaluru/lal_bagh_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-5 pb-md-3' />
                                <h6 className='text-center'>LAL BAGH</h6>
                            </Col>
                            <p>
                                This beautiful expanse is 240 acres of landscaped terrain, laid down by the Sultan of the Mysore Kingdom, Hyder Ali, in the 18th century. The botanical garden Lal Bagh, is home to a staggering variety of plants and trees, some of which are many centuries old. Taking a guided tour is recommended, so you can spend the morning strolling down the tree-covered walkways. you should catch the bi-annual Flower show held from Jan to August? or once in Jan and once in August? Bi-annual is twice a year.
                            </p>
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className=''>BENGALURU PALACE</h6>
                            </Col>
                            <p>
                                Go back in time, and relive the royal splendour in Bengaluru Palace. The residence of the Wodeyars, the former Maharajas of Karnataka, it is the currently the residence of the 20th Maharaja, and open to visitors.
                                <br />
                                Soak up the palace’s lavish interiors and galleries, home to legendary taxidermies, photographs of expeditions and a rare collection of nude portraits.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/about-bengaluru/bangalore_palace_thumbu_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>
                    </Col>

                    {/* Events Heading */}

                    <Col className='p-0 py-5'>
                        <h4 className='p-0'>EVENTS</h4>
                        <Col className='position-relative'>
                            <span className='underline'></span>
                            <span className='down-arrow'></span>
                        </Col>
                    </Col>


                    <Col className='d-flex flex-row'>
                        <Col md={7} className='text-md-end text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                                <h6 className=''>THE BENGALURU PALACE LITERATURE FESTIVAL</h6>
                            </Col>
                            <p>
                                Celebrate literature and your creative spirit, by attending the Literature Festival. Some of the best writers around the country arrive here for a tete-a-tete. A prestigious event, this is often the highlight of the year for literature buffs.
                            </p>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center '>
                            <Image src='/bengaluru/about-bengaluru/literature_festival_thumb_4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                    </Col>

                    <Col className='d-flex flex-row'>

                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3' md={4}>
                            <Image src='/bengaluru/about-bengaluru/karaga_thumb_5.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />

                        </Col>

                        <Col md={7} className='text-md-start text-center pe-md-4'>
                            <Col className='d-inline-block'>
                                <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-4 pb-md-3' />
                                <h6 className=''>KARAGA</h6>
                            </Col>
                            <p>
                                Celebrate the Goddess Shakti by participating in the Karaga festival, one of the oldest celebrations held in Karnataka. Relive the rich cultural heritage of the state in the famous Dharmarayaswamy Temple in Bengaluru. The full moon in the month of March/April, is the green signal for devotees to start with the festivities. Lasting a whole 9 days, the festival is rounded off with a fire walking ritual. ‘Veerakumarans’ or brave devotees wear dhotis, carry swords and dance over live coals.
                            </p>
                        </Col>
                    </Col>

                </Col>
                <Col className='text-center py-4'>
                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                    <h6>NEAREST AIRPORT</h6>
                    <p>
                        Located around 45 km from the Zuri Bengaluru, the drive to Kempegowda International Airport is a pleasant one. The city is well connected by road, air and rail.
                    </p>
                </Col>
            </Container >




            {/* Mobile View */}

            <Container className='p-2 d-flex flex-column d-md-none'>

                <h4 className='my-5 pb-3 border border-2 border-top-0 border-end-0 border-start-0 d-inline-block'>WHAT NOT TO MISS AT BENGALURU</h4>

                <Col className='p-2'>
                    <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>A LAZY STROLL IN CUBBON PARK</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/about-bengaluru/cubbon_park_thumb_1.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            At the heart of the city, spread out over 120 hectares, is Cubbon Park, undoubtedly one of the most well-known tourist destinations in Bengaluru. Named after Mark Cubbon, this park attracts walkers, joggers and nature lovers who want to spend some quiet time in its leafy environs. Sunday afternoons are ideal for picnics here. Bookworms will naturally gravitate towards the red painted Gothic Style State Central Library located here.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>LAL BAGH</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/about-bengaluru/lal_bagh_thumb_2.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            This beautiful expanse is 240 acres of landscaped terrain, laid down by the Sultan of the Mysore Kingdom, Hyder Ali, in the 18th century. The botanical garden Lal Bagh, is home to a staggering variety of plants and trees, some of which are many centuries old. Taking a guided tour is recommended, so you can spend the morning strolling down the tree-covered walkways. you should catch the bi-annual Flower show held from Jan to August? or once in Jan and once in August? Bi-annual is twice a year.
                        </p>
                    </Col>

                    <Col className='text-center'>
                        <h4 className='my-5 pb-3 border border-2 border-top-0 border-end-0 border-start-0 d-inline-block'>EVENTS</h4>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>BENGALURU PALACE</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/about-bengaluru/bangalore_palace_thumbu_3.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Go back in time, and relive the royal splendour in Bengaluru Palace. The residence of the Wodeyars, the former Maharajas of Karnataka, it is the currently the residence of the 20th Maharaja, and open to visitors.
                            <br />
                            Soak up the palace’s lavish interiors and galleries, home to legendary taxidermies, photographs of expeditions and a rare collection of nude portraits.
                        </p>
                    </Col>

                    <Col className='d-flex flex-column justify-content-center align-items-center text-center py-4'>
                        <Col className='d-flex flex-column align-items-center gap-4'>
                            <Image src='/cl.png' alt='' fluid />
                            <h6 className='py-2 text-center'>THE BENGALURU PALACE LITERATURE FESTIVAL</h6>
                        </Col>
                        <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                            <Image src='/bengaluru/about-bengaluru/literature_festival_thumb_4.jpg' alt='' roundedCircle width={180} height={180}
                                className='rounded-circle kumarkom-image-overlay'
                            />
                        </Col>
                        <p>
                            Celebrate literature and your creative spirit, by attending the Literature Festival. Some of the best writers around the country arrive here for a tete-a-tete. A prestigious event, this is often the highlight of the year for literature buffs.
                        </p>
                    </Col>
                </Col>

                <Col className='d-flex flex-column align-items-center py-3'>
                    <Image src='/cl.png' alt='' fluid />
                    <h6 className='py-2 text-center border border-bottom border-0 w-100'>KARAGA</h6>
                </Col>

                <Col className='d-flex flex-column justify-content-center align-items-center text-center'>
                    <Col className='d-flex flex-wrap align-content-center justify-content-end p-3'>
                        <Image src='/bengaluru/about-bengaluru/karaga_thumb_5.jpg' alt='' roundedCircle width={180} height={180}
                            className='rounded-circle kumarkom-image-overlay'
                        />
                    </Col>
                    <p>
                        Celebrate the Goddess Shakti by participating in the Karaga festival, one of the oldest celebrations held in Karnataka. Relive the rich cultural heritage of the state in the famous Dharmarayaswamy Temple in Bengaluru. The full moon in the month of March/April, is the green signal for devotees to start with the festivities. Lasting a whole 9 days, the festival is rounded off with a fire walking ritual. ‘Veerakumarans’ or brave devotees wear dhotis, carry swords and dance over live coals.
                    </p>
                </Col>
                <Col className='text-center py-3'>
                    <Image src='/cl.png' alt='' fluid className='object-fit-none px-md-3 pb-md-3' />
                    <h6>NEAREST AIRPORT</h6>
                    <p>
                        Located around 45 km from the Zuri Bengaluru, the drive to Kempegowda International Airport is a pleasant one. The city is well connected by road, air and rail.
                    </p>
                </Col>
            </Container>
        </>
    )
}

export default AboutBengaluruContent