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
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "12.5rem" }}>
            <Card.Img variant="top" src={Greek} />
            <Card.Body>
              <Card.Title>
                Greek salad <span>$12.99</span>
              </Card.Title>

              <Card.Text>
                Greek salad, also known as Horiatiki in Greece, is a refreshing
                and colorful dish, enjoyed by many around the world for its
                flavors and health benefits. A very nutritious meal with great
                taste and flavours.
              </Card.Text>
              <a href="#">Order a delivery</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12.5rem" }}>
            <Card.Img variant="top" src={Tacos} />
            <Card.Body>
              <Card.Title>
                Tacos <span>$8.50</span>
              </Card.Title>

              <Card.Text>
                Tacos are a popular and versatile Mexican dish that has gained
                immense popularity around the world because of their delicious
                flavours and versatility. A great starting dish..
              </Card.Text>
              <a href="#">Order a delivery</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12.5rem" }}>
            <Card.Img variant="top" src={Bruchetta} />
            <Card.Body>
              <Card.Title>
                Bruchetta <span>$6.99</span>
              </Card.Title>
              <Card.Text>
                Bruschetta is a popular Italian appetizer, well-loved for its
                simplicity and delightful flavours.
              </Card.Text>
              <a href="#">Order a delivery</a>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "12.5rem" }}>
            <Card.Img variant="top" src={Lemon} />
            <Card.Body>
              <Card.Title>
                Lemon pie <span>$7.00</span>
              </Card.Title>
              <Card.Text>
                Our signature dish, Lemon pie, also known as lemon meringue pie,
                is a popular dessert known for its tangy, sweet, and creamy
                flavours.
              </Card.Text>
              <a href="#">Order a delivery</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Cards;
