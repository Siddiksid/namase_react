import { CDN_URL } from "../../utils/constants";


const Restaurantcard=(
    {
        name,
        cloudinaryImageId,
        avgRating,
        costForTwo,
        sla


    }
)=>{
    
    return(
        <div className="m-4 p-4 w-[380px] rounded-lg bg-gray-100 hover:bg-gray-200">
             <img className="rounded-lg"  src={CDN_URL+cloudinaryImageId}></img>
             <h3 className="font-bold py-3 text-lg">{name}</h3>
            
      
             <h5 className="py-2 text-[#386A5D]">⭐{avgRating} stars</h5>
             <h5 className="py-2 text-[#386A5D]">{costForTwo} (approx)</h5>
             <h6 className="py-2 text-[#386A5D]">{sla.deliveryTime} minutes on avg </h6> 
        </div>
    )
}


export default Restaurantcard;