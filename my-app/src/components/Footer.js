// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; 2024 Peto Organizer. Follow us on:</p>
      <div className="social-media">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> | 
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> | 
        <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">TikTok</a>
      </div>
    </footer>
  );
}

export default Footer;
