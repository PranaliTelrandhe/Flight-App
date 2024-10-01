// SupportPage.js
import React, { useState } from 'react';
import './Support.css';
import SupportAbout from './SupportAbout';
const Support = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    console.log(formData);
    alert('Support request submitted!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
     <div>
      <h1 style={{ color:'#0047AB'}}>Welcome To FlyBharat</h1>
    <div className="support-page">
      <div className="form-container">
      <h2>Contact Support</h2>

      {/* Form container */}
      
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      

      {/* FAQ Section */}
      <section className="faq">
        <h3>Frequently Asked Questions</h3>
        
        <div>
        <h5>1.How do I change my flight?</h5>
            <p>To change your flight, please go to the 'My Bookings' section and select 'Modify'.</p>
        <h5>2.What is the refund policy?</h5>
            <p>Refunds are processed within 7-10 business days. For more details, refer to our refund policy.</p>
         <h5>3.How do I print my e-ticket?</h5>
            <p> 1.Log in to My Booking.<br/>
              2.On your Dashboard - click on Print Ticket. <br/>
              3.Select the booking and Print your ticket</p>
         <h5>4.Do I get any refund if I cancel my ticket?</h5>
            <p>No, as we have mentioned in the terms and conditions, monument ticket can't be rescheduled or cancelled.</p>
        </div>
       
      </section>

      {/* Help Links */}
      <section className="help-links">
        <h3>Need More Help?</h3>
        <ul>
          <li><a href="/documentation">Help Documentation</a>
          
          </li>
          <li><a href="/faq">Detailed FAQs</a></li>
        </ul>

        <SupportAbout/>
      </section>
    </div>
    </div>
    </div>
  );
};

export default Support;
