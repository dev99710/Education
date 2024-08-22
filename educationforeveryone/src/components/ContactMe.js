// src/components/ContactMe.js
import React from 'react';
import '../styles/contactMe.css';

function ContactMe() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" placeholder="Your Name" />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" placeholder="Your Email" />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea placeholder="Your Message" />
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactMe;