import { RES_URL } from "../../utils/constants";
import { useEffect, useState } from "react";
import Restaurantcard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

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
        console.log(json);
        
    }

    const onlineStatus=useOnlineStatus();
    function searchData(e)
    {
        e.preventDefault();
        let data=restaurant.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
        
        setFilteredRestaurant(data);
    }
    if(restaurant.length === 0) return <Shimmer />
    if(onlineStatus === false) return <h1>Looks like you're offline!! Please check your internet connection</h1>
    return (
        <div className="body">
           <div className="search m-4 p-4 flex items-center">
            <form onSubmit={searchData}>
              <input type="text" c placeholder="Search any restaurant" className="border border-solid border-black" onChange={(e)=>setSearchText(e.target.value)} />
              <input  type="submit" value="Search" className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={searchData}/>
            </form>
              
            <div className="filter px-4">
              <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>setFilteredRestaurant(restaurant.filter((res)=>res.info.avgRating>4))}>Top Rated Restaurants</button>
           </div>
           </div>
         
           <div className="flex flex-wrap mx-[100px]">
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