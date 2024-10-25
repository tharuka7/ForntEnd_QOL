// src/App.js
import React from 'react';
import PredictionForm from './PredictionForm';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';

function App() {
  return (
    <BrowserRouter>
      <div>   
        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/prediction" element={<PredictionForm/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

// <div className="App">
    //   <header className="App-header">
    //     <h1>Quality of Life Prediction</h1>
    //   </header>
    //   <main>
    //     <PredictionForm />
    //   </main>
    // </div>

export default App;
