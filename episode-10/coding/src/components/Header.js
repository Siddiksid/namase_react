import { LOGO_URL } from "../../utils/constants.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus.js";

const Header=()=>{
    const[loginBtn,setLoginBtn]=useState("Login");
    const onlineStatus=useOnlineStatus();
    return(

        <div className="flex justify-between items-center bg-[#F6F6F8] shadow-lg mb-2">
            <div className="logo-container">
                <img className="w-[150px]" src={LOGO_URL} alt="postmates-logo"></img>

            </div>
            <div className="flex  items-center ">
                <ul className="flex p-4 m-4 sm:text-[12px] md:text-lg ">
                    <li className="px-4 text-[#386A5D]">
                        OnlineStatus:{onlineStatus?"✅":"🔴"}
                      
                    </li>
                    <li className="px-4 text-[#386A5D] sm:text-[12px] md:text-lg "><Link  to="/">Home</Link></li>
                    <li className="px-4 text-[#386A5D] sm:text-[12px] md:text-lg"><Link  to="/about">About</Link></li>
                    <li className="px-4 text-[#386A5D] sm:text-[12px] md:text-lg"><Link  to="/contact">Contact</Link></li>
                    <li className="px-4 text-[#386A5D] sm:text-[12px] md:text-lg"><Link  to="/grocery">Grocery</Link></li>
                    
                    <li className="px-4"><FontAwesomeIcon icon={faCartShopping} /></li>
                    <button className="login-btn text-[#386A5D]" onClick={()=>loginBtn === "Login"?setLoginBtn("Logout"):setLoginBtn("Login")}>{loginBtn}</button>
                </ul>

            </div>

        </div>
    )
}

export default Header;
