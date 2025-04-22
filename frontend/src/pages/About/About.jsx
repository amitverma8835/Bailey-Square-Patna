import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <Navbar />
      
      <main className="about-content">
        <h1>Shopping Dreams into Reality</h1>
        <section className="about-section">
          <h2>Unparalleled Shopping Experience Awaits</h2>
          <p>
            Bailey Square welcomes individuals of all ages, fostering connections and creating lasting memories. 
            A social hub where communities thrive, and commerce blooms. As Patna undergoes a profound transformation, 
            Bailey Square emerges as a catalyst in this unfolding story. This lifestyle destination is crafted for 
            the discerning, fashion-conscious, and digital natives who are young at heart! From its prime location 
            to exceptional design, Bailey Square is Patna's iconic landmark.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default About;