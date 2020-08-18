import React from 'react';

function Sites() {
  return (
    <div className="main-container">
      <div className="links-list">
        <a href="http://brewingandbeer.com" className="link" onClick={() => console.log('clicked brewing and beer')}>Brewing and Beer</a>
        <a href="https://practicalagile842645152.wordpress.com" className="link" onClick={() => console.log('clicked sensible agile')}>Sensible Agile</a>
      </div>
    </div>
  );
}

export default Sites;