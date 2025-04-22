import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import SitePlan2 from '../../assets/site_plan.png';
import './WayFinder.css';

function WayFinder() {
  const legendItems = [
    "Entry Gate",
    "Drive way",
    "Security Guard Room",
    "Drop-off Point",
    "Rock Climbing Wall",
    "Children's Play Area",
    "Seating Pergola",
    "Hip-Hop Zone",
    "Outdoor Badminton Court",
    "Meditation Zone",
    "Elevated Gazebo",
    "Temple",
    "Multi-sports Court",
    "Amphitheatre Zone",
    "Jogging Track",
    "Banquet Lawn",
    "Swimming Pool & Kids' Pool",
    "Kids' Skating Zone",
    "Senior Citizen Zone",
    "Second Exit"
  ];

  return (
    <div className="wayfinder-page">
      <Navbar className="wayfinder-navbar" />
      <div className="wayfinder-main">
        <div className="image-container">
          <img src={SitePlan2} alt="Site Plan" />
        </div>
        <div className="legend-container">
          <h1>CRAFTED WITH DESIGN ELEGANCE</h1>
          <h2>Legends</h2>
          <div className="legend-items">
            {legendItems.map((item, index) => (
              <div key={index} className="legend-item">
                <span className="legend-number" >{index + 1}.</span>
                <span className="legend-text">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer className="wayfinder-footer" />
    </div>
  );
}

export default WayFinder;