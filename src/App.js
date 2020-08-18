import React, { useState } from 'react';
import './App.css';
import Works from './components/Works';
import About from './components/About';
import Apps from './components/Apps';
import Sites from './components/Sites';

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
          className={`header-text link ${currentView === 'Apps' ? 'underline' : ''}`}
          onClick={() => setView('Apps')}
        >
          Apps
        </p>
        <p
          className={`header-text link ${currentView === 'Sites' ? 'underline' : ''}`}
          onClick={() => setView('Sites')}
        >
          Sites
        </p>
        <p
          className={`header-text link ${currentView === 'About' ? 'underline' : ''}`}
          onClick={() => setView('About')}
        >
          About
        </p>
      </div>
      {currentView === 'Works' && <Works />}
      {currentView === 'Apps' && <Apps />}
      {currentView === 'Sites' && <Sites />}
      {currentView === 'About' && <About />}
    </div>
  );
}

export default App;
