import React, { useRef } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import emailjs from '@emailjs/browser';
import './Contact.css';

function Contact() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_nmipor9',         // Your EmailJS service ID
      'template_owhw3r6',        // Your EmailJS template ID
      form.current,              // The form element
      'E0s5u_GHzU_Mce3Fo'       // Your EmailJS public key
    )
      .then(() => {
        form.current.reset();
        alert('Message sent successfully!');
      })
      .catch((error) => {
        alert('Failed to send message, please try again.');
        console.error(error);
      });
  };

  return (
    <div className="contact-page">
      <Navbar />
      <main className="contact-content">
        <div className="address-section">
          <h2>Corporate Office</h2>
          <p>Khushi Reakcon Pvt Ltd</p>
          <p>5-2/A-42, 43, 44 Manchester Industrial Estate, Bhubaneswar</p>
          <p>Odisha</p>

          <h2>Contact Us</h2>
          <p>+91 94377 08000</p>
          <p>info@khushtreakcon.com</p>

          <h2>Site Address</h2>
          <p>Khushi Capella</p>
          <p>Pahala, Besides HP Retail Pump</p>
          <p>Bhubaneswar, Odisha 750101</p>
        </div>

        <div className="form-section">
          <h1>Let's Get In Touch</h1>
          <form ref={form} onSubmit={handleSubmit} aria-label="Contact form">
            <input
              type="email"
              placeholder="Email ID"
              name="email"
              required
              aria-label="Email address"
            />
            <div className="name-contact-group">
              <input
                type="text"
                placeholder="Name"
                name="name"
                required
                aria-label="Full name"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                name="phone"
                pattern="[0-9]{10}"
                required
                aria-label="Mobile number"
              />
            </div>
            <textarea
              placeholder="Date of Visit & Remarks"
              name="message"
              required
              aria-label="Message or remarks"
            />
            <button className="submit-btn" type="submit">
              Submit
            </button>
          </form>
        </div>
      </main>
      <div className="footer-fixed">
        <Footer />
      </div>
    </div>
  );
}

export default Contact;