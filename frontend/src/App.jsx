// eslint-disable-next-line no-unused-vars
import React, { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css';
import Plyr from 'plyr';

function App() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize Plyr for the YouTube iframe
    playerRef.current = new Plyr('#player', {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    });

    // Cleanup on component unmount
    return () => {
      if (playerRef.current) {
        playerRef.current.destroy();
      }
    };
  }, []);

  return (
    <div>
      <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="joCFbTJt0o0"></div>
    </div>
  );
}

export default App;
