import React from "react";
import { RESTAURANT_IMAGE_BASE_URL } from "../../utils/constants";

const RestaurantInfo = ({ restaurantDetail }) => {
  return (
    <div className="restaurant-detail-container">
      <div className="restaurant-detail-image-container">
        <div style={{ backgroundColor: "#e1e2e3", height: "inherit" }}>
          {restaurantDetail?.cloudinaryImageId && (
            <img
              className="restaurant-image"
              src={`${RESTAURANT_IMAGE_BASE_URL}${restaurantDetail?.cloudinaryImageId}`}
              alt="restaurant"
            ></img>
          )}
        </div>
      </div>
      <div className="restaurant-details">
        <h1> {restaurantDetail?.name}</h1>
        <label className="restaurant-detail-text">
          {restaurantDetail?.cuisines.join(", ")}
        </label>
        <label className="restaurant-detail-text">
          {`${restaurantDetail?.area}, ${restaurantDetail?.city}`}
        </label>
        <div className="restaurant-detail-rating-container">
          <div
            style={{
              display: "inherit",
              paddingRight: "35px",
              borderRight: "1px solid hsla(0,0%,100%,.2)",
            }}
          >
            <label style={{ display: "flex", alignItems: "center" }}>
              <span className="material-symbols-outlined restaurant-detail-rating-container-maintext w-4">
                star
              </span>
              <span
                className="restaurant-detail-rating-container-maintext"
                style={{ marginLeft: 2 }}
              >
                {restaurantDetail?.avgRatingString}
              </span>
            </label>
            <label
              className="restaurant-detail-rating-container-subtext"
              style={{ marginTop: 5 }}
            >
              {restaurantDetail?.totalRatingsString}
            </label>
          </div>
          <div
            style={{
              display: "inherit",
              padding: "0px 35px",
              borderRight: "1px solid hsla(0,0%,100%,.2)",
            }}
          >
            <label className="restaurant-detail-rating-container-maintext">
              {restaurantDetail?.sla?.slaString.toLowerCase()}
            </label>
            <label
              className="restaurant-detail-rating-container-subtext"
              style={{ marginTop: 5 }}
            >
              Delivery Time
            </label>
          </div>
          <div
            style={{
              display: "inherit",
              paddingLeft: "35px",
            }}
          >
            <label className="restaurant-detail-rating-container-maintext">
              {`₹ ${restaurantDetail?.costForTwo / 100}`}
            </label>
            <label
              className="restaurant-detail-rating-container-subtext"
              style={{ marginTop: 5 }}
            >
              Cost for two
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantInfo;
