import useRestaurantMenu from "../../utils/useRestaurantMenu";
import { useParams } from "react-router-dom";
import { CDN_URL, swiggy_menu_api_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import MenuItemComponent from "./MenuItemComponent";

const RestaurantcMenu=()=>{
 
    const{resId}=useParams();
    
   const resInfo=useRestaurantMenu(resId);

  if(resInfo===null) return <Shimmer />

  const{name,costForTwoMessage,cuisines,cloudinaryImageId}=resInfo?.cards[0]?.card?.card?.info;
  const{itemCards}=resInfo?.cards[3]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card.card;
  console.log(itemCards)
    return(
        <div className="res-menu">
           
           <div className="flex-container">
            <div> 
               <h1>{name}</h1>
               <h3>{cuisines.join(" , ")}</h3>
               <p>{costForTwoMessage}</p>

            </div>
            <img src={CDN_URL+cloudinaryImageId} alt="res-image" />
           </div>
           
          
           
          
           <ul>
            {
               
              
                itemCards.map((item)=>{
                   
                    let name=item?.card?.info?.name;
                    let price=(item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100);
                    
                    let key=item?.card?.info?.id;
                    return <MenuItemComponent key={key} name={name} price={price}  />
                })
            
              }
          
           
           </ul>
        </div>
    )
}

export default RestaurantcMenu;