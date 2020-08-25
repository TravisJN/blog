import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import HomeImage from '../assets/Home.png';
import HistoryImage from '../assets/History.png';
import FoodEntryImage from '../assets/FoodEntry.png';

function Apps() {
  const [currentApp, setApp] = useState('Logger');

  return (
    <Fade>
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

            <div className="logger-picture-container">
              <img src={HomeImage} width={150} height={330} alt="logger app home page" />
              <img src={FoodEntryImage} width={150} height={330} alt="logger app food entry page" />
              <img src={HistoryImage} width={150} height={330} alt="logger app history page" />
            </div>
          </div>
        }
      </div>
    </Fade>
  );
}

export default Apps;
