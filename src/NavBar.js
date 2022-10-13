import { NavLink } from "react-router-dom";

function NavBar() {
    return(
        <div>
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
    )
}

export default NavBar