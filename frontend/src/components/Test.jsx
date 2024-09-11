/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import AvicciVid from "../assets/avicci-vid.mp4";
import posterImg from "../assets/avicii-wallpaper-Aimg.jpg";
import 'plyr/dist/plyr.css'; // Import Plyr CSS
import Plyr from 'plyr'; // Import Plyr JS

export default function Test() {
  useEffect(() => {
    // Initialize Plyr for the video element
    const player = new Plyr('#player', {
      controls: ['play', 'progress', 'current-time', 'mute', 'volume', 'fullscreen'],
    });

    // Cleanup on component unmount
    return () => {
      player.destroy();
    };
  }, []);

  return (
    <>
      <div>
        <video id="player" playsInline controls data-poster={posterImg}>
          <source src={AvicciVid} type="video/mp4" />
          {/* Optionally, provide a WebM version */}
          {/* <source src={AvicciVid} type="video/webm" /> */}
          <track kind="captions" label="English captions" src="/path/to/captions.vtt" srclang="en" default />
        </video>
      </div>
    </>
  );
}
