import logo from "../assets/logo.png";
import food from "../assets/food.png";
import { useState } from "react";

const HeaderComponent = () => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="logo" />
      <img src={food} className="food-img" alt="food-item" />
      <div className="nav-bar-menu">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
        <button onClick={() => setLogin(!isLoggedIn)}>
          {isLoggedIn ? "Logout" : "Login"}
        </button>
      </div>
    </div>
  );
};

export default HeaderComponent;
