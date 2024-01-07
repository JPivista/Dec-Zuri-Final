'use client'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs'

const WesternTherapiesTab = () => {

    const bgLightBlue = {
        background: '#eaf2f5',
    }

    return (
        <>
            <Container>
                <Tabs>
                    <TabList>
                        <Tab>MASSAGES</Tab>
                        <Tab>FACIALS</Tab>
                        <Tab>SKIN CARE</Tab>
                    </TabList>

                    <TabPanel>
                        <Row className='d-flex flex-md-row flex-column flex-wrap'>
                            <Col className='text-center p-3' md={3}>
                                <h6 className='text-custom-megenta'>REJUVENATION MASSAGE </h6>
                                <p>
                                    Duration: 30 minutes
                                </p>
                                <p className='text-black'>
                                    <b>1800 INR</b>
                                </p>
                                <p className='d-none d-md-block'>
                                    Feel refreshingly renewed with a neck & back massage.
                                </p>
                            </Col>
                            <Col className='text-center p-3' md={3} style={bgLightBlue}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3} style={bgLightBlue}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>

                            <Col className='text-center p-3' md={3} style={bgLightBlue}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3} style={bgLightBlue}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>
                            <Col className='text-center p-3' md={3} style={bgLightBlue}>
                                <h6 className='text-putple'>REJUVENATION MASSAGE </h6>
                            </Col>



                        </Row>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </Container>
        </>
    )
}

export default WesternTherapiesTab