import RestaurantcMenu from "./RestaurantMenu";

const MenuItemComponent=({
    name,
    price,
    
})=>{

 

    return(
        <div className="menu-component">
          
            
            <div>
              <h3>{name}</h3>
              
              <p>₹{price}</p>
            </div>

            <button className="menu-btn">Add</button>
            
        </div>
    )
}

export default MenuItemComponent;