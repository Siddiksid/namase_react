import RestaurantcMenu from "./RestaurantMenu";

const MenuItemComponent=({
    name,
    price,
    
})=>{

    // ITEM_IMG_CDN_URL + item?.imageId

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