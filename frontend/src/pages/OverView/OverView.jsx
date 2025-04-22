import React, { useState, useEffect, useRef } from 'react';
import './OverView.css';
import Footer from '../../Components/Footer/Footer';
import Navbar from '../../Components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import img1 from '../../assets/img1.jpg';
import img2 from '../../assets/img1.jpg';
import img3 from '../../assets/img1.jpg';
import img4 from '../../assets/img1.jpg';
import img5 from '../../assets/img1.jpg';
import img6 from '../../assets/img1.jpg';
import img7 from '../../assets/img1.jpg';
import img8 from '../../assets/img1.jpg';
import img9 from '../../assets/img1.jpg';
import img10 from '../../assets/img1.jpg';

function OverView() {
  const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const carouselRef = useRef(null);

  const carouselImages = [
    img1, img2, img3, img4, img5,
    img6, img7, img8, img9, img10
  ];

  const totalSlides = carouselImages.length;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    if (!isPaused) {
      const timer = setInterval(nextSlide, 3000);
      return () => clearInterval(timer);
    }
  }, [isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <div className="overview-container">
      <Navbar />
      <div className="main-content">
        <div className="left">
          <div
            className="carousel-container"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            ref={carouselRef}
          >
            <div className="carousel-inner">
              {carouselImages.map((img, index) => (
                <div
                  key={index}
                  className={`carousel-item ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => index === currentSlide && handleImageClick(img)}
                >
                  <img
                    src={img}
                    alt="A carousel of interstellar images slides into view, each frame a portal to the stars."
                  />
                </div>
              ))}
            </div>

            <div className="progress-dots">
              {carouselImages.map((_, index) => (
                <span
                  key={index}
                  className={`progress-dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="right">
          <h2>Overview</h2>
          <p className="quote">
            "Here's to the crazy ones, the misfits, the rebels, the troublemakers, the round pegs in the square holes,
            the ones who see things differently. They're not fond of rules, and they have no respect for the status quo.
            You can quote them, disagree with them, but the only thing you can't do is ignore them because they change things.
            They push the human race forward, and while some may see them as the crazy ones, we see genius, because the people
            who are crazy enough to think that they can change the whole world, are the ones who do."
          </p>
          <p className="quote-author">- Steve Jobs, Founder of Apple</p>
        </div>
      </div>
      <Footer />
      {selectedImage && (
        <div className="image-modal" onClick={handleCloseModal}>
          <div className="modal-content">
            <img src={selectedImage} alt="Zoomed project" />
            <button className="close-button" onClick={handleCloseModal}>✕</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default OverView;