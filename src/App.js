import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import Works from './components/Works';
import About from './components/About';
import Apps from './components/Apps';
import Sites from './components/Sites';

function App() {
  const [currentView, setView] = useState('Works');

  return (
    <Router>
      <div className="App">
        <div className="header-container">
          <div className="site-title-text">Travis Neufeld.</div>
          <div className="navbar">
            <Link
              to="/works"
              className={`navbar-text ${currentView === 'Works' ? 'underline' : ''}`}
              onClick={() => setView('Works')}
            >
              Works
            </Link>
            <Link
              to="/apps"
              className={`navbar-text ${currentView === 'Apps' ? 'underline' : ''}`}
              onClick={() => setView('Apps')}
            >
              Apps
            </Link>
            <Link
              to="/sites"
              className={`navbar-text ${currentView === 'Sites' ? 'underline' : ''}`}
              onClick={() => setView('Sites')}
            >
              Sites
            </Link>
            <Link
              to="/about"
              className={`navbar-text ${currentView === 'About' ? 'underline' : ''}`}
              onClick={() => setView('About')}
            >
              About
            </Link>
          </div>
        </div>

        <Switch>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/apps">
            <Apps />
          </Route>
          <Route path="/sites">
            <Sites />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
