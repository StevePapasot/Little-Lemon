import React from "react";
import "./Carousel.css";
import CarouselOne from "./CarouselOne.png";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Carousel() {
  return (
    <section className="carousel">
      <div className="container">
        <div className="row">
          <div className="left">
            <h1>Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Little Lemon is a charming and delightful restaurant that has
              quickly become a favourite among food enthusiasts. Little Lemon
              takes pride in using only the freshest, high-quality ingredients
              sourced from local farmers and suppliers. The menu is thoughtfully
              designed to reflect the seasons, ensuring that guests can enjoy
              the best flavours each time of year has to offer. The chefs at
              Little Lemon expertly craft unique and mouth-watering dishes,
              combining traditional culinary techniques with innovative twists.
              The menu boasts a wide range of options, from comfort classics to
              contemporary creations, ensuring there's something for everyone to
              enjoy. The moment you step inside Little Lemon, you're greeted by
              a warm and welcoming ambiance. The tasteful décor, soft lighting,
              and comfortable seating make it the perfect spot for a romantic
              date night or a leisurely meal with friends and family. At Little
              Lemon, the staff is dedicated to providing guests with an
              unforgettable dining experience. The knowledgeable and friendly
              team goes above and beyond to ensure each patron feels like a
              valued guest, offering personalized recommendations and catering
              to any dietary preferences or restrictions. Little Lemon regularly
              hosts themed nights and offers seasonal specials, giving guests a
              chance to experience unique culinary adventures. From wine pairing
              dinners to holiday-themed menus, there's always something new and
              exciting happening at Little Lemon.
            </p>
          </div>
          <div className="right">
            <img src={CarouselOne} alt="Right Column Image" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
