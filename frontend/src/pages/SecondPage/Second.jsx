import React, { useState, useEffect, useRef } from 'react';
import './Second.css';
import { Link, useNavigate } from 'react-router-dom';
import playIcon from '../../assets/play-icon.png';
import Logo from '../../assets/bailey-logo1.png';
import Logo2 from '../../assets/bailey-logo2.png';
import Video from '../../assets/video/video.mp4';
import Overview from '../../assets/overview.jpg';
import Location from '../../assets/location.jpg';
import Outlets from '../../assets/outlets.jpg';
import HomeIcon from '../../assets/FlatHomeReleased.png';

function Second() {
  const [showVideo, setShowVideo] = useState(false);
  const navigate = useNavigate();
  const inactivityTimeoutRef = useRef(null);

  const cardData = [
    { title: "OVERVIEW", img: Overview, path: "/overview" },
    { title: "LOCATION", img: Location, path: "/location" },
    { title: "OUTLETS", img: Outlets, path: "/outlets" },
  ];

  const today = new Date().toLocaleDateString('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'numeric',
    year: 'numeric'
  });

  const resetInactivityTimer = () => {
    if (inactivityTimeoutRef.current) {
      clearTimeout(inactivityTimeoutRef.current);
    }
    inactivityTimeoutRef.current = setTimeout(() => {
      navigate('/');
    }, 20000);
  };

  useEffect(() => {
    const activityEvents = ['mousemove', 'keydown', 'click', 'scroll'];
    activityEvents.forEach((event) => {
      window.addEventListener(event, resetInactivityTimer);
    });

    resetInactivityTimer();

    return () => {
      activityEvents.forEach((event) => {
        window.removeEventListener(event, resetInactivityTimer);
      });
      if (inactivityTimeoutRef.current) {
        clearTimeout(inactivityTimeoutRef.current);
      }
    };
  }, [navigate]);

  return (
    <div className="main-container">
      <div className="top-bar">
        <div className="date">{today}</div>
        <div className="play-icon" onClick={() => setShowVideo(true)}>
          <img src={playIcon} alt="Play" />
        </div>
      </div>

      <div className="logo-section">
        <img src={Logo} alt="Logo 1" className="logo1" />
      </div>

      <div className="card-container">
        {cardData.map((card, index) => (
          <Link to={card.path} className="card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
            <img src={card.img} alt={card.title} className="card-image" />
            <div className="card-title">{card.title}</div>
          </Link>
        ))}
      </div>

      <div className="bottom-info">
        <div className="home-icon" onClick={() => navigate('/')}>
          <img src={HomeIcon} alt="Home" />
        </div>
        <div className="logo2">
          <img src={Logo2} alt="Logo 2" />
        </div>
      </div>

      {showVideo && (
        <div className="video-popup">
          <div className="video-wrapper">
            <video controls autoPlay className="popup-video">
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <button className="close-btn-inside" onClick={() => setShowVideo(false)}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Second;