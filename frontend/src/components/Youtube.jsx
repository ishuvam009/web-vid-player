/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import 'plyr/dist/plyr.css'; // Import Plyr CSS
import Plyr from 'plyr'; // Import Plyr JS

export default function Youtube() {
  const playerRef = useRef(null);

  useEffect(() => {
    // Initialize Plyr with YouTube integration
    playerRef.current = new Plyr('#player', {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
      youtube: {
        noCookie: true, // Option to use YouTube's privacy-enhanced mode
        autoplay: false, // Autoplay the video when the player loads
        captions: { active: true, language: 'en' }, // Force captions if available
      },
    });

    return () => {
      if (playerRef.current) {
        playerRef.current.destroy(); // Cleanup the Plyr instance on unmount
      }
    };
  }, []);

  return (
    <div>
      {/* Embed YouTube video using Plyr */}
      <div id="player" data-plyr-provider="youtube" data-plyr-embed-id="joCFbTJt0o0"></div>
    </div>
  );
}
