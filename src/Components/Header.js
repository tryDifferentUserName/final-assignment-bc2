import { NavLink } from "react-router-dom";
import '../Assets/css/Header.css'
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navigation-style">
            <header>
                <Link to="/"><img className="logo" src="../Assets/images/logo.png" alt="In Vino veritas" /></Link>
                <nav>
                    <ul className="nav__links">
                        <NavLink className="nav-link " exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/Articles">Wines</NavLink>
                        <NavLink className="nav-link" activeClassName="active" to="/Contacts">About us</NavLink>
                    </ul>
                </nav>
                <NavLink className="nav-link" activeClassName="active" to="/Signup">
                    <button className="btn btn-outline-dark mb-3">Sign me in</button></NavLink>
            </header>
        </div>
    )
}
export default Header;
