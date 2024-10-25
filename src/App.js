// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import PredictionForm from './components/PredictionForm';
import AboutUs from './components/AboutUs';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Navbar displayed across all pages */}
        <Navbar />
        <div>
          <Routes>
            {/* Home page */}
            <Route path="/" element={<LandingPage />} />
            {/* Quality of Life Prediction page */}
            <Route path="/prediction" element={<PredictionForm />} />
            {/* About Us page */}
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
