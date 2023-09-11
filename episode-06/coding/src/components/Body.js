import RestaurantCard from "./RestaurantCard";

import { useEffect, useRef, useState } from "react";
import Shimmer from "./Shimmer";
import { RES_URL } from "../../utils/constants";


const Body=()=>{
    //Local State variable
     let[listOfRestaurant,setListOfRestaurant]=useState([])
     const[filteredRestaurant,setFilteredRestaurant]=useState([]);
     let[searchText,setSearchText]=useState("");
     
     
       useEffect(()=>{
          fetchData();
       },[])

     const fetchData= async ()=>{
        const data=await fetch(RES_URL)


        // The below Url ciontains lat and longitude of my hometown Krishnagiri
        // const data =await fetch(`https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.511372&lng=78.22244&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`);

        const json=await data.json();
        // Optional chaining
        setListOfRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
     }
     function filterData(e){
        e.preventDefault();
        let data=listOfRestaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
        setFilteredRestaurant(data);
     }
     

    //  Conditional rendering
    //  if((listOfRestaurant.length) === 0)
    //  {
    //     return <Shimmer />
    //  }
    
    return listOfRestaurant?.length ===0?<Shimmer />:(
        <div className="Body">
              <div className="search">
                <form onSubmit={filterData}>
                   <input type="text" className="search-bar" value={searchText} placeholder="Search any restaurant" onChange={(e)=>setSearchText(e.target.value)} />
                   <input type="submit" value="Search" onClick={filterData} className="btn" />
                </form>
             
            </div>
            <div className="filter">
               <button className="filter-btn btn" onClick={()=>{
                
                setFilteredRestaurant(listOfRestaurant.filter((res)=> (res.info.avgRating)>4));
                console.log(listOfRestaurant)
            }
                }>Top Rated Restaurants</button>
            </div>
          
            
            <div className="res-container">
                {
                    filteredRestaurant?.map((restaurant)=>{
                        return <RestaurantCard key={restaurant?.info?.id} {...restaurant.info}/>

                    })
                }

            </div>
        </div>
    )
}

export default Body;