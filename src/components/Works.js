import React, { useState } from 'react';
import Bomblobber from './Bomblobber';
import { Fade } from 'react-awesome-reveal';

function Works() {
  const [currentWork, setWork] = useState('bomblobber');

  return (
    <Fade>
      <div className="main-container">
        <div className="page-title">
          <span className="link" onClick={() => setWork('bomblobber')}>Bomb Lobber</span>
        </div>
        {currentWork === 'bomblobber' &&
          <Bomblobber />
        }
      </div>
    </Fade>
  );
};

export default Works;