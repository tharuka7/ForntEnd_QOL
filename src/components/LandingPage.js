// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function LandingPage() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/prediction');
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Quality of Life Prediction</h1>
      <p>Click below to start your prediction journey!</p>
      <button onClick={handleButtonClick} className="start-button">
        Start Prediction
      </button>
    </div>
  );
}

export default LandingPage;