
import { useState } from 'react';
import { LOGO_URL } from '../../utils/constants';

const Header=()=>{
    const[btnName,setbtnName]=useState("Login");
    
    return(
        <div className="header">
            <div className="logo-container">
               <img className="main-logo" src={LOGO_URL} alt="main-logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li><i class="fa-solid fa-cart-shopping"></i></li>
                    <button className='login-btn' onClick={()=> btnName==="Login"?setbtnName("Logout"):setbtnName("Login")}>{btnName}</button>
                </ul>
                
              
            </div>

        </div>
    )
}

export default Header;