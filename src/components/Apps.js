import React, { useState } from 'react';

function Apps() {
  const [currentApp, setApp] = useState(null);

  return (
    <div className="main-container">
      <div className="links-list">
        <span className="link" onClick={() => setApp('Logger')}>Logger</span>
      </div>
      {currentApp === 'Logger' &&
        <div>

        </div>
      }
    </div>
  );
}

export default Apps;
