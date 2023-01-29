import { useEffect, useState } from "react";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerRestaurantCard from "./shimmer/ShimmerRestaurantCard";

const Body = () => {
  // restaurant data
  const [restaurantsData, setRestaurantsData] = useState();

  // filtered list of restaurant
  const [restaurantList, setRestaurantsList] = useState();

  useEffect(() => {
    getRestaurantsList();
  }, []);

  // fetch restaurants list from server
  const getRestaurantsList = async () => {
    const data = await fetch(RESTAURANT_LIST_API_URL);
    const jsonData = await data.json();
    const restaurantCards = jsonData?.data?.cards?.filter(
      (card) => card?.cardType === "seeAllRestaurants"
    )[0]?.data?.data?.cards;
    setRestaurantsData(restaurantCards);
    setRestaurantsList(restaurantCards);
  };

  // get Search Results
  const getSearchResults = (searchText) => {
    setRestaurantsList(
      restaurantsData.filter((restaurant) =>
        restaurant.data.name.toLowerCase().includes(searchText.toLowerCase())
      )
    );
  };

  return (
    <div className="body-container">
      {restaurantList ? (
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          id="search"
          onChange={(e) => getSearchResults(e.target.value)}
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
              <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
            ))
          : Array(10)
              .fill("")
              .map((_, index) => <ShimmerRestaurantCard key={index} />)}
      </div>
    </div>
  );
};

export default Body;
