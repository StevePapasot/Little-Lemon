import React from "react";
import "./Hero.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>Some description text here.</p>
            <button>Call to Action</button>
          </div>
          <div className="col-md-6">
            <img src="https://placehold.it/600x400" alt="Right Column Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
