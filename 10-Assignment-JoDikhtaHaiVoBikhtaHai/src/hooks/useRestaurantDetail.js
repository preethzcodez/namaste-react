import { useState, useEffect } from "react";
import { RESTAURANT_DETAILS_API_URL } from "../utils/constants";

const useRestaurantDetail = (id) => {
  const [restaurantDetail, setRestaurantsDetail] = useState();
  const [menuItems, setMenuItems] = useState();

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  // fetch data from server by id
  const getRestaurantDetail = async () => {
    const data = await fetch(`${RESTAURANT_DETAILS_API_URL}${id}`);
    const restaurantDetailJson = await data.json();
    const {
      cloudinaryImageId,
      name,
      area,
      city,
      cuisines,
      avgRatingString,
      totalRatingsString,
      sla,
      costForTwo,
    } = restaurantDetailJson?.data;
    setRestaurantsDetail({
      cloudinaryImageId,
      name,
      area,
      city,
      cuisines,
      avgRatingString,
      totalRatingsString,
      sla,
      costForTwo,
    });
    setMenuItems(restaurantDetailJson?.data?.menu?.items);
  };

  return [restaurantDetail, menuItems];
};

export default useRestaurantDetail;
