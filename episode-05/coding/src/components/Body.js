import RestaurantCard from "./RestaurantCard";
import restaurantList from "../../utils/mockData";
import { useRef, useState } from "react";


const Body=()=>{
    //Local State variable
     let[listOfRestaurant,setListOfRestaurant]=useState(restaurantList)
     let[searchText,setSearchText]=useState(0);
     
     function filterData(e){
        e.preventDefault();
        let data=listOfRestaurant.filter((res)=>res.data.name.toLowerCase().includes(searchText.toLowerCase()))
        setListOfRestaurant(data);
     }
    
    return(
        <div className="Body">
              <div className="search">
                <form onSubmit={filterData}>
                   <input type="text" className="search-bar" placeholder="Search any restaurant" onChange={(e)=>setSearchText(e.target.value)} />
                   <input type="submit" value="Search" onClick={filterData} className="btn" />
                </form>
             
            </div>
            <div className="filter">
               <button className="filter-btn btn" onClick={()=>{
                
                setListOfRestaurant(listOfRestaurant.filter((res)=> (res.data.avgRating)>4));
                console.log(listOfRestaurant)
            }
                }>Top Rated Restaurants</button>
            </div>
          
            
            <div className="res-container">
                {
                    listOfRestaurant.map((restaurant)=>{
                        return <RestaurantCard key={restaurant.data.id} {...restaurant.data}/>

                    })
                }

            </div>
        </div>
    )
}

export default Body;