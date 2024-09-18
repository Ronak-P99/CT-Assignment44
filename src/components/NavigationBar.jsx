import { NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="clearfix">
            {/* Navigation links */}
            <NavLink 
                to='/' 
                className={({ isActive }) => isActive ? "active" : ""} 
                end
            >
                Home
            </NavLink>

            <NavLink 
                to='/characters' 
                className={({ isActive }) => isActive ? "active" : ""}
            >
                Characters
            </NavLink>
        </nav>
    );
}

export default NavigationBar;