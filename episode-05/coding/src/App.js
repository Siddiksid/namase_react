import React from "react";
import  ReactDOM  from "react-dom/client";

import Header from "./components/Header";
import Body from "./components/Body";












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
           <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          cloudinaryImageId} />
          <h2>{name}</h2>
          <h3>{cuisines.join(",")}</h3>
          <h4>⭐{avgRating} stars</h4>
          <h4>{costForTwoString}(approx)</h4>

          <h5>{deliveryTime} minutes on avg</h5>
          
        </div>
    )
}


const Footer=()=>{
    return(
        <div className="footer">
            <div className="foot-content"> 
                <p>Made with ♥ by Siddiksid &copy; Copyright @ PostMates</p>
                 

            </div>
        </div>
    )
}

const AppLayout=()=>{
    return(
        <React.Fragment>
            <Header />
            <Body />
            <Footer />
        </React.Fragment>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />)