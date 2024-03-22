'use client'
import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';

const ContactFormNew = () => {
    const [formData, setFormData] = useState({
        yourName: '',
        lastName: '',
    });

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('https://beta.thezurihotels.com/wp-json/contact-form-7/v1/contact-forms/7338/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    yourName: formData.yourName,
                    lastName: formData.lastName,
                }),
            });
            if (response.ok) {
                console.log('Form submitted successfully');
            } else {
                console.error('Form submission failed');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Your Name:</label>
                <input
                    type="text"
                    name="yourName"
                    value={formData.yourName}
                    onChange={handleChange}
                    autoComplete="name"
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="name"
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}


export default ContactFormNew