import React, { useState } from 'react';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import Exterior from '../../Components/Gallery-Crausel/Exterior';
import Interior from '../../Components/Gallery-Crausel/Interior';
import Experiences from '../../Components/Gallery-Crausel/Experiences';
import Videos from '../../Components/Gallery-Crausel/Videos';
import './Gallery.css';

function Gallery() {
  const [selectedGallery, setSelectedGallery] = useState(null);

  const galleryItems = [
    "Exterior",
    "Interior",
    "Experiences",
    "Videos"
  ];

  const handleGalleryClick = (item) => {
    setSelectedGallery(prev => (prev === item ? null : item)); // toggle open/close
  };

  return (
    <div className="gallery-page">
      <Navbar />
      <div className="gallery-container">
        <h1 className='glry'>Gallery</h1>

        <div className="carousel-wrapper">
          {selectedGallery === "Exterior" && <Exterior />}
          {selectedGallery === "Interior" && <Interior />}
          {selectedGallery === "Experiences" && <Experiences />}
          {selectedGallery === "Videos" && <Videos />}
        </div>

        <div className="gallery-buttons">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              className={`gallery-btn ${selectedGallery === item ? 'active' : ''}`}
              onClick={() => handleGalleryClick(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;