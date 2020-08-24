import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Sites() {
  return (
    <Fade>
      <div className="main-container">
        <div className="links-list">
          <a href="http://brewingandbeer.com" className="link">Brewing and Beer</a>
          <a href="https://practicalagile842645152.wordpress.com" className="link">Sensible Agile</a>
        </div>
      </div>
    </Fade>
  );
}

export default Sites;