import { useState, useEffect } from "react";
import { RESTAURANT_LIST_API_URL } from "../utils/constants";

const useRestaurantList = () => {
  const [restaurantsList, setRestaurantsList] = useState();

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
    setRestaurantsList(restaurantCards);
  };

  return restaurantsList;
};

export default useRestaurantList;
