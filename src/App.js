import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar';
import Works from './components/Works';
import About from './components/About';
import Apps from './components/Apps';
import Sites from './components/Sites';
import Resume from './components/Resume';
import DarkestNight from './components/DarkestNight';

function App() {
  return (
    <Router>
      <div className="App">
        {/* <div className="header-container">
          <div className="site-title-text">Travis Neufeld</div> */}
          {/* <Navbar /> */}
        {/* </div> */}

        <div className="main-container">
          <Switch>
            <Route exact path="/">
              <Redirect to={{ pathname: '/about' }} />
            </Route>
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
            <Route path="/darkestnight">
              <DarkestNight />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
