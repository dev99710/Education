// src/App.js

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnlineVideos from './components/OnlineVideos';
import HackathonNews from './components/HackathonNews';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="/">Education Website</a>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="/videos">Online Education Videos</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/hackathons">Hackathon News</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/contact">Contact Me</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <Routes>
          <Route path="/videos" element={<OnlineVideos />} />
          <Route path="/hackathons" element={<HackathonNews />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/" element={<OnlineVideos />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;