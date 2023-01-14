import logo from "../assets/logo.png";
import food from "../assets/food.png";

const HeaderComponent = () => {
  return (
    <div className="nav-bar">
      <img src={logo} className="logo" alt="logo" />
      <img src={food} className="food-img" alt="food-item" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
      </ul>
    </div>
  );
};

export default HeaderComponent;
