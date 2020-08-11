import React, { useState } from 'react';
import Bomblobber from './Bomblobber';

function Works() {
  const [currentWork, setWork] = useState(null);

  return (
    <div className="main-container">
      <div className="links-list">
        <span className="link" onClick={() => setWork('bomblobber')}>Bomb Lobber</span>
      </div>
      {currentWork === 'bomblobber' &&
        <Bomblobber />
      }
    </div>
  );
};

export default Works;