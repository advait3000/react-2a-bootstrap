import React, { useState } from 'react';
import './contactform.css';

const ContactForm = () => {
  const [contactType, setContactType] = useState('phone'); // Set "phone" as initial selected value
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleContactTypeChange = (event) => {
    setContactType(event.target.value);
  };

  return (
    <div className="contact-form">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                value={firstName}
                onChange={(event) => setFirstName(event.target.value)}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label htmlFor="contactType">How should we contact you?</label>
              <select
                className="form-control"
                id="contactType"
                value={contactType}
                onChange={handleContactTypeChange}
              >
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
            </div>
          </div>
          {contactType === 'phone' && (
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  value={phone}
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>
            </div>
          )}
          {contactType === 'email' && (
            <div className="col-md-6">
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
