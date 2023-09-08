import { CDN_URL } from "../../utils/constants";


const RestaurantCard=({
    cloudinaryImageId,
    avgRating,
    name,
    deliveryTime,
    costForTwoString,
    cuisines
})=>{
    return(
        <div className="res-card">
           <img className="res-logo" src={CDN_URL +
          cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(",")}</h3>
          <h4>⭐{avgRating} stars</h4>
          <h4>{costForTwoString}(approx)</h4>

          <h5>{deliveryTime} minutes on avg</h5>
          
        </div>
    )
}

export default RestaurantCard;