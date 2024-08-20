import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OnlineVideos from './components/OnlineVideos';
import HackathonNews from './components/HackathonNews';
import ContactMe from './components/ContactMe';
import Login from './components/Login';
import Signup from './components/Signup';
import Navbar from './components/Navbar';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider, AuthContext } from './contexts/AuthContext';

const App = () => {
  const { user } = useContext(AuthContext);

  return (
    <AuthProvider>
      <Router>
        {user && <Navbar />} {/* Conditionally render Navbar */}
        <Routes>
          <Route path="/videos" element={<PrivateRoute element={<OnlineVideos />} />} />
          <Route path="/hackathons" element={<HackathonNews />} />
          <Route path="/contact" element={<ContactMe />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<PrivateRoute element={<OnlineVideos />} />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;