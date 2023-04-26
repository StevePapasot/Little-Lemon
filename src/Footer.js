import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer>
      <div className="column">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.434146942223!2d-122.40651904895463!3d37.78532097975843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807b6cfd00e1%3A0x2d2b92b08c274081!2sGolden%20Gate%20Bridge!5e0!3m2!1sen!2sus!4v1651560172265!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="column">
        <ul className="links">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Menu</a>
          </li>
          <li>
            <a href="/contact">Reservation</a>
          </li>
          <li>
            <a href="/contact">Online Order</a>
          </li>
          <li>
            <a href="/contact">Login</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h4>Useful Info</h4>
        <p>123 Main Street</p>
        <p>San Francisco, CA 94101</p>
        <p>(123)-456-7890</p>
        <p>www.info@gmail.com</p>
      </div>
      <div className="column">
        <h4>Social Media</h4>
        <ul className="social-icons">
          <li>
            <a href="https://facebook.com">
              <i class="fa-brands fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://twitter.com">
              <i class="fa-brands fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="https://instagram.com">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
export default Footer;
