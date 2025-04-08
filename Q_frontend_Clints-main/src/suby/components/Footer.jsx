import React from "react";
import "../styles/footer.css"; // Ensure you create and style this file
import "@fortawesome/fontawesome-free/css/all.min.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Social Media Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/about">About Us</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Information */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: support@example.com</p>
          <p>Phone: +1 (234) 567-890</p>
          <p>Address: 123 Main Street, City, Country</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Your Company. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
