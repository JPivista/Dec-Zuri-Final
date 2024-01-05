'use client'
import React, { useState } from 'react'
import { Container } from 'react-bootstrap';

const ContactForm = () => {


    const [formData, setFormData] = useState({
        feedback: '',
        'your-name': '',
        'your-email': '',
        phone: '',
        country: '',
        locations: '',
        subject: '',
        'directed-to': 'Marketing', // Default value for radio button
    });

    // Handle form field changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Client-side validation
        if (!formData['your-name'] || !formData['your-email']) {
            // Handle validation error, e.g., show an error message to the user
            console.error('Name and Email are required.');
            return;
        }

        try {
            // Use the WordPress REST API endpoint to handle form submissions
            const response = await fetch('https://beta.thezurihotels.com/wp-json/contact-form-7/v1/contact-forms/7311/feedback', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                // Handle HTTP error status
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();

            // Check if the submission was successful
            if (data.status === 'mail_sent') {
                // Handle success, e.g., show a success message to the user
                console.log('Form submitted successfully:', data);
            } else {
                // Handle submission error, e.g., show an error message to the user
                console.error('Error submitting form:', data.message);
            }
        } catch (error) {
            // Handle other errors, e.g., show an error message to the user
            console.error('Error submitting form:', error.message);
        }
    };


    return (
        <>
            <Container>
                <form
                    className="wordpress-form"
                    onSubmit={handleSubmit}
                >


                    <input
                        type="text"
                        name="your-name"
                        className="form-control"
                        placeholder="Name"
                        value={formData['your-name']}
                        onChange={handleChange}
                    />

                    <input
                        type="email"
                        name="your-email"
                        className="form-control"
                        placeholder="Your Email"
                        value={formData['your-email']}
                        onChange={handleChange}
                    />

                    <input
                        type="tel"
                        name="phone"
                        className="form-control"
                        minLength="10"
                        maxLength="10"
                        placeholder="Phone"
                        value={formData.phone}
                        onChange={handleChange}
                    />

                    {/* Country Select */}
                    <select
                        name="country"
                        className="form-control"
                        value={formData['country']}
                        onChange={handleChange}
                    >
                        <option value="">Select a country</option>
                        <option value="USA">USA</option>
                        <option value="Canada">Canada</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                    </select>

                    {/* Locations Select */}
                    <select
                        name="locations"
                        className="form-control"
                        value={formData['locations']}
                        onChange={handleChange}
                    >
                        <option value="">Select a hotel</option>
                        <option value="The Zuri Whitefield, Bengaluru">The Zuri Whitefield, Bengaluru</option>
                        <option value="The Zuri White Sands, Goa Resort & Casino">The Zuri White Sands, Goa Resort & Casino</option>
                        <option value="The Zuri Kumarakom, Kerala">The Zuri Kumarakom, Kerala</option>
                    </select>

                    <input
                        type="text"
                        name="subject"
                        className="form-control"
                        placeholder="Subject"
                        value={formData.subject}
                        onChange={handleChange}
                    />

                    <textarea
                        name="feedback"
                        className="form-control feedback-textarea"
                        placeholder="Feedback/Question"
                        value={formData.feedback}
                        onChange={handleChange}
                    >

                    </textarea>

                    {/* DIRECTED TO Radio Buttons */}
                    <label>DIRECTED TO</label>
                    <div>
                        {['Marketing', 'Business', 'Development', 'Events', 'HR', 'Relations', 'Other'].map((option) => (
                            <div key={option} className="form-check form-check-inline">
                                <input
                                    type="radio"
                                    id={`directed-to-${option}`}
                                    name="directed-to"
                                    className="form-check-input"
                                    value={option}
                                    checked={formData['directed-to'] === option}
                                    onChange={handleChange}
                                />
                                <label htmlFor={`directed-to-${option}`} className="form-check-label">
                                    {option}
                                </label>
                            </div>
                        ))}
                    </div>

                    {/* Add a loading state while submitting */}
                    <button type="submit" className="feedback-btn btn-md form-control">
                        {/* Conditional rendering for loading state */}
                        { /* Example: isLoading ? 'Submitting...' : 'Submit' */}
                        Submit
                    </button>

                </form>
            </Container>
        </>

    );
};


export default ContactForm