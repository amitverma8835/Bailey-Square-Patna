import React, { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import MapVideo from '../../assets/video/video.mp4';
import './Location.css';

function Location() {
  const videoRef = useRef(null);

  const toggleFullScreen = () => {
    if (videoRef.current) {
      if (!document.fullscreenElement) {
        videoRef.current.requestFullscreen().catch((err) => {
          console.error('Error attempting to enable full-screen mode:', err);
        });
      } else {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="location-container">
      <Navbar />
      <div className="video-section">
        <video
          ref={videoRef}
          src={MapVideo}
          autoPlay
          loop
          muted
          playsInline
          className="location-video"
          controls={false}
        />
        <button className="fullscreen-btn" onClick={toggleFullScreen}>
          Full Screen
        </button>
      </div>
      <div className="footer-fixed">
        <Footer />
      </div>
    </div>
  );
}

export default Location;