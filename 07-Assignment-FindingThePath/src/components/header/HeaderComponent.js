import logo from "../../assets/logo.png";
import food from "../../assets/food.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [isLoggedIn, setLogin] = useState(false);

  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="logo" />
      <img src={food} className="food-img" alt="food-item" />
      <div className="nav-bar-menu">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
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
