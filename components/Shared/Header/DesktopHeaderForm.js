import Link from 'next/link';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const DesktopHeaderForm = ({ onClose }) => {

    const hotels = [
        { id: 1, name: 'The Zuri Kumarakom, Kerala Resort & Spa' },
        { id: 2, name: 'The Zuri White Sands, Goa Resort & Casino' },
        { id: 3, name: 'The Zuri Whitefield, Bengaluru' },
    ];

    const HotelReservationForm = () => {
        const [selectedHotel, setSelectedHotel] = useState('');
        const [selectedCheckInDate, setSelectedCheckInDate] = useState(getTodayDateString());
        const [selectedCheckOutDate, setSelectedCheckOutDate] = useState(getTodayDateString());
        const [selectedRooms, setSelectedRooms] = useState(1);
        const [selectedAdults, setSelectedAdults] = useState(1);
        const [selectedChildren, setSelectedChildren] = useState(0);

        const handleFormSubmit = (e) => {
            e.preventDefault();
            // Handle form submission logic here, e.g., send data to backend
            console.log('Form submitted:', {
                selectedHotel,
                selectedCheckInDate,
                selectedCheckOutDate,
                selectedRooms,
                selectedAdults,
                selectedChildren,
            });
        };

        function getTodayDateString() {
            const today = new Date();
            const year = today.getFullYear();
            const month = String(today.getMonth() + 1).padStart(2, '0');
            const day = String(today.getDate()).padStart(2, '0');
            return `${year}-${month}-${day}`;
        }

        const [isMakeReservation, setIsMakeReservation] = useState(true);

        const handleMakeReservation = () => {
            if (onClose) {
                onClose();
            }
        };

        return (
            <Container
                className={`pt-3 pb-5 ms-5 desktop-header-form ${isMakeReservation ? '' : 'hidden'}`}
            >

                <Col
                    className='custom-close-btn'
                    onClick={handleMakeReservation}
                >
                    <p className='mb-0'>
                        close
                    </p>

                    <Col
                        className='dimond-shap-close'
                    >
                    </Col>
                </Col>


                <form onSubmit={handleFormSubmit}>
                    <div className='d-flex flex-row gap-4'>
                        <div md={3} className='d-flex flex-column gap-2'>
                            <div>
                                <label
                                    htmlFor="hotel"
                                    className='text-black-50'
                                >
                                    Hotels, City:
                                </label>
                            </div>
                            <div>
                                <select
                                    id="hotel"
                                    value={selectedHotel}
                                    onChange={(e) => setSelectedHotel(e.target.value)}
                                >
                                    <option value="">Select a hotel</option>
                                    {hotels.map((hotel) => (
                                        <option key={hotel.id} value={hotel.name}>
                                            {hotel.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div md={2} className='d-flex flex-column gap-2'>
                            <div>
                                <label
                                    htmlFor="checkIn"
                                    className='text-black-50'
                                >
                                    Check-In:
                                </label>
                            </div>
                            <div>
                                <input
                                    id="checkIn"
                                    type="date"
                                    value={selectedCheckInDate}
                                    onChange={(e) => setSelectedCheckInDate(e.target.value)}
                                    min={getTodayDateString()}
                                />
                            </div>
                        </div>

                        <div md={2} className='d-flex flex-column gap-2'>
                            <div>
                                <label
                                    htmlFor="checkOut"
                                    className='text-black-50'
                                >
                                    Check-Out:
                                </label>
                            </div>
                            <div>
                                <input
                                    id="checkOut"
                                    type="date"
                                    value={selectedCheckOutDate}
                                    onChange={(e) => setSelectedCheckOutDate(e.target.value)}
                                />
                            </div>
                        </div>

                        <div md={1} className='d-flex flex-column gap-2'>
                            <div>
                                <label
                                    htmlFor="rooms"
                                    className='text-black-50'
                                >
                                    Rooms:
                                </label>
                            </div>
                            <div>
                                <select
                                    id="rooms"
                                    value={selectedRooms}
                                    onChange={(e) => setSelectedRooms(parseInt(e.target.value, 10))}
                                >
                                    {[1, 2, 3].map((count) => (
                                        <option key={count} value={count}>
                                            {count}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div md={1} className='d-flex flex-column gap-2'>
                            <div>
                                <label
                                    htmlFor="adults"
                                    className='text-black-50'
                                >
                                    Adults:
                                </label>
                            </div>
                            <div>
                                <select
                                    id="adults"
                                    value={selectedAdults}
                                    onChange={(e) => setSelectedAdults(parseInt(e.target.value, 10))}
                                >
                                    {[1, 2, 3, 4].map((count) => (
                                        <option key={count} value={count}>
                                            {count}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div md={1} className='d-flex flex-column gap-2'>
                            <div>
                                <label
                                    htmlFor="children"
                                    className='text-black-50'
                                >
                                    Children:
                                </label>
                            </div>
                            <div>
                                <select
                                    id="children"
                                    value={selectedChildren}
                                    onChange={(e) => setSelectedChildren(parseInt(e.target.value, 10))}
                                >
                                    {[0, 1, 2, 3].map((count) => (
                                        <option key={count} value={count}>
                                            {count}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='d-flex flex-column gap-4'>
                            <div className='text-center d-flex flex-column gap-2'>
                                <Link
                                    href="https://be.synxis.com/?adult=1&arrive=2023-12-20&chain=17869&child=0&currency=INR&depart=2023-12-21&hotel=64787&level=hotel&locale=en-US&rooms=1"
                                    className='text-decoration-none text-white px-2 py-2 d-inline-block'
                                    style={{ background: 'purple' }}
                                >
                                    BOOK NOW
                                </Link>

                                <Link
                                    href="https://be.synxis.com/?_ga=2.164956023.936920120.1702967799-2038087003.1664255723&adult=1&arrive=2023-12-20&chain=17869&child=0&currency=INR&depart=2023-12-21&hotel=64786&level=hotel&locale=en-US&rooms=1&shell=GCF&start=searchres&template=GCF"
                                    className="text-deocoration-black"
                                    target='_blank'
                                >
                                    <p
                                        className='text-black font12px'
                                    >
                                        Modify / Cancel Reservation
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                </form>
            </Container>
        );
    };

    return <HotelReservationForm />;
};

export default DesktopHeaderForm
