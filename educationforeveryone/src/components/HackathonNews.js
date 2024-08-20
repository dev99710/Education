// src/components/HackathonNews.js

import React, { useState, useEffect } from 'react';

const HackathonNews = () => {
  const [hackathons, setHackathons] = useState([]);

  useEffect(() => {
    // Fetch hackathon data from your backend (for now, we'll use static data)
    setHackathons([
      { id: 1, title: "Hackathon 1", date: "2024-09-20", location: "Online", link: "#" },
      { id: 2, title: "Hackathon 2", date: "2024-10-15", location: "New York, USA", link: "#" },
      // Add more hackathons here
    ]);
  }, []);

  return (
    <div className="container mt-4">
      <h2>Upcoming Hackathons</h2>
      <div className="row">
        {hackathons.map(hackathon => (
          <div key={hackathon.id} className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">{hackathon.title}</h5>
                <p className="card-text">Date: {hackathon.date}</p>
                <p className="card-text">Location: {hackathon.location}</p>
                <a href={hackathon.link} className="btn btn-primary">More Info</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HackathonNews;
