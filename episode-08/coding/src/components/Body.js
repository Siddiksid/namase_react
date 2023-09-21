import { RES_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import Restaurantcard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";


const Body=()=>{
    const[restaurant,setRestaurant]=useState([]);
    const[filteredRestaurant,setFilteredRestaurant]=useState([]);
    const[searchText,setSearchText]=useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData=async ()=>{

        const data=await fetch(RES_URL)
        const json=await data.json();
       
        setRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants );
        setFilteredRestaurant(json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle?.restaurants || json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        
    }
    function searchData(e)
    {
        e.preventDefault();
        let data=restaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        
        setFilteredRestaurant(data);
    }
    if(restaurant.length===0) return <Shimmer />

    return (
        <div className="body">
           <div className="search">
            <form onSubmit={searchData}>
              <input type="text" placeholder="Search any restaurant" className="search-box" onChange={(e)=>setSearchText(e.target.value)} />
              <input type="submit" value="Search" className="search-btn btn" onClick={searchData}/>
            </form>
              
           </div>
           <div className="filter">
              <button className="filter-btn btn" onClick={()=>setFilteredRestaurant(restaurant.filter((res)=>res.info.avgRating>4))}>Filter Restaurants</button>
           </div>
           <div className="res-container">
                {
                    filteredRestaurant.map((res)=>{
                        return <Link style={{textDecoration:"inherit"}} key={res?.info?.id} to={"/restaurants/"+res?.info?.id}><Restaurantcard key={res.info.id} {...res.info} /> </Link>
                    })
                }
           </div>
        </div>
    )
}

export default Body;