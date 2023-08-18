import classes from "./logoSec.module.css";

const LogoSection = () => {
  return (
    <div
      className={`${classes.logos} flex items-center justify-around  py-24 bg-logo-bg`}
    >
      <div>
        <img src={require("../assets/logos/BMW.png")} alt="BMW logo" />
      </div>
      <div>
        <img
          src={require("../assets/logos/Volvo_logo1 1.png")}
          alt="Volvo_logo1"
        />
      </div>
      <div>
        <img
          src={require("../assets/logos/Suzuki_logo_2 1.png")}
          alt="Suzuki_logo"
        />
      </div>
      <div>
        <img src={require("../assets/logos/Toyota_EU 1.png")} alt="Toyota_EU" />
      </div>
      <div>
        <img
          src={require("../assets/logos/Nissan_2020_logo.png")}
          alt="Nissan_2020_logo"
        />
      </div>
      <div>
        <img
          src={require("../assets/logos/Mercedes-Benz_free_logo.png")}
          alt="Mercedes-Benz_free_logo"
        />
      </div>
      <div>
        <img src={require("../assets/logos/subaru.png")} alt="subaru" />
      </div>
      <div>
        <img src={require("../assets/logos/Vector.png")} alt="Vector" />
      </div>
    </div>
  );
};

export default LogoSection;
