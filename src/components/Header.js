import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        {/* <div className="navbar"> */}
            <ul className="flex justify-end items-center flex-1 gap-x-8">
                <li><Link to="/">Home </Link> </li>
                <li><Link to="/about">Offers </Link></li>
                <li><Link to="/grocery">Help</Link></li>
                <li><Link to="/contact">Sign In</Link></li>
                <li><Link>Cart</Link></li>
            </ul>
        {/* </div> */}
    </div>
)

export default Header;