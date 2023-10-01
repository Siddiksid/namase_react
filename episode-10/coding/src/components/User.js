import { useState } from "react";

const User=({name})=>{
    const[count]=useState(0)
    const[count2]=useState(0)
    return(
        <div className="user-card p-4 m-4 rounded-lg bg-gray-50">
            <h1>Count = {count}</h1>
            <h2>count 2= {count2}</h2>
             <h2>Name : {name}</h2>
             <h3>Location :Tamilnadu</h3>
             <h4>Contact @siddiksid15</h4>
        </div>
    )
}

export default User;