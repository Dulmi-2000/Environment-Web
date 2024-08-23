import React, { useState } from 'react';
import './inquiries.css';
import { MdOutlineLocationOn } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { TfiEmail } from "react-icons/tfi";

function ContactUsInquiries() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: ''  // Changed from 'description' to 'message'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const inquiryData = {
      fullName: formData.fullName,
      email: formData.email,
      subject: formData.subject,
      message: formData.message
    };

    if (!inquiryData.fullName || !inquiryData.email || !inquiryData.subject || !inquiryData.message) {
      alert("All fields are required.");
      return;
    }

    try {
      const response = await fetch('http://localhost:5001/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(inquiryData)
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const result = await response.json();
      console.log('Inquiry submitted successfully:', result);
      alert("Your inquiry has been submitted successfully."); // Popup message
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      alert("There was an error submitting your inquiry. Please try again.");
    }
};


  return (
    <div className="complaint-submission-form">
      <div className='page-intro'>
        <div className='container'>
          <h1 className='page-topic'>Contact Us</h1>
          <p className='intro-para'>
            Use this page to submit inquiries related to environmental issues in Sri Lanka. 
            The Central Environment Authority is committed to addressing your concerns and 
            taking action to protect our environment. Your reports help us ensure a cleaner, 
            greener future. All submissions are confidential.
          </p> 
        </div>
      </div>
      <div className='container sides'>
        <div className='side'>
          <div className='page-body-inquiry'> 
            <h2 className='heading'>Get in Touch With Us</h2>
            <hr />
            <form onSubmit={handleSubmit} className='complaint-form'>
              <div className="form-group">
                <label className='input-names'>Full Name:</label>
                <input
                  className='form-inputs'
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your name" 
                  required
                />
              </div>

              <div className="form-group">
                <label className='input-names'>Email Address:</label>
                <input
                  className='form-inputs'
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="form-group">
                <label className='input-names'>Subject of the Email:</label>
                <input
                  className='form-inputs'
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject of the email"
                  required
                />
              </div>

              <div className="form-group">
                <label className='input-names'>Message:</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className='form-inputs'
                ></textarea>
              </div>
               <br/>
              <button type="submit" className='submit-btn'>Send Message</button>
            </form>
          </div>
        </div>
        
        <div className='two-side'>
          <div className='contact-data-one'>
            <div className='contacts-row'>
              <MdOutlineLocationOn className='location-icons' />
              <a href="https://maps.app.goo.gl/DP5y7zM3QBfCXrP57" target="_blank" rel="noopener noreferrer" className='location-link'>
                <h6 className='contacts-data'>
                  Central Environmental Authority,<br />
                  104, <br />
                  Denzil Kobbekaduwa Mawatha, <br />
                  Battaramulla, <br />
                  Sri Lanka
                </h6>
              </a>
            </div>
          </div>
          <div className='contact-data-one'>
            <div className='contacts-row'>
              <MdLocalPhone className='icons-call' />
              <h6 className='contacts-data'>
                011-2872419<br />
                011-2872278<br />
                011-2873447<br />
                011-2873448
              </h6>
            </div>
          </div>
          <div className='contact-data-one'>
            <div className='contacts-row'>
              <TfiEmail className='icons-msg' />
              <a href="mailto:info@cea.lk" className='mail'>info@cea.lk</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUsInquiries;
