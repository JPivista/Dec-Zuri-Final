'use client'
import React, { useEffect, useState } from 'react'
import { Col, Image, Modal } from 'react-bootstrap';

const KumarkomHomePopup = () => {
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        // Set showPopup to true when the component mounts
        setShowPopup(true);
    }, []);

    const handleClose = () => {
        setShowPopup(false);
    }

    return (
        <div>

            {/* <Col
                className='position-absolute start-0 top-0 end-0 bottom-0 d-flex flex-column'
                show={showPopup}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Col className='position-relative'>
                    <Col
                        className='position-absolute bg-black-50 top-50  bg-purple translate-middle start-50 p-4'
                    >
                        <p className='text-white'>
                            Our Banquet hall & Kick-start Gym will be closed for maintenance from 10th January to 20th January 2024. Thank you for your understanding.
                        </p>

                        <div
                            onClick={handleClose}
                        >
                            close
                        </div>
                    </Col>

                </Col>
            </Col> */}
            <Modal
                show={showPopup}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >



                <Modal.Body>
                    {/* Replace 'your-image-path.jpg' with the path to your image */}
                    {/* <Image src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg" alt="Popup Image" style={{ width: '100%' }} /> */}

                    <p>
                        Our Banquet hall & Kick-start Gym will be closed for maintenance from 10th January to 20th January 2024. Thank you for your understanding.
                    </p>
                </Modal.Body>
                <Col className='position-absolute end-0'>
                    <button
                        onClick={handleClose}
                        className='bg-transparent border-0'
                    >
                        <i
                            class="bi bi-x-square rounded-circle text-purple"
                        >
                        </i>
                    </button>
                </Col>


            </Modal>
        </div>
    )
}

export default KumarkomHomePopup