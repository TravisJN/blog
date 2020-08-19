import React, { useState } from 'react';

function Apps() {
  const [currentApp, setApp] = useState('Logger');

  return (
    <div className="main-container">
      <div className="links-list">
        <span className="link" onClick={() => setApp('Logger')}>Logger</span>
      </div>
      {currentApp === 'Logger' &&
        <div className="logger-container">
          <span>
            Logger is an app for iOS and Android that tracks IBS symptoms with a simple intuitive UI.
          </span>
          <span>
            Meant to be used while you go. Simply record how you're feeling and what you've eaten. Logger will look for patterns and inform you of foods you should avoid.
          </span>
        </div>
      }
    </div>
  );
}

export default Apps;
