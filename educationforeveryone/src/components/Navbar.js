import React from 'react';
import { Link } from 'react-router-dom';
import SignOut from './SignOut';
import '../styles/navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/videos">Online Education Videos</Link></li>
        <li><Link to="/hackathons">Hackathon News</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
        <li><SignOut /></li>
      </ul>
    </nav>
  );
};

export default Navbar;
