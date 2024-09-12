/* eslint-disable no-unused-vars */
import React, { useRef, useEffect } from 'react';
import AvicciVid from "../assets/avicci-vid.mp4";
import posterImg from "../assets/avicii-wallpaper-Aimg.jpg";
import 'mediaelement/build/mediaelementplayer.min.css';
import 'mediaelement/build/mediaelement-and-player.min.js';

export default function Test() {
  const videoRef = useRef(null);
  const playerRef = useRef(null); // Store the MediaElement player instance

  useEffect(() => {
    const videoElement = videoRef.current;

    // Initialize MediaElement.js
    const player = new MediaElementPlayer(videoElement, {
      features: ['playpause', 'progress', 'current', 'duration', 'volume', 'fullscreen'],
    });

    // Store the player instance for later access
    playerRef.current = player;

    // Add keyboard listener for 'F' key to toggle fullscreen
    const handleKeydown = (event) => {
      if (event.key === 'f' || event.key === 'F') {
        if (player.isFullScreen) {
          player.exitFullScreen(); // Exit fullscreen if already in fullscreen
        } else {
          player.enterFullScreen(); // Enter fullscreen if not in fullscreen
        }
      }
    };

    document.addEventListener('keydown', handleKeydown);

    // Cleanup on component unmount
    return () => {
      player.remove();
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  return (
      <div>
        <video ref={videoRef} controls data-poster={posterImg}>
          <source src={AvicciVid} type="video/mp4" />
        </video>
      </div>
  );
}
