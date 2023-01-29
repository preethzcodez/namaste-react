import { RESTAURANT_IMAGE_BASE_URL } from "../../utils/constants";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  costForTwoString,
  slaString,
  avgRating,
  aggregatedDiscountInfo,
}) => {

  // get restaurant rating color code
  const getRestaurantRatingColorCode = (avgRating) => {
    if (avgRating >= 4) {
      return "#48c479";
    } else if (avgRating > 2.5) {
      return "#db7c38";
    } else {
      return "red";
    }
  };

  return (
    <div className="restaurant-card">
      <img
        src={`${RESTAURANT_IMAGE_BASE_URL}${cloudinaryImageId}`}
        alt="restaurant-image"
      />
      <label className="restaurant-card-title">{name}</label>
      <label className="restaurant-card-cuisine">{cuisines?.join(", ")}</label>
      <div className="restaurant-card-rating-container">
        <label
          className="restaurant-card-rating-star-container"
          style={{ background: getRestaurantRatingColorCode(avgRating) }}
        >
          <span class="material-symbols-outlined restaurant-card-rating-star-icon">
            star
          </span>
          <span style={{marginLeft: 2}}>{avgRating}</span>
        </label>
        <label>{slaString}</label>
        <label>{costForTwoString}</label>
      </div>
      <label className="restaurant-card-offer">{`${aggregatedDiscountInfo?.shortDescriptionList[0]?.meta}`}</label>
    </div>
  );
};

export default RestaurantCard;
