import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { CDN_URL, swiggy_menu_api_URL } from "../../utils/constants";
import Shimmer from "./Shimmer";
import MenuItemComponent from "./MenuItemComponent";

const RestaurantcMenu=()=>{
   const[resInfo,setResInfo]=useState(null);
    const{resId}=useParams();
    
  useEffect(()=>{
    fetchMenu();
  },[])
  const fetchMenu= async() =>{
    const data=await fetch(swiggy_menu_api_URL+resId);
    const json=await data.json();
    setResInfo(json.data);
    console.log(resInfo)
  }
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
                    // return(<MenuItemComponent key={item.card.info.id}>{item.card.info.name}:₹{item.card.info.price/100 || item.card.info.defaultPrice/100} / >)
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