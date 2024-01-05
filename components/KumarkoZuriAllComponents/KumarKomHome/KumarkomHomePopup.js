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
            <Modal
                show={showPopup}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >

                <Col
                    onClick={handleClose}
                    className='position-fixed bg-black-50 start-0 end-0 bottom-0 top-0 '
                >

                </Col>

                <Modal.Body>
                    {/* Replace 'your-image-path.jpg' with the path to your image */}
                    <Image src="/popup/kumarkom-popup/zuri_kumarkom_appreciation_letter.jpeg" alt="Popup Image" style={{ width: '100%' }} />
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