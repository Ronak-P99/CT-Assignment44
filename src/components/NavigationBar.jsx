import { NavLink } from "react-router-dom";

function NavigationBar() {
    return (
        <nav className="clearfix">
            {/* <Link to='/add-customer' >Add Customer</Link>
            <Link to='customers' >Customers</Link> */}
            <NavLink to='/characters' activeClassName="active">Characters</NavLink>
        </nav>
    )
}

export default NavigationBar