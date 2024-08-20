import React from 'react';
import '../styles/hackathonNews.css'; // Import the CSS file for hackathon news page

const HackathonNews = () => {
  return (
    <div className="container">
      <h1>Hackathon News</h1>
      <div className="news-item">
        <div className="news-title">Hackathon Event 1</div>
        <div className="news-date">Date: 2024-09-01</div>
        {/* Add event details here */}
      </div>
      <div className="news-item">
        <div className="news-title">Hackathon Event 2</div>
        <div className="news-date">Date: 2024-10-15</div>
        {/* Add event details here */}
      </div>
    </div>
  );
};

export default HackathonNews;
