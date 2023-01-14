import { restaurantsList } from "../data/restaurantsList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body-container">
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        id="search"
      />

      <h1 className="restaurant-title">{restaurantsList.length} Restaurants</h1>
      <div className="restaurant-cards-container">
        {restaurantsList.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
