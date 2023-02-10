import React from "react";
import { RESTAURANT_IMAGE_BASE_URL } from "../../utils/constants";

const RestaurantMenu = ({ menuItems }) => {
  console.log(Object.values(menuItems));
  return (
    <>
      {Object.values(menuItems)?.map((menuItem) => (
        <div className="restaurant-menu-card" key={menuItem.id}>
          <div className="restaurant-menu-details-container">
            <div className="restaurant-menu-card-title">{menuItem.name}</div>
            <div className="restaurant-menu-card-price">
              ₹{" "}
              {menuItem.price > 0
                ? menuItem.price / 100
                : menuItem.defaultPrice / 100}
            </div>
            <div className="restaurant-menu-card-description">
              {menuItem.description}
            </div>
          </div>
          <div className="restaurant-menu-image-container">
            {menuItem?.cloudinaryImageId && (
              <img
                style={{ width: "100%", height: "100%" }}
                src={`${RESTAURANT_IMAGE_BASE_URL}${menuItem.cloudinaryImageId}`}
                alt=""
              />
            )}
          </div>
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
