// src/components/AboutUs.js
import React from 'react';

const Home = () => {
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
      <h1 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#118f06' }}>Welcome!</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '20px' }}>
        This website uses data from the <a href="https://catalog.data.gov/dataset/final-report-of-the-asian-american-quality-of-life-aaqol" target="_blank" rel="noopener noreferrer" style={{ color: '#118f06', textDecoration: 'none' }}>
        Final Report of the Asian American Quality of Life (AAQoL)</a>.
      </p>
    
      <p style={{ fontSize: '1rem', color: '#666' }}>
        The U.S. Census defines Asian Americans as individuals having origins in any of the original peoples of the Far East, Southeast Asia, or the Indian subcontinent (U.S. Office of Management and Budget, 1997). Asian Americans are the fastest-growing minority group in the United States. Their growth rate of 42.9% between 2000 and 2010 is notable, compared to the U.S. population's overall growth of 9.3%.
      </p>
      <p style={{ fontSize: '1rem', color: '#666' }}>
        Currently, Asian Americans make up 5.6% of the U.S. population and are projected to reach 10% by 2050. Their unique challenges as a rapidly growing immigrant group highlight the need for better understanding of their social and health needs.
      </p>
    </div>
  );
};

export default Home;

