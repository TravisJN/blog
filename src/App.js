import React, { useState } from 'react';
import './App.css';
import Works from './components/Works';
import About from './components/About';

function App() {
  const [currentView, setView] = useState('Works');

  return (
    <div className="App">
      <div className="header-container">
        <p className="header-text">Travis Neufeld.</p>
        <p
          className={`header-text link ${currentView === 'Works' ? 'underline' : ''}`}
          onClick={() => setView('Works')}
        >
          Works
        </p>
        <p
          className={`header-text link ${currentView === 'About' ? 'underline' : ''}`}
          onClick={() => setView('About')}
        >
          About
        </p>
      </div>
      {currentView === 'Works' && <Works />}
      {currentView === 'About' && <About />}
    </div>
  );
}

export default App;
