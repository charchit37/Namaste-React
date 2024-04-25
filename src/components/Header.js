import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';


const Header = () => (
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_URL}></img>
        </div>
        <div className="navbar">
            <ul className="nav-items">
                <li><Link to="/">Home </Link> </li>
                <li><Link to="/about">About Us </Link></li>
                <li><Link to="/grocery">Grocery</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
                <li><Link>Cart</Link></li>
            </ul>
        </div>
    </div>
)

export default Header;