import {AiOutlineShoppingCart} from 'react-icons/ai'
import { LOGO_URL } from '../../utils/constants';

const Header=()=>{
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
                    <li><AiOutlineShoppingCart /></li>
                </ul>
              
            </div>

        </div>
    )
}

export default Header;