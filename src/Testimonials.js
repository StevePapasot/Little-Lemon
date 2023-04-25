import React from "react";
import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial">
          <img src="https://via.placeholder.com/150" alt="testimonial" />
          <h3>John Doe</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam."
          </p>
        </div>
        <div className="testimonial">
          <img src="https://via.placeholder.com/150" alt="testimonial" />
          <h3>Jane Smith</h3>
          <p>
            "Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam."
          </p>
        </div>
        <div className="testimonial">
          <img src="https://via.placeholder.com/150" alt="testimonial" />
          <h3>Bob Johnson</h3>
          <p>
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum."
          </p>
        </div>
        <div className="testimonial">
          <img src="https://via.placeholder.com/150" alt="testimonial" />
          <h3>Alice Lee</h3>
          <p>
            "Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur."
          </p>
        </div>
        <div className="testimonial">
          <img src="https://via.placeholder.com/150" alt="testimonial" />
          <h3>Mark Davis</h3>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua."
          </p>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
