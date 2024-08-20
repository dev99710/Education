// src/components/ContactMe.js
import React from 'react';
import '../styles/contactMe.css';

const ContactMe = () => {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ContactMe;
