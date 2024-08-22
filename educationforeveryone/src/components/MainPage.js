// src/components/MainPage.js
import React from 'react';
import '../styles/mainPage.css';

function MainPage() {
  return (
    <div className="main-page">
      <video autoPlay loop muted className="background-video">
        <source src="/path-to-your-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="content">
        <h1>Welcome to Education Hub</h1>
        <p>Your one-stop solution for online education and hackathon news.</p>
        <p>Explore our vast library of educational videos and stay updated with the latest hackathons.</p>
      </div>
    </div>
  );
}
export default MainPage;
