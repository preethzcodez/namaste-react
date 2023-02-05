import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantDetail from "../../hooks/useRestaurantDetail";
import ShimmerMenuCard from "../shimmer/ShimmerMenuCard";
import ShimmerRestaurantInfo from "../shimmer/ShimmerRestaurantInfo";
import RestaurantInfo from "./RestaurantInfo";
import RestaurantMenu from "./RestaurantMenu";
import "./styles/restaurant-detail.css";

const RestaurantDetail = () => {
  const { id } = useParams(); // fetch id param from url
  const [restaurantDetail, menuItems] = useRestaurantDetail(id);

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
