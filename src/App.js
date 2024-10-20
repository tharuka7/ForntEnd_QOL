// src/App.js
import React from 'react';
import PredictionForm from './PredictionForm';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Quality of Life Prediction</h1>
      </header>
      <main>
        <PredictionForm />
      </main>
    </div>
  );
}

export default App;
