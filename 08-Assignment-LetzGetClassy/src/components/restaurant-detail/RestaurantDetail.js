import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  RESTAURANT_DETAILS_API_URL,
  RESTAURANT_IMAGE_BASE_URL,
} from "../../utils/constants";
import ShimmerMenuCard from "../shimmer/ShimmerMenuCard";
import ShimmerRestaurantInfo from "../shimmer/ShimmerRestaurantInfo";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import "./styles/restaurant-detail.css";

const RestaurantDetail = () => {
  const { id } = useParams(); // fetch id param from url
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

  return (
    <>
      <div className="restaurant-detail-banner">
        {restaurantDetail ? (
          <RestaurantInfo restaurantDetail={restaurantDetail} />
        ) : (
          <ShimmerRestaurantInfo />
        )}
      </div>
      <div className="restaurant-menu-cards-container">
        {menuItems ? (
          <RestaurantMenu menuItems={menuItems} />
        ) : (
          <ShimmerMenuCard />
        )}
      </div>
    </>
  );
};

export default RestaurantDetail;
