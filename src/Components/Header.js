import { NavLink } from "react-router-dom";
function Header() {
    return (
        <div>
            <nav className="nav">
                <NavLink className="nav-link " exact activeClassName="active" to="/">Home</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Articles">Articles</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Reviews">Reviews</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Signup">Register</NavLink>
                <NavLink className="nav-link" activeClassName="active" to="/Contacts">About us</NavLink>

            </nav>
        </div>
    )
}
export default Header;