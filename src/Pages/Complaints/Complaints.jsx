import React, { useState } from 'react';
import './complaints.css'


function Complaints() {

    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        category: '',
        description: '',
        incidentLocation: '',
        contactMethod: '',
        consent: false
    });
    

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({
            ...formData,
            attachment: e.target.files[0],
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/complaints', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (response.ok) {
                alert('Complaint submitted successfully!');
            } else {
                alert(`Failed to submit complaint: ${data.message}`);
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred while submitting the complaint.');
        }
    };


    return (
        <div className="complaint-submission-form">
            
            <div className='page-intro'>
            <div className='container'>
                <h1 className='page-topic'>Report Environmental Concerns</h1>
            <p className='intro-para'>
                Use this page to submit complaints related to environmental issues in Sri Lanka. 
                The Central Environment Authority is committed to addressing your concerns and 
                taking action to protect our environment. Your reports help us ensure a cleaner, 
                greener future. All submissions are confidential.
            </p> 
            </div>
            </div>
             
            <div className='container page-body'> 
                <h2 className='heading'>Complaint</h2>
                <hr/>
            <form onSubmit={handleSubmit} className='complaint-form'>
                <div className="form-group">
                    <label className='input-name'>Full Name:</label>
                    <input
                        className='form-inputs'
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="Enter complainer's name" 
                        required
                    />
                </div>

                <div className="form-group">
                    <label className='input-name'>Email Address:</label>
                    <input
                        className='form-inputs'
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter complainer's email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label className='input-name'>Phone Number:</label>
                    <input
                        className='form-inputs'
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter complainer's phone"
                        required
                    />
                    </div>
                    

                <div className="form-group">
                    <label className='input-name'>Complaint Category:</label>
                        <select
                        className='form-inputs'
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                            
                    >
                        <option value="">Select a category</option>
                        <option value="environmental-concern">Environmental Concern</option>
                        <option value="service-issue">Service Issue</option>
                        <option value="policy-violation">Policy Violation</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="form-group">
                    <label className='input-name'>Complaint Description:</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                            required
                            className='form-inputs'
                    ></textarea>
                    </div>

                    <div className="form-group">
                    <label className='input-name'>Location of the Incident:</label>
                    <textarea
                        name="incidentLocation"
                        value={formData.incidentLocation}
                        onChange={handleChange}
                        required
                        className='form-inputs'
                    ></textarea>
                </div>

                <div className="form-group">
                    <label className='input-name'>Attachments (Optional):</label>
                        <input
                        className='attachment'
                        type="file"
                        name="attachment"
                        onChange={handleFileChange}
                            
                    />
                </div>

                <div className="form-group">
                    <label className='input-name'>Preferred Contact Method:</label>
                    <div>
                        <label className='input-name'>
                            <input
                                className='radio-btns'
                                type="radio"
                                name="contactMethod"
                                value="email"
                                checked={formData.contactMethod === 'email'}
                                onChange={handleChange}
                                required
                            />
                            Email
                        </label>
                        <label className='input-name'>
                            <input
                                className='radio-btns'
                                type="radio"
                                name="contactMethod"
                                value="phone"
                                checked={formData.contactMethod === 'phone'}
                                onChange={handleChange}
                                required
                            />
                            Phone
                        </label>
                    </div>
                </div>

                <div className="confirmation">
                    <label className='input-name'>
                        <input
                            className='check-box-data'
                            type="checkbox"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            required
                        />
                        I consent to the processing of my personal data in accordance with the privacy policy.
                    </label>
                </div>

                <button type="submit" className='submit-btn'>Submit Complaint</button>
            </form>
            </div>
            </div>
    );
}

export default Complaints