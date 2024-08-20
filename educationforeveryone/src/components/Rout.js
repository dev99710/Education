import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Signup from './Signup';
import Login from './Login';

const Rout = () => {
    return (
        <Routes>
            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
        </Routes>
    );
}

export default Rout;
