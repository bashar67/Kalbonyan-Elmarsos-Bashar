import React from "react";

import classes from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section id="about" className={`${classes.about} grid grid-cols-2 gap-5`}>
      <div className={classes["text-box"]}>
        <h2 className="text-8xl text-heading-color font-bold ">ABOUT US</h2>
        <p className={`${classes.heading}`}>About</p>
        <p
          className={`${classes["section-text"]} text-lg font-medium text-gray-900`}
        >
          YourCar is a luxury car dealership that offers a personalized and
          first-class experience to its clients. Our team of experienced
          professionals is dedicated to providing exceptional service and
          finding the perfect vehicle to match our clients' unique preferences
          and requirements. We have an extensive selection of high-end vehicles,
          ranging from sports cars to SUVs, all of which are maintained to the
          highest standards of quality and safety. <br />
          <br />
          At YourCar, we are committed to creating a stress-free and enjoyable
          car buying experience. We understand that purchasing a luxury car can
          be a significant investment, which is why we offer flexible financing
          options to make the process more manageable. Our team is available to
          answer any questions and provide guidance throughout the entire buying
          process. We take pride in our outstanding customer service and
          attention to detail, and we are confident that our clients will be
          satisfied with their experience at YourCar.
        </p>
      </div>
      <div className={`${classes["img-box"]} pt-28`}>
        <img src={require("../assets/car.png")} alt="car" className="w-96  " />
      </div>
    </section>
  );
};

export default AboutUs;
