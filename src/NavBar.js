import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
            <div className="navbar">
             <NavLink to="/">
             Home
             </NavLink>
            <NavLink to="/contacts">
            Contacts
            </NavLink>
            <NavLink to="/newcontactform">
            New contact Form
            </NavLink>
        </div>
        </div>
    )
}

export default NavBar