import React from "react";

const ShimmerMenuCard = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((_, index) => (
          <div className="restaurant-menu-card" key={index}>
            <div className="restaurant-menu-details-container">
              <div className="shimmer title"></div>
              <div className="shimmer subtitle" style={{ marginTop: 8 }}></div>
              <div className="shimmer subtitle" style={{ marginTop: 8 }}></div>
            </div>
            <div className="shimmer restaurant-menu-image-container"></div>
          </div>
        ))}
    </>
  );
};

export default ShimmerMenuCard;
