import React from "react";
import classes from "./Gallery.module.css";

import car1 from "../assets/Gallery/Car1.png";
import car2 from "../assets/Gallery/Car2.png";
import car3 from "../assets/Gallery/Car3.png";
import car4 from "../assets/Gallery/Car4.png";
import car5 from "../assets/Gallery/car5.png";
import car6 from "../assets/Gallery/car6.png";
import car7 from "../assets/Gallery/Car7.png";
import car8 from "../assets/Gallery/car8.png";
import car9 from "../assets/Gallery/Car9.png";

const Gallery = () => {
  return (
    <div className={classes["main-column"]}>
      <div className={classes["col-1"]}>
        <div>
          <img src={car1} alt="" />
        </div>
        <div>
          <img src={car4} alt="" />
        </div>
        <div>
          <img src={car7} alt="" />
        </div>
      </div>
      <div className={classes["col-2"]}>
        <div>
          <img src={car2} alt="" />
        </div>
        <div className={classes["des-box"]}>
          <img src={car5} alt="" />
          <div className={classes["text-box"]}>
            <h5>Tesla Model 3</h5>
            <p>Disruptive, avant-garde, futuristic, innovative.</p>
            <button>Contact</button>
          </div>
        </div>
        <div>
          <img src={car8} alt="" />
        </div>
      </div>
      <div className={classes["col-3"]}>
        <div>
          <img src={car3} alt="" />
        </div>
        <div>
          <img src={car6} alt="" />
        </div>
        <div>
          <img src={car9} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
