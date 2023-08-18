import React, { useState } from "react";

import Landing from "./components/landing/Landing";
import AboutUs from "./components/aboutUS/AboutUs";
import Services from "./components/services_/Services";
import Cars from "./components/cars/Cars";
import Gallery from "./components/gallery/Gallery";
import Testimonial from "./components/testimonial/Testimonial";
import Footer from "./components/footer/Footer";
import Cart from "./components/Header/Cart/Cart";

import NavBar from "./components/Header/testNav";
import CartProvider from "./components/store/CarProvider";

function App() {
  const [carTiShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(!carTiShown);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
      {carTiShown && <Cart onClose={hideCartHandler} />}
      <NavBar onShowCart={ShowCartHandler} />
      <Landing />
      <AboutUs />
      <Services />
      <Cars />
      <Gallery />
      <Testimonial />
      <Footer />
    </CartProvider>
  );
}

export default App;
