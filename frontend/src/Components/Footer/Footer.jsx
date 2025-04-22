import React from 'react'
import MainImage from '../../assets/overview-icon.png';
import AboutUs from '../../assets/about-icon.png';
import Contact from '../../assets/contact-icon.png';
import Location from '../../assets/location-icon.png';
import Plan from '../../assets/plan-icon.png';
import Gallery from '../../assets/gallery-icon.png';
import Specs from '../../assets/specs-icon.png';

import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
        <div className="footer">
        <Link to="/overview" className="footer-item">
          <img src={MainImage} alt="overview" />
          <span>OverView</span>
        </Link>
      
        <Link to="/location" className="footer-item">
          <img src={Location} alt="Location" />
          <span>LOCATION</span>
        </Link>
      
        <Link to="/way-finder" className="footer-item">
          <img src={Plan} alt="Plan" />
          <span>WayFinder</span>
        </Link>

        <Link to="/specs" className="footer-item">
          <img src={Specs} alt="Plan" />
          <span>Specs</span>
        </Link>

        
        <Link to="/gallery" className="footer-item">
          <img src={Gallery} alt="About Us" />
          <span>Gallery</span>
        </Link>
      
        <Link to="/contact" className="footer-item">
          <img src={Contact} alt="Contact" />
          <span>CONTACT</span>
        </Link>
      

        <Link to="/about" className="footer-item">
          <img src={AboutUs} alt="About Us" />
          <span>ABOUT US</span>
        </Link>

      </div>
  )
}

export default Footer
