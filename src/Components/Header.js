import { NavLink } from "react-router-dom";
import './Header.css'
function Header() {
    return (
        <div >
            <header>
                <img className="logo" src="" alt="logo" />
                <nav>
                    <ul className="nav__links">
                        <NavLink className="nav-link " exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/Articles">Articles</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/Reviews">Reviews</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/Contacts">About us</NavLink>
                    </ul>
                </nav>
                <NavLink className="nav-link" activeClassName="active" to="/Signup"><button>Register</button></NavLink>
            </header>
        </div>
    )
}
export default Header;
