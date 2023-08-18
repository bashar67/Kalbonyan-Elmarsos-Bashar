import React from "react";
import { ReactDOM } from "react";
import Slider from "react-slick";

import "./slick.css";
import "./slick-theme.css";

// import classes from "./CardCars.module.css";

import { cars } from "../data";
import CarItem from "./CarItem/CarItem";

const AvilableCars = (props) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const carlist2 = cars.map((car) => (
    <div>
      <CarItem
        id={car.id}
        image={car.image}
        name={car.name}
        class={car.class}
        description={car.description}
        price={car.price}
        seats={car.seats}
        luggage={car.luggage}
        key={car.id}
      />
    </div>
  ));

  return (
    <div>
      <Slider {...settings}>{carlist2}</Slider>
    </div>
  );
};

export default AvilableCars;
