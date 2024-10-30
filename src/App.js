// src/App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import PredictionForm from './components/PredictionForm';
import Home from './components/Home';
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
            <Route path="/" element={<Home />} />
            {/* Quality of Life Prediction page */}
            <Route path="/prediction" element={<PredictionForm />} />
            {/* About Us page */}
            <Route path="/about" element={<Dashboard />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
