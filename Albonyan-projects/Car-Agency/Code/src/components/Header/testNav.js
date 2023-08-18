import React, { useState, Fragment } from "react";

import "./navBar.css";
import HeaderCartButton from "./HeaderCartButton";

const NavBar = (props) => {
  const [clicked, setClicked] = useState(false);

  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);

  return (
    <Fragment>
      <nav className={colorChange ? "scroll" : ""}>
        <a href="#">
          {" "}
          <span>Your</span>Car
        </a>
        <div id="cart-and-nav-box">
          <div>
            <ul
              id="navbar"
              className={`${clicked ? "#navbar active" : "#navbar"} ${
                colorChange ? "#navbar scroll" : ""
              }`}
            >
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#cars">Cars</a>
              </li>
              <li>
                <a href="#contact">Contact us</a>
              </li>
            </ul>
          </div>
          <div id="cart-and-close-box">
            <div id="mobile" onClick={() => setClicked(!clicked)}>
              {clicked ? (
                <div>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g id="Menu / Close_SM">
                      <path
                        id="Vector"
                        d="M16 16L12 12M12 12L8 8M12 12L16 8M12 12L8 16"
                        stroke="#000000"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  </svg>
                </div>
              ) : (
                <div>
                  <svg
                    width="50"
                    height="50"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                  >
                    <path
                      fill="#000000"
                      fillRule="evenodd"
                      d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"
                    />
                  </svg>
                </div>
              )}
            </div>
            <div>
              {" "}
              <HeaderCartButton onClick={props.onShowCart} />
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};

export default NavBar;
