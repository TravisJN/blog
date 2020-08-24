import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Works from './components/Works';
import About from './components/About';
import Apps from './components/Apps';
import Sites from './components/Sites';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <div className="App">
        <h1 className="under-construction">Under Construction</h1>
        <div className="header-container">
          <div className="site-title-text">Travis Neufeld</div>
          <Navbar />
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
          <Route path="/resume">
            <Resume />
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
