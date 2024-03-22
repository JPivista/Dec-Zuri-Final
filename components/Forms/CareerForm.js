'use client'
import React, { useState } from 'react'
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

import countries from '../ContactUsComponents/CountyList';

import configData from '../../config'
import axios from 'axios';

const CareerForm = () => {
    const [post, setPost] = useState(null);
    const [yourName, setName] = useState(null);
    const [yourEmail, setEmail] = useState(null);
    const [yourPosition, setPosition] = useState(null);
    const [yourMessage, setMessage] = useState(null);
    const [yourPhone, setPhone] = useState(null);
    const [yourCountry, setCountry] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [loading, setLoading] = useState(false);
    const [disable, setDisabled] = useState(false);
    const [errrname, setErrName] = useState(null);
    const [errremail, setErrEmail] = useState(null);
    const [errrphone, setErrPhone] = useState(null);
    const [errrPosition, setErrPosition] = useState(null);
    const [errrsubject, setErrSubject] = useState(null);
    const [errrcountry, setErrCountry] = useState(null);
    const [success, setSuccess] = useState(true);
    const [error, setError] = useState(false);


    const [directedTo, setDirectedTo] = useState();
    const [directedToError, setDirectedToError] = useState(null);

    const [yourPlace, setPlace] = useState(null);
    const [errrPlace, setErrrPlace] = useState(null);

    const siteUrl = configData.apiUrl;

    const handleSubmit = event => {
        // 👇️ prevent page refresh
        event.preventDefault();
    };

    function createPost() {
        setSpinner(true);
        axios.post(`${siteUrl}wp-json/contact-form-7/v1/contact-forms/7340/feedback`,
            {
                'your-name': { yourName },
                'your-email': { yourEmail },
                'your-position': { yourPosition },
                'your-message': { yourMessage },
                'your-phone': { yourPhone },
                'your-locations': { yourPlace },
                'your-country': { yourCountry },
            }, {
            headers: {
                "Content-Type": 'multipart/form-data',
            }
        })
            .then((response) => {
                // setPost(response.data.message);
                // setErrMessage(response.data['invalid_fields'][1]['message']);
                const msg = response.data.status;
                if (msg == 'mail_sent') {
                    setLoading(true);
                    setSpinner(false);
                    setSuccess(false);
                    setShowModal(true); // Set showModal to true here
                    setError(false);
                }
                else {
                    setErrName('Please enter your name');
                    setErrEmail(response.data['invalid_fields'][1]['message']);
                    // setErrSubject(response.data['invalid_fields'][2]['message']);
                    setErrCountry('Please select a country');
                    setErrPhone('Enter your contact number');
                    setDirectedToError('Please select a DIRECTED TO');
                    setErrPosition('Enter your position')
                    setSpinner(false);
                    setErrrPlace('Please select a place name')
                    //setLoading(true);
                    setError(true);
                }
                // console.log(response.data)
            })
            .catch(error => {
                console.error('Error submitting form:', error);
                setSpinner(false);
                setError(true);
            });
    }

    const [showModal, setShowModal] = useState(false);


    return (
        <Container className='p-0 py-5'>
            <Col className=''>
                {success &&
                    <form
                        onSubmit={handleSubmit}
                        style={{ margin: '20px' }}>
                        <Row className='d-flex flex-lg-row flex-column gap-lg-0 flex-wrap gap-3'>
                            <Col
                                md={12}
                            >
                                <textarea
                                    //required
                                    rows="4"
                                    cols="50"
                                    className="form-control w-100"
                                    id="yourMessage"
                                    name='yourMessage'
                                    placeholder=" Feedback/Question"
                                    value={yourMessage}
                                    onChange={event => setMessage(event.target.value)}
                                />
                            </Col>

                            <Col md={6} className='py-md-4'>
                                <input
                                    required
                                    type='text'
                                    className="form-control"
                                    id="yourPosition"
                                    name='yourPosition'
                                    placeholder="Position*(applying for)"
                                    value={yourPosition}
                                    onChange={event => setPosition(event.target.value)}
                                />
                                {!yourPosition && <span className="r_error">{errrPosition}</span>}

                            </Col>

                            <Col md={6} className='py-md-4'>
                                <input
                                    required
                                    type='email'
                                    // pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                                    className="form-control"
                                    id="yourEmail"
                                    name='yourEmail'
                                    placeholder="Your Email"
                                    value={yourEmail}
                                    onChange={event => setEmail(event.target.value)}
                                    onBlur={() => setError(true)} // Set error to true when the input is blurred (focus is lost)
                                />
                                {(yourEmail && !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(yourEmail) || (error && !yourEmail)) && (
                                    <span className="r_error">Please enter a valid email address</span>
                                )}
                            </Col>

                            <Col md={6} className=''>
                                <input
                                    type='text'
                                    className="form-control"
                                    id="yourName"
                                    name='yourName'
                                    placeholder="Your name"
                                    value={yourName}
                                    onChange={event => setName(event.target.value)}
                                />
                                {!yourName && <span className="r_error">{errrname}</span>}
                            </Col>

                            <Col md={6}>
                                <input
                                    required
                                    type='tel'
                                    // pattern="^[0-9+\s()-]*$"  // Allow digits, plus sign, space, hyphen, and parentheses
                                    className="form-control"
                                    id="yourPhone"
                                    name='yourPhone'
                                    placeholder="Phone"
                                    value={yourPhone}
                                    onChange={event => setPhone(event.target.value)}
                                />
                                {!yourPhone && <span className="r_error">{errrphone}</span>}
                                {yourPhone && !/^[0-9+\s()-]*$/.test(yourPhone) && (
                                    <span className="r_error">Please enter a valid phone number</span>
                                )}
                            </Col>

                            <Col md={6} className='py-md-4'>
                                <select
                                    className='form-control'
                                    id='yourPlace'
                                    name='yourPlace'
                                    value={yourPlace}
                                    onChange={(e) => setPlace(e.target.value)}
                                >
                                    <option value='' disable>
                                        Select Place
                                    </option>
                                    <option value='whitefield'>The Zuri Whitefield, Bengaluru</option>
                                    <option value='goa'>The Zuri White Sands, Goa Resort & Casino</option>
                                    <option value='kerala'>The Zuri Kumarakom, Kerala</option>
                                </select>
                                {!yourPlace && <span className='r_error'>{errrPlace}</span>}
                            </Col>

                            <Col md={6} className='py-md-4'>
                                <select
                                    className='form-control'
                                    id='yourCountry'
                                    name='yourCountry'
                                    value={yourCountry}
                                    onChange={(e) => setCountry(e.target.value)}
                                >
                                    <option value='' disable>
                                        Select Country
                                    </option>
                                    {countries.map((country, index) => (
                                        <option key={index} value={country.code}>
                                            {country.name}
                                        </option>
                                    ))}
                                </select>
                                {!yourCountry && <span className='r_error'>{errrcountry}</span>}
                            </Col>

                        </Row>
                        {spinner && <div className="spinner-border text-light" role="status" />}

                        <button type='submit' className=' mt-4 px-5 py-2 bg-purple border-0 text-white font14px' onClick={createPost}>Submit</button>
                    </form>
                }

                {loading && <h1 class="reg-success mt-4">{post}</h1>}
                {/* {error && <h1 class="reg-error mt-4">{post}</h1>} */}
            </Col>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Thank You!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your message has been sent successfully.</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)} className='bg-purple'>Close</Button>
                </Modal.Footer>
            </Modal>

        </Container>

    )
}

export default CareerForm