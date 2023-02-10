import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "../shimmer/ShimmerRestaurantCard";
import { Link } from "react-router-dom";
import useRestaurantList from "../../hooks/useRestaurantList";
import { getSearchResults } from "../../utils/helper";

const Home = () => {
  // fetch restaurants list
  const restaurantsData = useRestaurantList();

  // filtered list of restaurant
  const [restaurantList, setRestaurantsList] = useState();

  useEffect(() => {
    setRestaurantsList(restaurantsData);
  }, [restaurantsData]);

  return (
    <div className="body-container">
      {restaurantList ? (
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => {
            const searchResults = getSearchResults(e.target.value, restaurantsData);
            setRestaurantsList(searchResults);
          }}
        />
      ) : (
        <div className="shimmer text-box" />
      )}

      {restaurantList ? (
        <h1 className="restaurant-title">
          {restaurantList.length} Restaurants
        </h1>
      ) : (
        <div className="shimmer h1 restaurant-title" />
      )}
      <div className="restaurant-cards-container">
        {restaurantList
          ? restaurantList.map((restaurant) => (
              <Link
                to={`/restaurant/${restaurant.data.id}`}
                key={restaurant.data.id}
              >
                <RestaurantCard {...restaurant.data} />
              </Link>
            ))
          : Array(10)
              .fill("")
              .map((_, index) => <ShimmerRestaurantCard key={index} />)}
      </div>
    </div>
  );
};

export default Home;
