// src/PredictionForm.js
import axios from 'axios';
import React, { useState } from 'react';
import '../components/PredictionForm.css';

const PredictionForm = () => {
  const [formData, setFormData] = useState({
    familiarity_with_ethnic_origin: 1,
    smoke_detector: 0,
    airport: 1,
    full_time_employment: 0,
    access_to_a_computer: 0,
    student: 0,
    parks_and_recs: 1,
    city_effort_satisfaction: 1,
    nursing_home: 0,
    ethnicity: 1,
    public_safety: 1,
    libraries: 1,
    home_phone: 0,
    mobile_devices: 0
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: parseInt(value, 10),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setPrediction(null);

    try {
      console.log(formData);
      const response = await axios.post("http://127.0.0.1:8000/predict", formData);
      setPrediction(response.data["Quality of Life Prediction"]);
    } catch (err) {
      setError('An error occurred while predicting.');
      console.error(err);
    }
  };

  return (
    <div className='App'>
      <div className="App-h">
        <div className="App-header">
          <h1>Quality of Life Prediction</h1>
        </div>
      </div>
      <form onSubmit={handleSubmit}>

        {/* Familiarity with Ethnic Origin */}
        <div>
          <label>Familiarity with Ethnic Origin:</label>
          <select name="familiarity_with_ethnic_origin" value={formData.familiarity_with_ethnic_origin} onChange={handleChange} required>
            <option value={1}>Very low</option>
            <option value={2}>Low</option>
            <option value={3}>High</option>
            <option value={4}>Very high</option>
          </select>
        </div>

        {/* Smoke Detector */}
        <div>
          <label>Smoke Detector:</label>
          <select name="smoke_detector" value={formData.smoke_detector} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Airport */}
        <div>
          <label>Airport:</label>
          <select name="airport" value={formData.airport} onChange={handleChange} required>
            <option value={1}>Not at all satisfied</option>
            <option value={2}>Never used</option>
            <option value={3}>Not very much satisfied</option>
            <option value={4}>Very much satisfied</option>
            <option value={5}>Pretty much satisfied</option>
          </select>
        </div>

        {/* Full Time Employment */}
        <div>
          <label>Full Time Employment:</label>
          <select name="full_time_employment" value={formData.full_time_employment} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Access to a Computer */}
        <div>
          <label>Access to a Computer:</label>
          <select name="access_to_a_computer" value={formData.access_to_a_computer} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Student */}
        <div>
          <label>Student:</label>
          <select name="student" value={formData.student} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Parks and Recs */}
        <div>
          <label>Parks and Recs:</label>
          <select name="parks_and_recs" value={formData.parks_and_recs} onChange={handleChange} required>
            <option value={1}>Not at all satisfied</option>
            <option value={2}>Never used</option>
            <option value={3}>Not very much satisfied</option>
            <option value={4}>Very much satisfied</option>
            <option value={5}>Pretty much satisfied</option>
          </select>
        </div>

        {/* City Effort Satisfaction */}
        <div>
          <label>City Effort Satisfaction:</label>
          <select name="city_effort_satisfaction" value={formData.city_effort_satisfaction} onChange={handleChange} required>
            <option value={1}>Very dissatisfied</option>
            <option value={2}>Somewhat dissatisfied</option>
            <option value={3}>Neither satisfied nor dissatisfied</option>
            <option value={4}>Somewhat satisfied</option>
            <option value={5}>Very satisfied</option>
          </select>
        </div>

        {/* Nursing Home */}
        <div>
          <label>Nursing Home:</label>
          <select name="nursing_home" value={formData.nursing_home} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Ethnicity */}
        <div>
          <label>Ethnicity:</label>
          <select name="ethnicity" value={formData.ethnicity} onChange={handleChange} required>
            <option value={1}>Other</option>
            <option value={2}>Filipino</option>
            <option value={3}>Korean</option>
            <option value={4}>Vietnamese</option>
            <option value={5}>Asian Indian</option>
            <option value={6}>Chinese</option>
          </select>
        </div>

        {/* Public Safety */}
        <div>
          <label>Public Safety:</label>
          <select name="public_safety" value={formData.public_safety} onChange={handleChange} required>
            <option value={1}>Not at all satisfied</option>
            <option value={2}>Never used</option>
            <option value={3}>Not very much satisfied</option>
            <option value={4}>Very much satisfied</option>
            <option value={5}>Pretty much satisfied</option>
          </select>
        </div>

        {/* Libraries */}
        <div>
          <label>Libraries:</label>
          <select name="libraries" value={formData.libraries} onChange={handleChange} required>
            <option value={1}>Not at all satisfied</option>
            <option value={2}>Never used</option>
            <option value={3}>Not very much satisfied</option>
            <option value={4}>Very much satisfied</option>
            <option value={5}>Pretty much satisfied</option>
          </select>
        </div>

        {/* Home Phone */}
        <div>
          <label>Home Phone:</label>
          <select name="home_phone" value={formData.home_phone} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Mobile Devices */}
        <div>
          <label>Mobile Devices:</label>
          <select name="mobile_devices" value={formData.mobile_devices} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        <button type="submit">Predict</button>
      </form>

      {prediction && (
        <div className="prediction-container">
          <h3>Predicted Quality of Life</h3>
          <p className="prediction-result">{prediction}</p>
        </div>
      )}

      {error && (
        <div className="error-container">
          <p className="error-message">{error}</p>
        </div>
      )}
    </div>
  );
};

export default PredictionForm;
