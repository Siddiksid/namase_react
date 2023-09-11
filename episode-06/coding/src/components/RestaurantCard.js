import { CDN_URL } from "../../utils/constants";


const RestaurantCard=({
    cloudinaryImageId,
    avgRating,
    name,
    sla,
    costForTwo,
    cuisines
})=>{
    return(
        <div className="res-card">
           <img className="res-logo" src={CDN_URL +
          cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(" , ")}</h3>
          <h4>⭐{avgRating} stars</h4>
          <h4>{costForTwo}(approx)</h4>

          <h5>{sla.deliveryTime} minutes on avg</h5>
          
        </div>
    )
}

export default RestaurantCard;