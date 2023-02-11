import React from "react";

const ShimmerRestaurantInfo = () => {
  return (
    <div className="restaurant-detail-container">
      <div className="restaurant-detail-image-container">
        <div
          className="shimmer"
          style={{ backgroundColor: "#e1e2e3", height: "inherit" }}
        ></div>
      </div>
      <div className="restaurant-details">
        <div className="shimmer title"></div>
        <div className="shimmer subtitle" style={{ marginTop: 24 }}></div>
        <div className="shimmer subtitle" style={{ marginTop: 8 }}></div>
        <div
          className="restaurant-detail-rating-container mt-14"
        /*   style={{ marginTop: 36 }} */
        >
          <div
            style={{
              display: "inherit",
              paddingRight: "35px",
              borderRight: "1px solid hsla(0,0%,100%,.2)",
            }}
          >
            <div className="shimmer text" style={{ width: 75 }}></div>
            <div className="shimmer text" style={{ marginTop: 5 }}></div>
          </div>
          <div
            style={{
              display: "inherit",
              padding: "0px 35px",
              borderRight: "1px solid hsla(0,0%,100%,.2)",
            }}
          >
            <div className="shimmer text" style={{ width: 75 }}></div>
            <div className="shimmer text" style={{ marginTop: 5 }}></div>
          </div>
          <div
            style={{
              display: "inherit",
              paddingLeft: "35px",
            }}
          >
            <div className="shimmer text" style={{ width: 75 }}></div>
            <div className="shimmer text" style={{ marginTop: 5 }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerRestaurantInfo;
