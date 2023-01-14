import { useState } from "react";
import { restaurantsList } from "../data/restaurantsList";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  // restaurant data
  const [restaurants, setRestaurants] = useState(restaurantsList);

  // get Search Results
  const getSearchResults = (searchText) => {
    setRestaurants(
      restaurantsList.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="body-container">
      <input
        className="search-box"
        type="text"
        placeholder="Search"
        id="search"
        onChange={(e) => getSearchResults(e.target.value)}
      />

      <h1 className="restaurant-title">{restaurants.length} Restaurants</h1>
      <div className="restaurant-cards-container">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
        ))}
      </div>
    </div>
  );
};

export default Body;
