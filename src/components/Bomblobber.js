import React from 'react';
import { Fade } from 'react-awesome-reveal';

function Bomblobber() {
  return (
    <Fade duration={500}>
      <iframe
        title="bomblobber"
        style={{border: 'none'}}
        height="600px"
        width="600px"
        id="bomblobber-game"
        src="bomblobber/bomblobber.html"
      />
    </Fade>
  );
}

export default Bomblobber;