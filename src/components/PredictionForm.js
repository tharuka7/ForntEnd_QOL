// src/PredictionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../App.css';


const PredictionForm = () => {
  const [formData, setFormData] = useState({
    satisfied_with_life_1: 0,
    satisfied_with_life_2: 0,
    present_mental_health: 0,
    english_speaking: 0,
    income: 0,
    present_health: 0,
    satisfaction_with_housing: 0,
    present_oral_health: 0,
    language: 0,
    interpretation_medical: 0,
    communication_problem: 0,
    achieving_ends_meet: 0,
    familiarity_with_america: 0,
    english_difficulties: 0,
    ethnicity: 0,
    small_businesses: 0,
    religious_attendance: 0,
    parks_and_recs: 0,
    place_to_work: 0,
    airport: 0,
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
      const response = await axios.post('https://projectqol-backend-c9cngqfvbzhwdsa5.canadacentral-01.azurewebsites.net/predict/', formData);
      setPrediction(response.data["Quality of Life Prediction"]);
    } catch (err) {
      setError('An error occurred while predicting.');
      console.error(err);
    }
  };

  return (
    <div>
      <div className="App">
       <div className="App-header">
        <h1>Quality of Life Prediction</h1>
       </div>
     </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Satisfied With Life 1:</label>
          <select name="satisfied_with_life_1" value={formData.satisfied_with_life_1} onChange={handleChange} required>
            <option value={0}>Agree</option>
            <option value={1}>Disagree</option>
            <option value={2}>Neither agree or disagree</option>
            <option value={3}>Slightly agree</option>
            <option value={4}>Slightly disagree</option>
            <option value={5}>Strongly agree</option>
            <option value={6}>Strongly disagree</option>
          </select>
        </div>

        {/* Satisfied With Life 2 */}
        <div>
          <label>Satisfied With Life 2:</label>
          <select name="satisfied_with_life_2" value={formData.satisfied_with_life_2} onChange={handleChange} required>
            <option value={0}>Agree</option>
            <option value={1}>Disagree</option>
            <option value={2}>Neither agree or disagree</option>
            <option value={3}>Slightly agree</option>
            <option value={4}>Slightly disagree</option>
            <option value={5}>Strongly agree</option>
            <option value={6}>Strongly disagree</option>
          </select>
        </div>

        {/* Present Mental Health */}
        <div>
          <label>Present Mental Health:</label>
          <select name="present_mental_health" value={formData.present_mental_health} onChange={handleChange} required>
            <option value={0}>Excellent</option>
            <option value={1}>Fair</option>
            <option value={2}>Good</option>
            <option value={3}>Poor</option>
            <option value={4}>Very Good</option>
          </select>
        </div>

        {/* English Speaking */}
        <div>
          <label>English Speaking:</label>
          <select name="english_speaking" value={formData.english_speaking} onChange={handleChange} required>
            <option value={0}>Not at all</option>
            <option value={1}>Not well</option>
            <option value={2}>Very well</option>
            <option value={3}>Well</option>
          </select>
        </div>

        {/* Income */}
        <div>
          <label>Income:</label>
          <select name="income" value={formData.income} onChange={handleChange} required>
            <option value={0}>$0 - $9,999</option>
            <option value={1}>$10,000 - $19,999</option>
            <option value={2}>$20,000 - $29,999</option>
            <option value={3}>$30,000 - $39,999</option>
            <option value={4}>$40,000 - $49,999</option>
            <option value={5}>$50,000 - $59,999</option>
            <option value={6}>$60,000 - $69,999</option>
            <option value={7}>$70,000 and over</option>
          </select>
        </div>

        {/* Present Health */}
        <div>
          <label>Present Health:</label>
          <select name="present_health" value={formData.present_health} onChange={handleChange} required>
            <option value={0}>Excellent</option>
            <option value={1}>Fair</option>
            <option value={2}>Good</option>
            <option value={3}>Poor</option>
            <option value={4}>Very Good</option>
          </select>
        </div>

        {/* Satisfaction With Housing */}
        <div>
          <label>Satisfaction With Housing:</label>
          <select name="satisfaction_with_housing" value={formData.satisfaction_with_housing} onChange={handleChange} required>
            <option value={0}>Not at all</option>
            <option value={1}>Not very much</option>
            <option value={2}>Pretty much</option>
            <option value={3}>Very much</option>
          </select>
        </div>

        {/* Present Oral Health */}
        <div>
          <label>Present Oral Health:</label>
          <select name="present_oral_health" value={formData.present_oral_health} onChange={handleChange} required>
            <option value={0}>Excellent</option>
            <option value={1}>Fair</option>
            <option value={2}>Good</option>
            <option value={3}>Poor</option>
            <option value={4}>Very Good</option>
          </select>
        </div>

        {/* Language */}
        <div>
          <label>Language:</label>
          <select name="language" value={formData.language} onChange={handleChange} required>
            <option value={0}>Chinese Simplified</option>
            <option value={1}>Chinese Traditional</option>
            <option value={2}>Eng_Chinese only</option>
            <option value={3}>English</option>
            <option value={4}>Gujarati</option>
            <option value={5}>Hindi</option>
            <option value={6}>Korean</option>
            <option value={7}>Tagalog</option>
            <option value={8}>Viet</option>
          </select>
        </div>

        {/* Interpretation (Medical) */}
        <div>
          <label>Interpretation (Medical):</label>
          <select name="interpretation_medical" value={formData.interpretation_medical} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Communication Problem */}
        <div>
          <label>Communication Problem:</label>
          <select name="communication_problem" value={formData.communication_problem} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Achieving Ends Meet */}
        <div>
          <label>Achieving Ends Meet:</label>
          <select name="achieving_ends_meet" value={formData.achieving_ends_meet} onChange={handleChange} required>
            <option value={0}>No</option>
            <option value={1}>Yes</option>
          </select>
        </div>

        {/* Familiarity with America */}
        <div>
          <label>Familiarity with America:</label>
          <select name="familiarity_with_america" value={formData.familiarity_with_america} onChange={handleChange} required>
            <option value={0}>High</option>
            <option value={1}>Low</option>
            <option value={2}>Very high</option>
            <option value={3}>Very low</option>
          </select>
        </div>

        {/* English Difficulties */}
        <div>
          <label>English Difficulties:</label>
          <select name="english_difficulties" value={formData.english_difficulties} onChange={handleChange} required>
            <option value={0}>Much</option>
            <option value={1}>Not at all</option>
            <option value={2}>Not much</option>
            <option value={3}>Very much</option>
          </select>
        </div>

        {/* Ethnicity */}
        <div>
          <label>Ethnicity:</label>
          <select name="ethnicity" value={formData.ethnicity} onChange={handleChange} required>
            <option value={0}>Asian Indian</option>
            <option value={1}>Chinese</option>
            <option value={2}>Filipino</option>
            <option value={3}>Korean</option>
            <option value={4}>Other</option>
            <option value={5}>Vietnamese</option>
          </select>
        </div>

        {/* Small Businesses */}
        <div>
          <label>Small Businesses:</label>
          <select name="small_businesses" value={formData.small_businesses} onChange={handleChange} required>
            <option value={0}>Excellent</option>
            <option value={1}>Fair</option>
            <option value={2}>Good</option>
            <option value={3}>Poor</option>
          </select>
        </div>

        {/* Religious Attendance */}
        <div>
          <label>Religious Attendance:</label>
          <select name="religious_attendance" value={formData.religious_attendance} onChange={handleChange} required>
            <option value={0}>A few times a year</option>
            <option value={1}>Never</option>
            <option value={2}>Once or twice a month</option>
            <option value={3}>Seldom</option>
          </select>
        </div>

        {/* Parks and Recs */}
        <div>
          <label>Parks and Recs:</label>
          <select name="parks_and_recs" value={formData.parks_and_recs} onChange={handleChange} required>
            <option value={0}>Never used</option>
            <option value={1}>Not at all satisfied</option>
            <option value={2}>Not very much satisfied</option>
            <option value={3}>Pretty much satisfied</option>
            <option value={4}>Very much satisfied</option>
          </select>
        </div>

        {/* Place to Work */}
        <div>
          <label>Place to Work:</label>
          <select name="place_to_work" value={formData.place_to_work} onChange={handleChange} required>
            <option value={0}>Excellent</option>
            <option value={1}>Fair</option>
            <option value={2}>Good</option>
            <option value={3}>Poor</option>
          </select>
        </div>

        {/* Airport */}
        <div>
          <label>Airport:</label>
          <select name="airport" value={formData.airport} onChange={handleChange} required>
            <option value={0}>Never used</option>
            <option value={1}>Not at all satisfied</option>
            <option value={2}>Not very much satisfied</option>
            <option value={3}>Pretty much satisfied</option>
            <option value={4}>Very much satisfied</option>
          </select>
        </div>

        <button type="submit">Predict</button>
      </form>

      {prediction && <p>Predicted Quality of Life: {prediction}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default PredictionForm;
