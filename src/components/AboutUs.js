// src/components/AboutUs.js
import React from 'react';

const AboutUs = () => {
  return (
    <div
      style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '40px 20px',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
        color: '#333',
      }}
    >
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#118f06' }}>About Us</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        We are a dedicated team of experts committed to providing tools and insights that help improve
        the quality of life through predictive data analysis.
      </p>
      <p style={{ fontSize: '1rem', color: '#666' }}>
        Our goal is to leverage data and advanced analytics to offer solutions that empower individuals and
        organizations to make informed, impactful decisions.
      </p>
    </div>
  );
};

export default AboutUs;
