import React from "react";

import classes from "./Cars.module.css";

import CardCars from "./CardCars";

const Cars = (props) => {
  return (
    <section className={classes.cars} id="cars">
      <h2 className="text-9xl text-center text-heading-color font-bold mb-24">
        CARS
      </h2>
      <p
        className={`${classes.heading} text-7xl font-bold text-main-color absolute  top-40`}
      >
        Cars
      </p>

      <CardCars />
    </section>
  );
};

export default Cars;
