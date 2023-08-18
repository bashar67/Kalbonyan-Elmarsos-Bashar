import classes from "./LandingPage.module.css";

const Landing = (props) => {
  return (
    <section id="home" className={`${classes.landing} h-screen relative `}>
      <div className={classes["landing-box"]}>
        <div></div>
        <div className={classes["text-box"]}>
          <h1>Find the perfect car for you at YourCar.</h1>
          <div>
            <p>
              We offer a wide range of cars that cater to your needs and budget.
              Visit us today and drive away with your dream car!
            </p>
          </div>

          <button className="">
            Descover
            <span>
              <svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 1.5L1 15.5M3.33333 1.5H15V13.1667"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
