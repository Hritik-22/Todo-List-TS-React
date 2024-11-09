import { NavLink, useLocation, } from "react-router-dom"


const Navbar = () => {

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search).get('todo')
    return (
        <div className="nav">
            <ul>
                <li><NavLink className={!queryParams ? "active-Link" : ""} to="/">All</NavLink></li>
                <li><NavLink className={queryParams === "active" ? "active-Link" : ""} to="/?todo=active">Active</NavLink></li>
                <li><NavLink className={queryParams === "completed" ? "active-Link" : ""} to="/?todo=completed">Completed</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;
