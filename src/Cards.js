import React from "react";
import "./Cards.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Greek from "./Greek.png";
import Tacos from "./Tacos.png";
import Bruchetta from "./Bruchetta.png";
import Lemon from "./Lemon.png";

function Cards() {
  return (
    <div className="cards">
      <div className="card">
        <img src={Greek} alt="Card 1" />
        <div className="card-body">
          <h2>
            Greek salad <span>$12.99</span>
          </h2>
          <p>
            Greek salad, also known as Horiatiki in Greece, is a refreshing and
            colorful dish, enjoyed by many around the world for its flavors and
            health benefits. A very nutritious meal with great taste and
            flavours.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Tacos} alt="Card 2" />
        <div className="card-body">
          <h2>
            Tacos <span>$8.50</span>
          </h2>
          <p>
            Tacos are a popular and versatile Mexican dish that has gained
            immense popularity around the world because of their delicious
            flavours and versatility. A great starting dish.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Bruchetta} alt="Card 3" />
        <div className="card-body">
          <h2>
            Bruchetta <span>$6.99</span>
          </h2>
          <p>
            Bruschetta is a popular Italian appetizer, well-loved for its
            simplicity and delightful flavours.
          </p>
        </div>
      </div>
      <div className="card">
        <img src={Lemon} alt="Card 4" />
        <div className="card-body">
          <h2>
            Lemon pie <span>$7.00</span>
          </h2>
          <p>
            Our signature dish, Lemon pie, also known as lemon meringue pie, is
            a popular dessert known for its tangy, sweet, and creamy flavours.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cards;
