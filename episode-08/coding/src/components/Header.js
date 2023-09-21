import { LOGO_URL } from "../../utils/constants.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useState } from "react";

const Header=()=>{
    const[loginBtn,setLoginBtn]=useState("Login");
    return(

        <div className="header">
            <div className="logo-container">
                <img src={LOGO_URL} alt="postmates-logo"></img>

            </div>
            <div className="nav-items">
                <ul>
                    <li><Link style={{textDecoration:"none",color:"#fff"}} to="/">Home</Link></li>
                    <li><Link style={{textDecoration:"none",color:"#fff"}} to="/about">About</Link></li>
                    <li><Link style={{textDecoration:"none", color:"#fff"}}  to="/contact">Contact</Link></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                    <button className="login-btn" onClick={()=>loginBtn === "Login"?setLoginBtn("Logout"):setLoginBtn("Login")}>{loginBtn}</button>
                </ul>

            </div>

        </div>
    )
}

export default Header;
