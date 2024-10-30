// src/LandingPage.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import png1 from '../assest/a.png';

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
      <div style={{  padding: '20px', width: '1000px', margin: 'auto', textAlign: 'center' ,marginTop:'20px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '10px' }}>
                <div>Survey Count: 2609</div>
                <div>Country: USA</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>Target Audience: Asian Americans</div>
                <div>Location: Austin</div>
            </div>
            <h3>Statistics of the Data Set</h3>
            <div style={{ marginBottom: '10px', width: '1000px' }}>
                <img width={1000} src={png1} alt="placeholder" />
            </div>
        </div>
        <div style={{ border: '1px solid black', padding: '20px', width: '1000px', margin: 'auto', textAlign: 'center' ,marginTop:'20px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '10px' }}>
                <div>Survey Count: 2609</div>
                <div>Country: USA</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>Target Audience: Asian Americans</div>
                <div>Location: Austin</div>
            </div>
            <h3>Statistics of the Data Set</h3>
            <div style={{ marginBottom: '10px', width: '1000px' }}>
                <img width={1000} src={png1} alt="placeholder" />
            </div>
        </div>
        <div style={{ border: '1px solid black', padding: '20px', width: '1000px', margin: 'auto', textAlign: 'center' ,marginTop:'20px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', marginBottom: '10px' }}>
                <div>Survey Count: 2609</div>
                <div>Country: USA</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div>Target Audience: Asian Americans</div>
                <div>Location: Austin</div>
            </div>
            <h3>Statistics of the Data Set</h3>
            <div style={{ marginBottom: '10px', width: '1000px' }}>
                <img width={1000} src={png1} alt="placeholder" />
            </div>
        </div>
    </div>
  );
}

export default LandingPage;