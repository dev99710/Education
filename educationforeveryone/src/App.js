// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar';
import MainPage from './components/MainPage';
import OnlineVideos from './components/OnlineVideos';
import HackathonNews from './components/HackathonNews';
import ContactMe from './components/ContactMe';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/videos" element={<OnlineVideos />} />
        <Route path="/hackathons" element={<HackathonNews />} />
        <Route path="/contact" element={<ContactMe />} />
      </Routes>
    </Router>
  );
}

export default App;