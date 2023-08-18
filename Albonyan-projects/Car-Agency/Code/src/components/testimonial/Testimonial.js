import React from "react";

import classess from "./testimonial.module.css";
import CartTestimonial from "./CartTestimonial";

const Testimonial = () => {
  return (
    <div className={classess.testimonial}>
      <h2>TESTIMONIAL</h2>
      <p>Testimonials</p>

      <ul>{<CartTestimonial />}</ul>
    </div>
  );
};

export default Testimonial;
